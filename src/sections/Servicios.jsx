/* =========================================================
   ICONOS
========================================================= */

function IconoCodigo() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-9 w-9"
    >
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 9l-2 2 2 2" />
      <path d="M16 9l2 2-2 2" />
      <path d="M10 20h4" />
    </svg>
  );
}

function IconoChip() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-9 w-9"
    >
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4" />
      <path d="M2 9h4M2 15h4M18 9h4M18 15h4" />
    </svg>
  );
}

function IconoMovil() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-9 w-9"
    >
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M10 18h4" />
    </svg>
  );
}

function IconoMaletin() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-9 w-9"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

/* =========================================================
   SERVICIOS
========================================================= */

function Servicios() {
  const servicios = [
    {
      id: 1,
      icono: <IconoCodigo />,
      texto: "Desarrollo e implementación tecnológica.",
    },
    {
      id: 2,
      icono: <IconoChip />,
      texto:
        "Diseño de interfaces y ambientes de interacción portable.",
    },
    {
      id: 3,
      icono: <IconoMovil />,
      texto: "Apps móviles para Android & iOS.",
    },
    {
      id: 4,
      icono: <IconoMaletin />,
      texto:
        "Plataformas de control de productividad customizadas a empresas de productos y servicios.",
    },
  ];

  return (
    <section
      id="servicios"
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage:
          "url('/images/SERVICIOS-FONDO.jpg')",
      }}
    >
      {/* =====================================================
          CAPAS PARA MEJORAR LA LECTURA
      ====================================================== */}

      {/* Oscurecimiento general */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Oscurecimiento más fuerte del lado izquierdo */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/85
          via-black/40
          to-black/10
        "
      />

      {/* =====================================================
          CONTENIDO
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[760px]
          w-full
          max-w-[1500px]
          flex-col

          px-5
          pb-12
          pt-14

          sm:px-8
          md:min-h-[800px]
          md:px-10
          md:pt-16

          lg:px-16
          lg:pb-16
        "
      >
        {/* =================================================
            TÍTULO
        ================================================== */}
        <div className="w-full text-center">
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.65em]
              text-yellow-400

              sm:text-sm
            "
          >
            NUESTROS
          </p>

          <h2
            className="
              mt-2
              text-3xl
              font-bold
              uppercase
              tracking-[0.28em]
              text-yellow-400

              sm:text-4xl
              md:text-5xl
            "
          >
            SERVICIOS
          </h2>
        </div>

        {/* =================================================
            SERVICIOS
        ================================================== */}
        <div
          className="
            flex
            flex-1
            items-center
            justify-start

            py-12
            md:py-10
          "
        >
          <div
            className="
              w-full
              max-w-[680px]

              rounded-3xl
              border
              border-white/5

              bg-black/20

              px-4
              py-7

              backdrop-blur-[1px]

              sm:px-6
              md:px-8
              md:py-8
            "
          >
            <div className="space-y-7">
              {servicios.map((servicio) => (
                <div
                  key={servicio.id}
                  className="
                    group
                    flex
                    items-center
                    gap-5

                    text-white
                  "
                >
                  {/* ICONO */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center

                      rounded-xl

                      border
                      border-white/15

                      bg-black/20

                      text-white

                      transition-all
                      duration-300

                      group-hover:border-yellow-400
                      group-hover:text-yellow-400
                    "
                  >
                    {servicio.icono}
                  </div>

                  {/* TEXTO */}
                  <p
                    className="
                      text-sm
                      leading-6

                      sm:text-base
                      sm:leading-7
                    "
                  >
                    <span
                      className="
                        mr-2
                        font-bold
                        text-yellow-400
                      "
                    >
                      •
                    </span>

                    {servicio.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            BROCHURE
        ================================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            items-center
            justify-center
            text-center
          "
        >
          <a
            href="https://drive.google.com/file/d/10MuAsh8ZBu0CpDcCmhCG97VwoaozlRUM/view"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group

              inline-flex
              min-w-[250px]
              items-center
              justify-center
              gap-3

              rounded-full

              border
              border-white/80

              bg-black/35

              px-8
              py-4

              text-xs
              font-bold
              uppercase
              tracking-wide
              text-white

              shadow-lg
              backdrop-blur-sm

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-yellow-400
              hover:bg-yellow-400
              hover:text-black

              sm:min-w-[280px]
            "
          >
            {/* ICONO DESCARGA */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-y-1
              "
            >
              <path d="M12 3a1 1 0 011 1v8.59l2.3-2.29a1 1 0 011.4 1.42l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.42l2.3 2.29V4a1 1 0 011-1z" />
              <path d="M5 19a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-1z" />
            </svg>

            DESCARGAR BROUCHURE
          </a>

          <p
            className="
              mt-4
              max-w-[500px]

              text-center
              text-xs
              italic
              leading-5
              text-yellow-400
            "
          >
            Para mayor información descarga nuestro Business Brouchure,
            es gratis.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Servicios;