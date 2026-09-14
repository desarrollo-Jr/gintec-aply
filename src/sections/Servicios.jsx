function IconoCodigo() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-10 w-10"
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
      className="h-10 w-10"
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
      className="h-10 w-10"
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
      className="h-10 w-10"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />

      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />

      <path d="M3 12h18" />
    </svg>
  );
}

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
      {/* Oscurecimiento */}
      <div className="absolute inset-0 bg-black/10" />

      {/* CONTENIDO */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[720px]
          w-full
          max-w-[1500px]
          flex-col
          px-6
          py-16
          md:px-10
          lg:px-16
        "
      >
        {/* ===========================
            TITULO
        ============================ */}
        <div className="mb-12 w-full text-center">
          <span
            className="
              block
              text-sm
              tracking-[0.65em]
              text-yellow-400
            "
          >
            NUESTROS
          </span>

          <h2
            className="
              mt-2
              text-3xl
              font-bold
              tracking-[0.3em]
              text-yellow-400
              sm:text-4xl
              lg:text-5xl
            "
          >
            SERVICIOS
          </h2>
        </div>

        {/* ===========================
            AREA CENTRAL
        ============================ */}
        <div
          className="
            grid
            w-full
            flex-1
            grid-cols-1
            items-center
            lg:grid-cols-2
          "
        >
          {/* IZQUIERDA */}
          <div
            className="
              flex
              w-full
              flex-col
              justify-center
            "
          >
            <div
              className="
                mx-auto
                w-full
                max-w-[650px]
                space-y-6
              "
            >
              {servicios.map((servicio) => (
                <div
                  key={servicio.id}
                  className="
                    flex
                    items-center
                    gap-5
                    text-white
                  "
                >
                  <div
                    className="
                      flex
                      w-[50px]
                      shrink-0
                      justify-center
                      text-white
                    "
                  >
                    {servicio.icono}
                  </div>

                  <p
                    className="
                      text-sm
                      leading-7
                      sm:text-base
                    "
                  >
                    <span className="mr-2 text-yellow-400">
                      •
                    </span>

                    {servicio.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DERECHA */}
          <div className="hidden lg:block" />
        </div>

        {/* ===========================
            BROCHURE
        ============================ */}
        <div
          className="
            mt-12
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
              inline-flex
              min-w-[270px]
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-white
              px-10
              py-4
              text-xs
              font-bold
              text-white
              transition-all
              duration-300
              hover:border-yellow-400
              hover:bg-yellow-400
              hover:text-black
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M12 3a1 1 0 011 1v8.59l2.3-2.29a1 1 0 011.4 1.42l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.42l2.3 2.29V4a1 1 0 011-1z" />
              <path d="M5 19a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-1z" />
            </svg>

            DESCARGAR BROUCHURE
          </a>

          <p
            className="
              mt-4
              w-full
              text-center
              text-xs
              italic
              leading-5
              text-yellow-400
            "
          >
            Para mayor información descarga nuestro Business Brouchure es
            gratis.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Servicios;