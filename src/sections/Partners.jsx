function Partners() {
  const partners = [
    {
      id: 1,
      nombre: "Rackspace Technology",
      imagen: "/images/Rackspace_Technology_Logo.png",
    },
    {
      id: 2,
      nombre: "NetPay",
      imagen: "/images/NetPayLogo.png",
    },
    {
      id: 3,
      nombre: "Syscom",
      imagen: "/images/syscom.png",
    },
    {
      id: 4,
      nombre: "Google Suite",
      imagen: "/images/googleSuite.png",
    },
  ];

  return (
    <section
      id="partners"
      className="
        relative
        flex
        min-h-[760px]
        w-full
        items-center
        overflow-hidden
        bg-black
        bg-cover
        bg-center
        bg-no-repeat
        px-5
        pb-16
        pt-32

        sm:px-8
        md:min-h-[800px]
        md:pt-36
        lg:px-12
      "
      style={{
        backgroundImage: "url('/images/FondoPARTNERS.png')",
      }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENIDO */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-6xl
          flex-col
          items-center
          text-center
        "
      >
        {/* TÍTULO */}
        <div>
          <p
            className="
              text-xs
              font-medium
              tracking-[0.65em]
              text-yellow-400

              sm:text-sm
              md:text-base
            "
          >
            NUESTROS
          </p>

          <h2
            className="
              mt-2
              text-2xl
              font-bold
              tracking-[0.28em]
              text-yellow-400

              sm:text-3xl
              md:text-4xl
            "
          >
            BUSINESS PARTNERS
          </h2>
        </div>

        {/* DESCRIPCIÓN */}
        <div
          className="
            mt-14
            max-w-5xl
            text-center
            text-sm
            leading-7
            text-white/90

            sm:text-base
            md:text-lg
            md:leading-8
          "
        >
          <p>
            Nuestros business partners son aquellas empresas que cumplen las más
            exigentes normas en relación con el rendimiento y el servicio.
          </p>

          <p>
            Provienen de una amplia variedad de sectores y ofrecen a sus clientes
            las más diversas habilidades y servicios.
          </p>

          <p>Algunas de ellas son:</p>
        </div>

        {/* LOGOS */}
        <div
          className="
            mt-16
            grid
            w-full
            grid-cols-2
            items-center
            justify-items-center
            gap-x-8
            gap-y-12

            md:mt-20
            md:grid-cols-4
            md:gap-10
          "
        >
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="
                flex
                h-[85px]
                w-full
                max-w-[190px]
                items-center
                justify-center

                sm:h-[100px]
                sm:max-w-[220px]
              "
            >
              <img
                src={partner.imagen}
                alt={partner.nombre}
                className="
                  max-h-full
                  max-w-full
                  object-contain
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;