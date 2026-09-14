import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =========================================================
   ICONOS
========================================================= */

function AccesoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-8 w-8"
    >
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />

      <path d="M14 14h2v2h-2z" />
      <path d="M18 14h2v2h-2z" />
      <path d="M14 18h2v2h-2z" />
      <path d="M18 18h2v2h-2z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-8 w-8"
    >
      <path d="M5 5h11a3 3 0 013 3v5a3 3 0 01-3 3h-6l-4 3v-3H5a3 3 0 01-3-3V8a3 3 0 013-3z" />

      <path d="M7 9h8" />
      <path d="M7 12h6" />
    </svg>
  );
}

function AnuncioIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-8 w-8"
    >
      <path d="M4 10v4l11 4V6L4 10z" />

      <path d="M15 9c2 0 4-1 5-3" />
      <path d="M15 15c2 0 4 1 5 3" />

      <path d="M6 15l1 5h3l-1-4" />
    </svg>
  );
}

function CuentaIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-8 w-8"
    >
      <path d="M6 3h10l3 3v15H6z" />

      <path d="M16 3v4h4" />

      <path d="M9 11h6" />
      <path d="M9 15h4" />

      <circle cx="17" cy="17" r="3" />

      <path d="M17 15.5v3" />
      <path d="M15.8 16.2h2.4" />
      <path d="M15.8 17.8h2.4" />
    </svg>
  );
}

function SoporteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-8 w-8"
    >
      <circle cx="12" cy="12" r="4" />

      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />

      <path d="M5 5l2 2" />
      <path d="M17 17l2 2" />
      <path d="M19 5l-2 2" />
      <path d="M7 17l-2 2" />
    </svg>
  );
}

function ReservacionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-8 w-8"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />

      <path d="M7 2v6" />
      <path d="M17 2v6" />
      <path d="M3 10h18" />

      <circle cx="16" cy="16" r="3" />

      <path d="M16 14.5v3" />
      <path d="M14.5 16h3" />
    </svg>
  );
}

/* =========================================================
   TARJETA DE FUNCIONES
========================================================= */

