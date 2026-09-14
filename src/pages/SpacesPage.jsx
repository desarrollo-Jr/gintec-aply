import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SpacesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black">
      {/* NAVBAR */}
      <Navbar solid />

      {/* SECCIÓN PRINCIPAL */}
      <section className="relative w-full overflow-hidden bg-black">
        {/* =========================
            FONDO DESKTOP
        ========================= */}
        <div
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
          style={{
            backgroundImage: "url('/images/FondoSpace.png')",
          }}
        />

        {/* CAPA OSCURA DESKTOP */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.18) 30%, rgba(0,0,0,0.35) 65%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* =========================
            FONDO MÓVIL
        ========================= */}
        <div
          className="absolute inset-0 block bg-cover bg-center bg-no-repeat md:hidden"
          style={{
            backgroundImage: "url('/images/FondoSpacePhone.png')",
          }}
        />

        {/* CAPA OSCURA MÓVIL */}
        <div
          className="absolute inset-0 block md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.28) 35%, rgba(0,0,0,0.52) 70%, rgba(0,0,0,0.70) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* =========================
              VERSIÓN DESKTOP
          ========================= */}
          <div className="hidden min-h-[860px] flex-col items-center justify-center pb-24 pt-16 text-center md:flex lg:min-h-[900px]">
            {/* Logo */}
            <img
              src="/images/LogoSpace.png"
              alt="Logo Spaces"
              className="h-auto w-[92px] object-contain lg:w-[110px]"
            />

            {/* Títulos */}
            <p
              className="
                mt-8
                text-[26px]
                font-bold
                uppercase
                italic
                leading-none
                tracking-wide
                text-white
                drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]
                lg:text-[34px]
              "
            >
              BRINDAMOS SOLUCIONES
            </p>

            <h1
              className="
                mt-2
                text-[72px]
                font-extrabold
                uppercase
                italic
                leading-none
                tracking-tight
                text-white
                drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]
                lg:text-[96px]
                xl:text-[112px]
              "
            >
              ADMINISTRATIVAS
            </h1>

            <h2
              className="
                mt-2
                text-[34px]
                font-extrabold
                uppercase
                italic
                leading-none
                tracking-wide
                text-white
                drop-shadow-[0_4px_12px_rgba(0,0,0,0.50)]
                lg:text-[42px]
              "
            >
              DE SEGURIDAD Y COMUNICACIÓN
            </h2>

            {/* Texto */}
            <p
              className="
                mx-auto
                mt-14
                max-w-[980px]
                text-[22px]
                font-medium
                leading-10
                text-white
                drop-shadow-[0_4px_10px_rgba(0,0,0,0.55)]
                lg:text-[24px]
              "
            >
              Buscamos simplificar la vida diaria de nuestros usuarios por medio
              de innovación constante a través de funciones de seguridad,
              transparencia, agilidad y comunicación.
            </p>

            {/* Texto brochure */}
            <p
              className="
                mt-32
                text-base
                text-white/95
                drop-shadow-[0_3px_8px_rgba(0,0,0,0.55)]
                lg:text-lg
              "
            >
              Para mayor información descarga nuestro{" "}
              <span className="italic">Business Brouchure</span> es gratis.
            </p>

            {/* Botón */}
            <a
              href="/contacto"
              className="
                mt-8
                inline-flex
                min-w-[240px]
                items-center
                justify-center
                rounded-full
                border
                border-white
                bg-[#0e4f5d]/80
                px-10
                py-4
                text-base
                font-bold
                uppercase
                text-white
                shadow-[0_10px_24px_rgba(0,0,0,0.35)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#0a6d80]
              "
            >
              MÁS INFORMACIÓN
            </a>
          </div>

          {/* =========================
              VERSIÓN MÓVIL
          ========================= */}
          <div className="flex min-h-[980px] flex-col items-center justify-start pb-14 pt-16 text-center md:hidden">
            <div className="mx-auto flex w-full max-w-[340px] flex-col items-center">
              {/* Logo */}
              <img
                src="/images/LogoSpace.png"
                alt="Logo Spaces"
                className="h-auto w-[88px] object-contain"
              />

              {/* Títulos */}
              <p
                className="
                  mt-8
                  text-[16px]
                  font-bold
                  uppercase
                  leading-none
                  tracking-wide
                  text-white
                "
              >
                BRINDAMOS SOLUCIONES
              </p>

              <h1
                className="
                  mt-1
                  text-[28px]
                  font-extrabold
                  uppercase
                  leading-none
                  tracking-tight
                  text-white
                "
              >
                ADMINISTRATIVAS
              </h1>

              <h2
                className="
                  mt-1
                  text-[16px]
                  font-bold
                  uppercase
                  leading-none
                  tracking-wide
                  text-white
                "
              >
                DE SEGURIDAD Y COMUNICACIÓN
              </h2>

              {/* Texto */}
              <p
                className="
                  mt-14
                  max-w-[310px]
                  text-[17px]
                  leading-9
                  text-white
                "
              >
                Buscamos simplificar la vida diaria de nuestros usuarios por
                medio de innovación constante a través de funciones de
                seguridad, transparencia, agilidad y comunicación.
              </p>

              {/* Texto brochure */}
              <p
                className="
                  mt-40
                  max-w-[290px]
                  text-[14px]
                  leading-6
                  text-white/95
                "
              >
                Para mayor información descarga nuestro{" "}
                <span className="italic">Business Brouchure</span> es gratis.
              </p>

              {/* Botón */}
              <a
                href="/contacto"
                className="
                  mt-8
                  inline-flex
                  min-w-[220px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white
                  bg-[#0e4f5d]/85
                  px-8
                  py-3.5
                  text-sm
                  font-bold
                  uppercase
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#0a6d80]
                "
              >
                MÁS INFORMACIÓN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

export default SpacesPage;