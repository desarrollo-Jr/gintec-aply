import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function IndustrialPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black">

      {/* =====================================
          NAVBAR
      ====================================== */}
      <Navbar solid />

      {/* =====================================
          INDUSTRIAL
      ====================================== */}
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-black
        "
      >
        <div className="relative w-full">

          {/* =================================
              IMAGEN RESPONSIVE
          ================================== */}
          <picture>

            {/* TELÉFONO */}
            <source
              media="(max-width: 767px)"
              srcSet="/images/FUNCIONES-INDUSTRIAL-1.jpg"
            />

            {/* DESKTOP */}
            <img
              src="/images/ENLACE-INDUSTRIAL-1.jpg"
              alt="Industrial - Procesos Industriales"
              className="
                block
                h-auto
                w-full
                object-contain
                object-top
              "
            />

          </picture>

          {/* =================================
              BOTÓN MÁS INFORMACIÓN
          ================================== */}
          <a
            href="#"
            className="
              absolute
              left-1/2
              z-30
              -translate-x-1/2

              bottom-[6%]

              flex
              min-w-[175px]
              items-center
              justify-center

              whitespace-nowrap
              rounded-full

              border
              border-white

              bg-black/60

              px-7
              py-3

              text-[11px]
              font-bold
              uppercase
              tracking-wide
              text-white

              shadow-lg
              backdrop-blur-sm

              transition-all
              duration-300

              hover:scale-105
              hover:border-orange-500
              hover:bg-orange-500
              hover:text-white

              sm:bottom-[6%]
              sm:min-w-[190px]
              sm:px-8
              sm:py-3
              sm:text-xs

              md:bottom-[5%]
              md:min-w-[210px]
              md:px-9
              md:py-4
              md:text-sm

              lg:bottom-[5%]
              lg:min-w-[220px]
            "
          >
            MÁS INFORMACIÓN
          </a>

        </div>
      </section>

      {/* =====================================
          FOOTER
      ====================================== */}
      <Footer />

    </main>
  );
}

export default IndustrialPage;