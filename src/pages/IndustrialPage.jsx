import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =========================================================
   ICONOS
========================================================= */

function WalletIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-8 w-8"
    >
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M16 10h5v4h-5a2 2 0 010-4z" />
      <path d="M7 9h5" />
    </svg>
  );
}

function InboxIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-8 w-8"
    >
      <path d="M4 5h16v11H4z" />
      <path d="M4 16l2-4h4l2 2 2-2h4l2 4" />
      <path d="M8 9h8" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-8 w-8"
    >
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v5h5" />
      <path d="M10 12h6" />
      <path d="M10 15h6" />
      <path d="M10 18h4" />
    </svg>
  );
}

function CalendarIcon() {
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
      <path d="M8 14h3" />
      <path d="M13 14h3" />
      <path d="M8 17h3" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-8 w-8"
    >
      <path d="M4 10v4l10 4V6L4 10z" />
      <path d="M14 9c2 0 4-1 6-3" />
      <path d="M14 15c2 0 4 1 6 3" />
      <path d="M7 15l1 4h3l-1-3" />
    </svg>
  );
}

function VoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-8 w-8"
    >
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M8 8h5" />
      <path d="M8 12h4" />
      <path d="M8 16h3" />
      <path d="M14.5 13.5l1.5 1.5 3-3" />
    </svg>
  );
}

/* =========================================================
   ITEM DE FUNCIÓN
========================================================= */

function FeatureItem({ icon, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="
          flex
          h-20
          w-20
          items-center
          justify-center

          rounded-md

          border
          border-white/80

          bg-black/20
          text-white

          shadow-[0_0_18px_rgba(0,0,0,0.25)]
          backdrop-blur-[2px]

          transition-all
          duration-300

          hover:-translate-y-1
          hover:bg-black/40
          hover:shadow-xl
        "
      >
        {icon}
      </div>

      <p
        className="
          mt-3
          text-[11px]
          font-medium
          uppercase
          tracking-[0.06em]
          text-white/95

          sm:text-xs
        "
      >
        {label}
      </p>
    </div>
  );
}

/* =========================================================
   INDUSTRIAL PAGE
========================================================= */

