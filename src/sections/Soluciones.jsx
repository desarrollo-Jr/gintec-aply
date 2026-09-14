import { Link } from "react-router-dom";

function Soluciones() {
  const soluciones = [
    {
      id: 1,
      imagen: "/images/FONDO-HABITAN-T.jpg",
      alt: "Habitan-T",
      ruta: "/habitan-t",
    },
    {
      id: 2,
      imagen: "/images/FONDO-HUBBLE.png",
      alt: "Hubble",
      ruta: "/hubble",
    },
    {
      id: 3,
      imagen: "/images/FONDO-INDUSTRIAL.jpg",
      alt: "Industrial",
      ruta: "/industrial",
    },
    {
      id: 4,
      imagen: "/images/FONDO-SPACES.jpg",
      alt: "Spaces",
      ruta: "/spaces",
    },
  ];

  return (
    <section
      id="suite"
      className="w-full bg-black"
    >
      <div
        className="
          grid
          w-full
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {soluciones.map((solucion) => (
          <article
            key={solucion.id}
            className="
              group
              relative
              w-full
              overflow-hidden
              bg-black
            "
          >
            {/* IMAGEN */}
            <img
              src={solucion.imagen}
              alt={solucion.alt}
              className="
                block
                h-auto
                w-full

                transition-transform
                duration-700

                group-hover:scale-[1.01]
              "
            />

            {/* BOTÓN DESCUBRIR */}
            <Link
              to={solucion.ruta}
              className="
                absolute
                bottom-[6%]
                left-1/2
                z-20
                -translate-x-1/2

                flex
                h-[44px]
                min-w-[130px]
                items-center
                justify-center

                whitespace-nowrap

                rounded-full
                border
                border-white

                px-7

                text-[11px]
                font-bold
                uppercase
                text-white

                transition-all
                duration-300

                hover:border-yellow-400
                hover:bg-yellow-400
                hover:text-black

                sm:min-w-[135px]
                md:min-w-[130px]
                lg:min-w-[140px]
              "
            >
              DESCUBRIR
            </Link>

          </article>
        ))}
      </div>
    </section>
  );
}

export default Soluciones;