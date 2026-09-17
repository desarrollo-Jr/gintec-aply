import {
  useEffect,
  useRef,
  useState,
} from "react";

/* =========================================================
   ICONOS
========================================================= */

function TelefonoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-9 w-9"
    >
      <path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.56 3.5.56a1 1 0 011 1V20a1 1 0 01-1 1C10.6 21 3 13.4 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.56 3.5a1 1 0 01-.25 1L6.6 10.8z" />
    </svg>
  );
}

function CorreoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-10 w-10"
    >
      <path d="M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2zm9 8L3.8 7.5a.7.7 0 00-.8 0v.4l9 6.1 9-6.1v-.4a.7.7 0 00-.8 0L12 13z" />
    </svg>
  );
}

function UbicacionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-10 w-10"
    >
      <path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 10a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  );
}

/* =========================================================
   TURNSTILE
========================================================= */

function TurnstileWidget({
  onVerify,
  resetKey,
}) {
  const contenedorRef =
    useRef(null);

  const widgetIdRef =
    useRef(null);

  const siteKey =
    import.meta.env
      .VITE_TURNSTILE_SITE_KEY;

  useEffect(() => {
    let cancelado = false;
    let timer;

    const renderizar = () => {
      if (
        cancelado ||
        !contenedorRef.current
      ) {
        return;
      }

      if (!window.turnstile) {
        timer = setTimeout(
          renderizar,
          150
        );

        return;
      }

      if (
        widgetIdRef.current !== null
      ) {
        return;
      }

      widgetIdRef.current =
        window.turnstile.render(
          contenedorRef.current,
          {
            sitekey: siteKey,

            theme: "dark",

            size: "flexible",

            appearance:
              "interaction-only",

            action: "contacto",

            callback: (token) => {
              onVerify(token);
            },

            "expired-callback": () => {
              onVerify("");
            },

            "error-callback": () => {
              onVerify("");
            },
          }
        );
    };

    if (siteKey) {
      renderizar();
    }

    return () => {
      cancelado = true;

      clearTimeout(timer);

      if (
        window.turnstile &&
        widgetIdRef.current !== null
      ) {
        try {
          window.turnstile.remove(
            widgetIdRef.current
          );
        } catch {
          // Nada
        }

        widgetIdRef.current = null;
      }
    };
  }, [siteKey, onVerify]);

  /* Reiniciar después de envío */
  useEffect(() => {
    if (
      resetKey > 0 &&
      window.turnstile &&
      widgetIdRef.current !== null
    ) {
      window.turnstile.reset(
        widgetIdRef.current
      );
    }
  }, [resetKey]);

  if (!siteKey) {
    return (
      <p className="text-sm text-red-300">
        Falta configurar Turnstile.
      </p>
    );
  }

  return (
    <div
      ref={contenedorRef}
      className="w-full max-w-[340px]"
    />
  );
}

/* =========================================================
   CONTACTO
========================================================= */