function FuncionCard({ icono, titulo, texto }) {
  return (
    <article
      className="
        relative
        flex
        min-h-[155px]
        flex-col
        items-center
        justify-center

        rounded-[20px]

        border
        border-white/60

        bg-white/60

        px-4
        pb-5
        pt-9

        text-center

        shadow-md
        backdrop-blur-md

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-lg

        sm:min-h-[165px]
      "
    >
      {/* ICONO */}
      <div
        className="
          absolute
          -top-6

          flex
          h-14
          w-14
          items-center
          justify-center

          rounded-full

          bg-white

          text-[#07152e]

          shadow-sm
        "
      >
        {icono}
      </div>

      {/* TITULO */}
      <h3
        className="
          text-[15px]
          font-bold
          leading-tight
          text-[#07152e]

          sm:text-base
        "
      >
        {titulo}
      </h3>

      {/* TEXTO */}
      <p
        className="
          mt-2
          text-[12px]
          leading-5
          text-[#26384d]

          sm:text-sm
        "
      >
        {texto}
      </p>
    </article>
  );
}

/* =========================================================
   HABITAN T PAGE
========================================================= */

function HabitanTPage() {
  const funciones = [
    {
      id: 1,
      icono: <AccesoIcon />,
      titulo: "Control de accesos",
      texto:
        "Control de accesos remoto, vecino vigilante, accesos biométricos.",
    },
    {
      id: 2,
      icono: <ChatIcon />,
      titulo: "Chat de vecinos",
      texto:
        "Chat privado, comunidad, documentos en la nube, pizarrón electrónico.",
    },
    {
      id: 3,
      icono: <AnuncioIcon />,
      titulo: "Anuncios y votaciones",
      texto:
        "Votaciones en línea, anuncios y administración multi-usuario.",
    },
    {
      id: 4,
      icono: <CuentaIcon />,
      titulo: "Estados de cuenta",
      texto:
        "Balance financiero en tiempo real, cuentas por cobrar, reporte de gastos e ingresos, y más.",
    },
    {
      id: 5,
      icono: <SoporteIcon />,
      titulo: "Soporte técnico",
      texto:
        "Un asesor estará disponible para solucionar dudas y fallas.",
    },
    {
      id: 6,
      icono: <ReservacionIcon />,
      titulo: "Reservaciones",
      texto:
        "Reservaciones de áreas comunes, control de accesos masivos y pagos en línea.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-black">
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <Navbar solid />

      {/* =====================================================
          HABITAN-T
      ====================================================== */}
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-white
        "
      >
        {/* ===================================================
            FONDO MÓVIL
            Visible de 0px a 767px
        ==================================================== */}
        <div
          className="
            absolute
            inset-0
            z-0

            block

            bg-cover
            bg-top
            bg-no-repeat

            md:hidden
          "
          style={{
            backgroundImage:
              "url('/images/Fondo-HAbitant-phone.png')",
          }}
        />

        {/* ===================================================
            FONDO DESKTOP
            Visible desde 768px
        ==================================================== */}
        <div
          className="
            absolute
            inset-0
            z-0

            hidden

            bg-cover
            bg-center
            bg-no-repeat

            md:block
          "
          style={{
            backgroundImage:
              "url('/images/Fondo-HAbitant-desktop.png')",
          }}
        />

        {/* ===================================================
            DESKTOP / TABLET
        ==================================================== */}
        <div
          className="
            relative
            z-10

            mx-auto

            hidden

            min-h-[820px]
            w-full
            max-w-[1600px]

            px-8
            py-10

            md:block

            lg:min-h-[900px]
            lg:px-12
          "
        >
          {/* LOGO */}
          <img
            src="/images/LogoHabitan-t.png"
            alt="Habitan-T"
            className="
              w-[190px]
              object-contain

              lg:w-[230px]
            "
          />

          {/* CONTENIDO IZQUIERDO */}
          <div
            className="
              mt-8

              flex
              w-[64%]
              flex-col
              items-center

              lg:w-[62%]
            "
          >
            {/* TITULO */}
            <h1
              className="
                text-center
                text-2xl
                font-extrabold
                text-[#07152e]

                lg:text-3xl
              "
            >
              ¡CONOCE NUESTRA APP!
            </h1>

            {/* Espacio para mostrar la ciudad */}
            <div
              className="
                h-[210px]

                lg:h-[245px]
              "
            />

            {/* CARDS */}
            <div
              className="
                grid
                w-full
                grid-cols-3

                gap-x-5
                gap-y-12

                lg:gap-x-6
                lg:gap-y-14
              "
            >
              {funciones.map((funcion) => (
                <FuncionCard
                  key={funcion.id}
                  icono={funcion.icono}
                  titulo={funcion.titulo}
                  texto={funcion.texto}
                />
              ))}
            </div>

            {/* BOTON */}
            <a
              href="https://habitan-t.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10

                inline-flex
                min-w-[220px]
                items-center
                justify-center

                rounded-full

                bg-[#bdcae2]

                px-10
                py-4

                text-sm
                font-bold
                uppercase
                text-white

                shadow-md

                transition-all
                duration-300

                hover:-translate-y-1
                hover:scale-105
                hover:bg-[#a8b8d8]
                hover:shadow-lg
              "
            >
              LLÉVAME AL SITIO
            </a>
          </div>
        </div>

        {/* ===================================================
            MÓVIL
        ==================================================== */}
        <div
          className="
            relative
            z-10

            flex
            min-h-[1950px]
            w-full
            flex-col

            px-5
            pb-14
            pt-6

            md:hidden
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-[400px]
            "
          >
            {/* LOGO */}
            <img
              src="/images/LogoHabitan-t.png"
              alt="Habitan-T"
              className="
                w-[160px]
                object-contain

                sm:w-[180px]
              "
            />

            {/* TITULO */}
            <div
              className="
                mt-[110px]
                text-center
              "
            >
              <h1
                className="
                  text-[28px]
                  font-extrabold
                  leading-tight
                  text-[#07152e]
                "
              >
                ¡CONOCE NUESTRA APP!
              </h1>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-[320px]

                  text-sm
                  leading-6
                  text-[#3b4d63]
                "
              >
                Descubre todas las novedades que nuestra app te ofrece para una
                administración más práctica, segura y eficiente.
              </p>
            </div>

            {/* =================================================
                ESPACIO PARA MOSTRAR LA CIUDAD

                Aumentamos este espacio para que
                se vea mejor la ilustración del fondo.
            ================================================== */}
            <div
              className="
                h-[530px]

                min-[690px]:h-[570px]

                sm:h-[610px]
              "
            />

            {/* =================================================
                CARDS
                Ahora empiezan más abajo.
            ================================================== */}
            <div
              className="
                grid
                grid-cols-1

                gap-y-10

                min-[390px]:grid-cols-2
                min-[390px]:gap-x-4
                min-[390px]:gap-y-10
              "
            >
              {funciones.map((funcion) => (
                <FuncionCard
                  key={funcion.id}
                  icono={funcion.icono}
                  titulo={funcion.titulo}
                  texto={funcion.texto}
                />
              ))}
            </div>

            {/* =================================================
                BOTON
            ================================================== */}
            <div
              className="
                mt-12
                flex
                justify-center

                pb-[430px]

                sm:pb-[500px]
              "
            >
              <a
                href="https://habitan-t.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  min-w-[200px]
                  items-center
                  justify-center

                  rounded-full

                  bg-[#bdcae2]

                  px-8
                  py-3.5

                  text-xs
                  font-bold
                  uppercase
                  text-white

                  shadow-md

                  transition-all
                  duration-300

                  hover:scale-105
                  hover:bg-[#a8b8d8]
                "
              >
                LLÉVAME AL SITIO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <Footer />
    </main>
  );
}

export default HabitanTPage;