import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SpacesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black">

      {/* NAVBAR */}
      <Navbar solid />

      {/* SPACES */}
      <section className="relative w-full overflow-hidden bg-black">
        <div className="relative w-full">

          {/* IMAGEN RESPONSIVE */}
          <picture>
            {/* TELÉFONO */}
            <source
              media="(max-width: 767px)"
              srcSet="/images/FUNCIONES-SPACES.jpg"
            />

            {/* DESKTOP */}
            <img
              src="/images/ENLACE-SPACES-1.jpg"
              alt="Habitan-T Spaces"
              className="
                block
                h-auto
                w-full
                object-contain
                object-top
              "
            />
          </picture>

          {/* BOTÓN MÁS INFORMACIÓN */}
          <a
            href="#"
            className="
              absolute
              left-1/2
              z-20
              -translate-x-1/2

              bottom-[2.5%]

              flex
              min-w-[165px]
              items-center
              justify-center

              whitespace-nowrap
              rounded-full
              border
              border-white

              bg-black/35

              px-6
              py-3

              text-[10px]
              font-bold
              uppercase
              text-white

              backdrop-blur-sm

              transition-all
              duration-300

              hover:scale-105
              hover:bg-cyan-600
              hover:text-white

              sm:min-w-[190px]
              sm:px-8
              sm:text-xs

              md:bottom-[3%]
              md:min-w-[220px]
              md:py-4
              md:text-sm
            "
          >
            MÁS INFORMACIÓN
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}

export default SpacesPage;