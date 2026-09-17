import nodemailer from "nodemailer";

/* =========================================================
   UTILIDADES
========================================================= */

function limpiarTexto(valor) {
  if (typeof valor !== "string") {
    return "";
  }

  return valor.trim();
}

function limpiarLinea(valor) {
  return limpiarTexto(valor).replace(/[\r\n]+/g, " ");
}

function correoValido(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

/* =========================================================
   OBTENER IP
========================================================= */

function obtenerIP(req) {
  const forwarded = req.headers["x-forwarded-for"];

  if (Array.isArray(forwarded)) {
    return forwarded[0];
  }

  if (typeof forwarded === "string") {
    return forwarded.split(",")[0].trim();
  }

  return req.headers["x-real-ip"] || "";
}

/* =========================================================
   VALIDAR TURNSTILE
========================================================= */

async function validarTurnstile(token, ip) {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    throw new Error("TURNSTILE_SECRET_KEY no está configurada");
  }

  const formData = new URLSearchParams();

  formData.append(
    "secret",
    process.env.TURNSTILE_SECRET_KEY
  );

  formData.append("response", token);

  if (ip) {
    formData.append("remoteip", ip);
  }

  const respuesta = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded",
      },

      body: formData,
    }
  );

  if (!respuesta.ok) {
    return {
      success: false,
    };
  }

  return respuesta.json();
}

/* =========================================================
   HANDLER
========================================================= */

export default async function handler(req, res) {
  /* =======================================================
     SOLO POST
  ======================================================= */

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");

    return res.status(405).json({
      ok: false,
      message: "Método no permitido.",
    });
  }

  try {
    /* =====================================================
       COMPROBAR SMTP
    ===================================================== */

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      console.error(
        "Faltan variables SMTP en .env.local"
      );

      return res.status(500).json({
        ok: false,
        message:
          "El servicio de correo no está configurado.",
      });
    }

    /* =====================================================
       LEER BODY
    ===================================================== */

    let body = req.body || {};

    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({
          ok: false,
          message: "Solicitud inválida.",
        });
      }
    }

    const {
      nombre,
      correo,
      mensaje,
      website,
      turnstileToken,
    } = body;

    /* =====================================================
       HONEYPOT
    ===================================================== */

    /*
      Este campo está oculto.

      Una persona real debería dejarlo vacío.
      Muchos bots lo llenan automáticamente.
    */

    if (
      typeof website === "string" &&
      website.trim() !== ""
    ) {
      /*
        Respondemos como si todo hubiera salido bien
        para que el bot no sepa que fue detectado.
      */

      return res.status(200).json({
        ok: true,
        message: "Mensaje enviado correctamente.",
      });
    }

    /* =====================================================
       LIMPIAR INFORMACIÓN
    ===================================================== */

    const nombreLimpio =
      limpiarLinea(nombre);

    const correoLimpio =
      limpiarLinea(correo).toLowerCase();

    const mensajeLimpio =
      limpiarTexto(mensaje);

    /* =====================================================
       VALIDAR NOMBRE
    ===================================================== */

    if (
      nombreLimpio.length < 2 ||
      nombreLimpio.length > 80
    ) {
      return res.status(400).json({
        ok: false,
        message: "El nombre no es válido.",
      });
    }

    /* =====================================================
       VALIDAR CORREO
    ===================================================== */

    if (
      correoLimpio.length > 160 ||
      !correoValido(correoLimpio)
    ) {
      return res.status(400).json({
        ok: false,
        message:
          "El correo electrónico no es válido.",
      });
    }

    /* =====================================================
       VALIDAR MENSAJE
    ===================================================== */

    if (
      mensajeLimpio.length < 5 ||
      mensajeLimpio.length > 300
    ) {
      return res.status(400).json({
        ok: false,
        message:
          "El mensaje debe contener entre 5 y 300 caracteres.",
      });
    }

    /* =====================================================
       BLOQUEO BÁSICO DE SPAM POR ENLACES
    ===================================================== */

    const enlaces =
      mensajeLimpio.match(
        /https?:\/\/|www\./gi
      ) || [];

    if (enlaces.length > 2) {
      return res.status(400).json({
        ok: false,
        message:
          "El mensaje contiene demasiados enlaces.",
      });
    }

    /* =====================================================
       TURNSTILE
    ===================================================== */

    if (
      !turnstileToken ||
      typeof turnstileToken !== "string"
    ) {
      return res.status(403).json({
        ok: false,
        message:
          "Completa la verificación de seguridad.",
      });
    }

    const ip = obtenerIP(req);

    const verificacion =
      await validarTurnstile(
        turnstileToken,
        ip
      );

    if (!verificacion.success) {
      return res.status(403).json({
        ok: false,
        message:
          "No fue posible verificar la solicitud.",
      });
    }

    /* =====================================================
       CONFIGURAR NODEMAILER
    ===================================================== */

    const transporter =
      nodemailer.createTransport({
        host: process.env.SMTP_HOST,

        port: Number(
          process.env.SMTP_PORT
        ),

        secure:
          Number(
            process.env.SMTP_PORT
          ) === 465,

        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

    /* =====================================================
       CONTENIDO DEL CORREO
    ===================================================== */

    const contenidoTexto = `
Nuevo mensaje desde el sitio web de Gintec Aply

Nombre:
${nombreLimpio}

Correo:
${correoLimpio}

Mensaje:
${mensajeLimpio}

-----------------------------------------

Mensaje enviado desde:
gintecaply.com

Al presionar "Responder",
la respuesta será enviada a:

${correoLimpio}
    `.trim();

    /* =====================================================
       ENVIAR EMAIL
    ===================================================== */

    await transporter.sendMail({
      /*
        Siempre enviamos desde la cuenta
        real de Hostinger.
      */

      from: `"Gintec Aply Web" <${process.env.SMTP_USER}>`,

      /*
        El formulario llegará aquí.
      */

      to:
        "desarrollojr@gintecaply.com",

      /*
        IMPORTANTE:

        Cuando tú presiones RESPONDER,
        responderá al correo que escribió
        el visitante.
      */

      replyTo: correoLimpio,

      subject:
        "[Gintec Aply Web] Nuevo mensaje de contacto",

      text: contenidoTexto,
    });

    /* =====================================================
       RESPUESTA CORRECTA
    ===================================================== */

    return res.status(200).json({
      ok: true,
      message:
        "Mensaje enviado correctamente.",
    });
  } catch (error) {
    console.error(
      "ERROR CONTACTO:",
      error
    );

    return res.status(500).json({
      ok: false,
      message:
        "Ocurrió un error al enviar el mensaje.",
    });
  }
}