function Contacto() {
  const [nombre, setNombre] =
    useState("");

  const [correo, setCorreo] =
    useState("");

  const [mensaje, setMensaje] =
    useState("");

  /* Honeypot */
  const [website, setWebsite] =
    useState("");

  const [
    turnstileToken,
    setTurnstileToken,
  ] = useState("");

  const [resetKey, setResetKey] =
    useState(0);

  const [estado, setEstado] =
    useState("");

  const [tipoEstado, setTipoEstado] =
    useState("");

  const [enviando, setEnviando] =
    useState(false);

  const correoValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      email
    );
  };

  /* =======================================================
     ENVIAR
  ======================================================= */

  const enviarFormulario = async (
    event
  ) => {
    event.preventDefault();

    setEstado("");
    setTipoEstado("");

    const nombreLimpio =
      nombre.trim();

    const correoLimpio =
      correo.trim();

    const mensajeLimpio =
      mensaje.trim();

    if (nombreLimpio.length < 2) {
      setTipoEstado("error");
      setEstado(
        "Escribe un nombre válido."
      );

      return;
    }

    if (
      !correoValido(
        correoLimpio
      )
    ) {
      setTipoEstado("error");
      setEstado(
        "Escribe un correo electrónico válido."
      );

      return;
    }

    if (
      mensajeLimpio.length < 5
    ) {
      setTipoEstado("error");
      setEstado(
        "El mensaje es demasiado corto."
      );

      return;
    }

    if (mensaje.length > 300) {
      setTipoEstado("error");
      setEstado(
        "El mensaje no puede superar los 300 caracteres."
      );

      return;
    }

    if (!turnstileToken) {
      setTipoEstado("error");
      setEstado(
        "Completa la verificación de seguridad."
      );

      return;
    }

    try {
      setEnviando(true);

      const respuesta =
        await fetch(
          "/api/contacto",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              nombre:
                nombreLimpio,

              correo:
                correoLimpio,

              mensaje:
                mensajeLimpio,

              website,

              turnstileToken,
            }),
          }
        );

      const resultado =
        await respuesta
          .json()
          .catch(() => ({}));

      if (!respuesta.ok) {
        setTipoEstado("error");

        if (
          respuesta.status ===
          429
        ) {
          setEstado(
            "Has enviado varios mensajes. Espera unos minutos antes de volver a intentarlo."
          );
        } else {
          setEstado(
            resultado.message ||
              "No fue posible enviar el mensaje."
          );
        }

        /*
          El token de Turnstile puede
          haberse consumido, por lo que
          generamos otro.
        */
        setTurnstileToken("");

        setResetKey(
          (anterior) =>
            anterior + 1
        );

        return;
      }

      /* ÉXITO */

      setTipoEstado("exito");

      setEstado(
        "Mensaje enviado correctamente. Nos pondremos en contacto contigo."
      );

      setNombre("");
      setCorreo("");
      setMensaje("");
      setWebsite("");

      setTurnstileToken("");

      setResetKey(
        (anterior) =>
          anterior + 1
      );
    } catch (error) {
      console.error(error);

      setTipoEstado("error");

      setEstado(
        "No se pudo conectar con el servidor. Inténtalo nuevamente."
      );

      setTurnstileToken("");

      setResetKey(
        (anterior) =>
          anterior + 1
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section
      id="contacto"
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        bg-cover
        bg-center
        bg-no-repeat
        text-white
      "
      style={{
        backgroundImage:
          "url('/images/FondoCONTACTO.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/25" />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[850px]
          w-full
          max-w-6xl
          flex-col
          px-5
          pb-16
          pt-24
          sm:px-8
          md:pt-28
          lg:px-10
        "
      >
        {/* TÍTULO */}

        <h2
          className="
            text-center
            text-3xl
            font-bold
            tracking-[0.35em]
            text-yellow-400
            sm:text-4xl
            md:text-5xl
          "
        >
          CONTÁCTANOS
        </h2>

        {/* DATOS */}

        <div
          className="
            mx-auto
            mt-10
            grid
            w-full
            max-w-4xl
            grid-cols-1
            gap-8
            md:mt-12
            md:grid-cols-3
            md:gap-0
          "
        >
          {/* TELÉFONO */}

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
              md:border-r
              md:border-yellow-400/50
              md:px-5
            "
          >
            <TelefonoIcon />

            <span className="mt-3 text-sm italic text-yellow-400">
              Teléfono
            </span>

            <a
              href="tel:+527712576279"
              className="
                mt-2
                text-lg
                font-semibold
                transition
                hover:text-yellow-400
              "
            >
              (771) 257 6279
            </a>
          </div>

          {/* CORREO */}

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
              md:border-r
              md:border-yellow-400/50
              md:px-5
            "
          >
            <CorreoIcon />

            <span className="mt-3 text-sm italic text-yellow-400">
              Mail
            </span>

            <a
              href="mailto:contacto@gintecaply.com"
              className="
                mt-2
                break-all
                text-base
                font-semibold
                transition
                hover:text-yellow-400
                sm:text-lg
              "
            >
              contacto@gintecaply.com
            </a>
          </div>

          {/* UBICACIÓN */}

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
              md:px-5
            "
          >
            <UbicacionIcon />

            <span className="mt-3 text-sm italic text-yellow-400">
              Ubicación
            </span>

            <p className="mt-2 text-lg font-semibold">
              Pachuca, Hidalgo
            </p>
          </div>
        </div>

        {/* FORMULARIO */}

        <form
          onSubmit={
            enviarFormulario
          }
          noValidate
          className="
            relative
            mx-auto
            mt-auto
            w-full
            max-w-5xl
            pt-16
          "
        >
          {/* =================================
              HONEYPOT

              No lo verá ningún usuario.
          ================================== */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-[-9999px]
              top-auto
              h-[1px]
              w-[1px]
              overflow-hidden
            "
          >
            <label htmlFor="website">
              Sitio web
            </label>

            <input
              id="website"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) =>
                setWebsite(
                  e.target.value
                )
              }
            />
          </div>

          {/* NOMBRE / CORREO */}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre..."
              autoComplete="name"
              maxLength={80}
              value={nombre}
              onChange={(e) =>
                setNombre(
                  e.target.value
                )
              }
              className="
                h-[54px]
                w-full
                border
                border-transparent
                bg-white
                px-4
                text-sm
                text-black
                outline-none
                transition
                focus:border-yellow-400
              "
            />

            <input
              type="email"
              name="correo"
              placeholder="Correo..."
              autoComplete="email"
              maxLength={160}
              value={correo}
              onChange={(e) =>
                setCorreo(
                  e.target.value
                )
              }
              className="
                h-[54px]
                w-full
                border
                border-transparent
                bg-white
                px-4
                text-sm
                text-black
                outline-none
                transition
                focus:border-yellow-400
              "
            />
          </div>

          {/* MENSAJE */}

          <div className="relative mt-4">
            <textarea
              name="mensaje"
              rows="6"
              maxLength={300}
              placeholder="Mensaje..."
              value={mensaje}
              onChange={(e) =>
                setMensaje(
                  e.target.value
                )
              }
              className="
                min-h-[150px]
                w-full
                resize-none
                border
                border-transparent
                bg-white
                px-4
                pb-9
                pt-4
                text-sm
                text-black
                outline-none
                transition
                focus:border-yellow-400
              "
            />

            {/* CONTADOR */}

            <span
              className={`
                absolute
                bottom-3
                right-4
                text-xs
                ${
                  mensaje.length >=
                  280
                    ? "text-red-500"
                    : "text-gray-500"
                }
              `}
            >
              {mensaje.length} / 300
            </span>
          </div>

          {/* TURNSTILE */}

          <div className="mt-5">
            <TurnstileWidget
              onVerify={
                setTurnstileToken
              }
              resetKey={resetKey}
            />
          </div>

          {/* ESTADO */}

          {estado && (
            <div
              className={`
                mt-5
                rounded-lg
                px-4
                py-3
                text-sm
                font-medium

                ${
                  tipoEstado ===
                  "exito"
                    ? "border border-green-400/30 bg-green-500/20 text-green-200"
                    : "border border-red-400/30 bg-red-500/20 text-red-200"
                }
              `}
            >
              {estado}
            </div>
          )}

          {/* BOTÓN */}

          <button
            type="submit"
            disabled={enviando}
            className="
              mt-5
              min-w-[135px]
              rounded-full
              bg-yellow-400
              px-9
              py-3
              text-xs
              font-bold
              uppercase
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-white
              disabled:cursor-not-allowed
              disabled:opacity-50
              disabled:hover:scale-100
            "
          >
            {enviando
              ? "ENVIANDO..."
              : "ENVIAR"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;