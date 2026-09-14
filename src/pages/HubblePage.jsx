import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PlatformLogo({ src, alt }) {
  return (
    <div
      className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-white/85
        p-2
        shadow-md
        ring-1
        ring-black/5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}

function HubblePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      {/* NAVBAR */}
      <Navbar solid />

      {/* =====================================================
          HERO / INFORMACIÓN HUBLE
      ====================================================== */}
      <section className="relative isolate overflow-hidden bg-white">
        {/* FONDO DESKTOP */}
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
            backgroundImage: "url('/images/FondoHuble.png')",
          }}
        />

        {/* CAPA PARA AYUDAR A LA LEGIBILIDAD EN DESKTOP */}
        <div
          className="
            absolute
            inset-0
            hidden
            md:block
          "
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.93) 28%, rgba(255,255,255,0.82) 42%, rgba(255,255,255,0.25) 58%, rgba(255,255,255,0.00) 100%)",
          }}
        />

        {/* FONDO MÓVIL */}
        <div
          className="
            absolute
            inset-0
            block
            bg-cover
            bg-no-repeat
            md:hidden
          "
          style={{
            backgroundImage: "url('/images/FondoHuble.png')",
            backgroundPosition: "68% top",
          }}
        />

        {/* CAPA MÓVIL */}
        <div
          className="
            absolute
            inset-0
            md:hidden
          "
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.90) 22%, rgba(255,255,255,0.88) 55%, rgba(255,255,255,0.95) 100%)",
          }}
        />

        {/* CONTENIDO */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div
            className="
              flex
              min-h-[980px]
              items-start
              md:min-h-[760px]
              lg:min-h-[860px]
            "
          >
            <div
              className="
                w-full
                pt-24
                pb-16
                md:max-w-[500px]
                md:pt-24
                md:pb-24
                lg:max-w-[560px]
              "
            >
              {/* TARJETA DE CONTENIDO */}
              <div
                className="
                  rounded-[28px]
                  border
                  border-black/5
                  bg-white/72
                  p-6
                  shadow-xl
                  backdrop-blur-sm

                  sm:p-8

                  md:rounded-none
                  md:border-0
                  md:bg-transparent
                  md:p-0
                  md:shadow-none
                  md:backdrop-blur-0
                "
              >
                {/* MARCA */}
                <div className="max-w-[420px]">
                  <h1
                    className="
                      text-[44px]
                      font-black
                      leading-none
                      tracking-tight
                      text-black

                      sm:text-[54px]
                      md:text-[58px]
                    "
                  >
                    Huble
                  </h1>

                  <p
                    className="
                      mt-3
                      text-sm
                      uppercase
                      tracking-[0.28em]
                      text-[#666666]

                      sm:text-base
                      md:text-[15px]
                    "
                  >
                    Shape your reality
                  </p>
                </div>

                {/* TEXTO */}
                <div
                  className="
                    mt-8
                    max-w-[470px]
                    space-y-5
                    text-[16px]
                    leading-8
                    text-[#5b5b5b]

                    sm:text-[17px]
                    md:text-[18px]
                  "
                >
                  <p>
                    Con <span className="font-semibold text-[#2f2f2f]">Huble</span>{" "}
                    podrás programar tus metas:{" "}
                    <span className="font-medium text-[#3a3a3a]">
                      Enjoy, Learn & Gains
                    </span>{" "}
                    a través de un{" "}
                    <span className="font-medium text-[#3a3a3a]">
                      Balanced Score Card
                    </span>{" "}
                    personal.
                  </p>

                  <p>
                    Tendrás un sistema de retos dinámicos y diversas herramientas
                    en línea que te permitirán dar un mejor performance en tus
                    actividades y en tu desarrollo personal.
                  </p>

                  <p>
                    Queremos transportarte a la mejor versión de ti mismo, con
                    tus mejores aportaciones al mundo que te rodea.
                  </p>
                </div>

                {/* PLATAFORMAS */}
                <div className="mt-10 max-w-[470px]">
                  <p
                    className="
                      text-sm
                      uppercase
                      tracking-[0.25em]
                      text-[#6a6a6a]

                      sm:text-[15px]
                    "
                  >
                    Disponible en plataformas digitales
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-4 sm:gap-5">
                    <PlatformLogo
                      src="/images/appstorelogo.png"
                      alt="App Store"
                    />
                    <PlatformLogo
                      src="/images/playstorelogo.png"
                      alt="Google Play"
                    />
                    <PlatformLogo
                      src="/images/huaweilogo.png"
                      alt="Huawei AppGallery"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

export default HubblePage;