function IndustrialPage() {
  const features = [
    {
      id: 1,
      label: "Mis pagos",
      icon: <WalletIcon />,
    },
    {
      id: 2,
      label: "Buzón",
      icon: <InboxIcon />,
    },
    {
      id: 3,
      label: "Documentos",
      icon: <DocumentIcon />,
    },
    {
      id: 4,
      label: "Reservaciones",
      icon: <CalendarIcon />,
    },
    {
      id: 5,
      label: "Avisos",
      icon: <MegaphoneIcon />,
    },
    {
      id: 6,
      label: "Votaciones",
      icon: <VoteIcon />,
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-black">
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <Navbar solid />

      {/* =====================================================
          INDUSTRIAL
      ====================================================== */}
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-black
        "
      >
        {/* ===================================================
            FONDO DESKTOP
            Visible desde 768px
        ==================================================== */}
        <div
          className="
            absolute
            inset-0
            hidden
            bg-cover
            bg-center
            bg-no-repeat
            md:block
          "
          style={{
            backgroundImage: "url('/images/FondoIndustrial.png')",
          }}
        />

        {/* CAPA OSCURA DESKTOP */}
        <div
          className="
            absolute
            inset-0
            hidden
            md:block
          "
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.32) 35%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.72) 100%)",
          }}
        />

        {/* ===================================================
            FONDO MÓVIL
        ==================================================== */}
        <div
          className="
            absolute
            inset-0
            block
            bg-cover
            bg-top
            bg-no-repeat
            md:hidden
          "
          style={{
            backgroundImage:
              "url('/images/FondoIndustrialPhone.png')",
          }}
        />

        {/* CAPA OSCURA MÓVIL */}
        <div
          className="
            absolute
            inset-0
            block
            bg-black/20
            md:hidden
          "
        />

        {/* ===================================================
            CONTENIDO
        ==================================================== */}
        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-7xl
            px-5
            sm:px-8
            lg:px-10
          "
        >
          {/* =================================================
              DESKTOP
          ================================================== */}
          <div
            className="
              hidden
              min-h-[880px]
              flex-col
              items-center
              justify-start
              pb-16
              pt-20
              text-center

              md:flex

              lg:min-h-[920px]
            "
          >
            {/* ===============================================
                LOGO INDUSTRIAL
            ================================================ */}
            <div
              className="
                flex
                w-full
                flex-col
                items-center
                justify-center
              "
            >
              <img
                src="/images/LogoIndustrial.png"
                alt="Logo Industrial"
                className="
                  h-auto
                  w-[120px]
                  object-contain

                  lg:w-[145px]
                "
              />

              {/* PALABRA INDUSTRIAL */}
              <p
                className="
                  mt-2
                  text-xl
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#ff6332]

                  lg:text-2xl
                "
              >
                INDUSTRIAL
              </p>
            </div>

            {/* ===============================================
                PERFORMANCE
            ================================================ */}
            <h1
              className="
                mt-8
                text-[34px]
                font-semibold
                uppercase
                tracking-[0.45em]
                text-[#ff6332]

                lg:text-[44px]
              "
            >
              PERFORMANCE
            </h1>

            {/* ===============================================
                TEXTO PRINCIPAL
            ================================================ */}
            <p
              className="
                mx-auto
                mt-7
                max-w-[950px]

                text-[18px]
                leading-8
                text-white

                lg:text-[21px]
                lg:leading-9
              "
            >
              Somos una plataforma móvil que brinda soluciones administrativas,
              de transparencia, seguridad y comunicación para asociaciones de
              condominios, oficinas, centros comerciales y parques industriales.
            </p>

            {/* TEXTO SECUNDARIO */}
            <p
              className="
                mx-auto
                mt-10
                max-w-[900px]

                text-[17px]
                leading-8
                text-white/95

                lg:text-[19px]
              "
            >
              Customiza, diseña, automatiza, optimiza procesos, reduce costos y
              garantiza la productividad como industria 4.0.
            </p>

            {/* ===============================================
                FUNCIONES
            ================================================ */}
            <div
              className="
                mt-12
                grid
                w-full
                max-w-[950px]
                grid-cols-3
                gap-x-10
                gap-y-9

                lg:grid-cols-6
                lg:gap-x-6
              "
            >
              {features.map((item) => (
                <FeatureItem
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                />
              ))}
            </div>

            {/* ===============================================
                INFORMACIÓN
            ================================================ */}
            <p
              className="
                mt-16
                text-base
                leading-7
                text-[#ff6332]

                lg:text-lg
              "
            >
              Para mayor información descarga nuestro{" "}
              <span className="italic">
                Business Brouchure
              </span>{" "}
              es gratis.
            </p>

            {/* ===============================================
                BOTÓN
            ================================================ */}
            <a
              href="/contacto"
              className="
                mt-8

                inline-flex
                min-w-[230px]
                items-center
                justify-center

                rounded-full

                border
                border-white

                bg-black/40

                px-10
                py-4

                text-sm
                font-bold
                uppercase
                tracking-wide
                text-white

                shadow-lg

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#ff6332]
                hover:bg-[#ff6332]
                hover:text-white
              "
            >
              MÁS INFORMACIÓN
            </a>
          </div>

          {/* =================================================
              MÓVIL
          ================================================== */}
          <div
            className="
              flex
              min-h-[1250px]
              flex-col
              items-center
              justify-start
              pb-16
              pt-12
              text-center

              md:hidden
            "
          >
            <div
              className="
                mx-auto
                w-full
                max-w-[380px]
              "
            >
              {/* =============================================
                  LOGO
              ============================================== */}
              <div
                className="
                  flex
                  w-full
                  flex-col
                  items-center
                  justify-center
                "
              >
                <img
                  src="/images/LogoIndustrial.png"
                  alt="Logo Industrial"
                  className="
                    h-auto
                    w-[95px]
                    object-contain
                  "
                />

                {/* PALABRA INDUSTRIAL */}
                <p
                  className="
                    mt-2
                    text-lg
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#ff6332]
                  "
                >
                  INDUSTRIAL
                </p>
              </div>

              {/* =============================================
                  PERFORMANCE
              ============================================== */}
              <h1
                className="
                  mt-8

                  text-[27px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#ff6332]
                "
              >
                PERFORMANCE
              </h1>

              {/* =============================================
                  TEXTO
              ============================================== */}
              <p
                className="
                  mx-auto
                  mt-7
                  max-w-[340px]

                  text-[15px]
                  leading-6
                  text-white

                  min-[420px]:text-base
                  min-[420px]:leading-7
                "
              >
                Somos una plataforma móvil que brinda soluciones administrativas,
                de transparencia, seguridad y comunicación para asociaciones de
                condominios, oficinas, centros comerciales y parques industriales.
              </p>

              {/* =============================================
                  FUNCIONES
              ============================================== */}
              <div
                className="
                  mt-12

                  grid
                  grid-cols-2

                  gap-x-7
                  gap-y-10
                "
              >
                {features.map((item) => (
                  <FeatureItem
                    key={item.id}
                    icon={item.icon}
                    label={item.label}
                  />
                ))}
              </div>

              {/* =============================================
                  TEXTO INFERIOR
              ============================================== */}
              <p
                className="
                  mx-auto
                  mt-16
                  max-w-[300px]

                  text-[15px]
                  leading-6
                  text-[#ff6332]
                "
              >
                Para mayor información descarga nuestro{" "}
                <span className="italic">
                  Business Brouchure
                </span>{" "}
                es gratis.
              </p>

              {/* =============================================
                  BOTÓN
              ============================================== */}
              <a
                href="/contacto"
                className="
                  mt-8

                  inline-flex
                  min-w-[210px]
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white

                  bg-black/40

                  px-8
                  py-3.5

                  text-sm
                  font-bold
                  uppercase
                  text-white

                  transition-all
                  duration-300

                  hover:border-[#ff6332]
                  hover:bg-[#ff6332]
                "
              >
                MÁS INFORMACIÓN
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

export default IndustrialPage;