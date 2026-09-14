import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HabitanTPage() {
  return (
    <main
      className="
        min-h-screen
        overflow-x-hidden
        bg-black
      "
    >
      {/* ===========================
          NAVBAR

          solid = navbar negro
          y separado de la imagen.
      ============================ */}
      <Navbar solid />

      {/* ===========================
          HABITAN-T
      ============================ */}
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-white
        "
      >
        <div className="relative w-full">

          {/* ===========================
              IMAGEN RESPONSIVE
          ============================ */}
          <picture>

            {/* CELULAR */}
            <source
              media="(max-width: 767px)"
              srcSet="/images/FUNCIONES-HABITAN-T.jpg"
            />

            {/* DESKTOP */}
            <img
              src="/images/ENLACE-HABITAN-T-1.jpg"
              alt="Funciones de Habitan-T"
              className="
                block
                h-auto
                w-full
                object-contain
                object-top
              "
            />
          </picture>

          {/* ===========================
              BOTÓN
              LLÉVAME AL SITIO
          ============================ */}
          <a
            href="https://habitan-t.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              absolute
              left-1/2
              z-20
              -translate-x-1/2

              flex
              items-center
              justify-center

              whitespace-nowrap
              rounded-full

              bg-[#c7d2e9]

              font-bold
              uppercase
              text-white

              shadow-md

              transition-all
              duration-300

              hover:scale-105
              hover:bg-[#aebdde]
              hover:shadow-lg


              bottom-[3%]
              min-w-[155px]
              px-5
              py-3
              text-[10px]


              sm:bottom-[3%]
              sm:min-w-[180px]
              sm:px-7
              sm:text-xs


              md:bottom-[3%]
              md:min-w-[210px]
              md:px-8
              md:py-4
              md:text-sm


              lg:min-w-[220px]
            "
          >
            LLÉVAME AL SITIO
          </a>

        </div>
      </section>

      {/* ===========================
          FOOTER
      ============================ */}
      <Footer />
    </main>
  );
}

export default HabitanTPage;