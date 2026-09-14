function Nosotros() {
  return (
    <section
      id="nosotros"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-black
      "
    >
      {/* =====================================
          FONDO
      ====================================== */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/images/NOSOTROS-FONDO.jpg')",
        }}
      />

      {/* Oscurecimiento */}
      <div className="absolute inset-0 bg-black/20" />

      {/* =====================================
          TEXTO GINTEC GIGANTE
      ====================================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-5%]
          -translate-x-1/2
          whitespace-nowrap
          text-[30vw]
          font-black
          leading-none
          text-white/[0.07]
        "
      >
        GINTEC
      </div>

      {/* =====================================
          CONTENIDO
      ====================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-screen
          w-full
          max-w-7xl
          grid-cols-1
          items-center
          px-6
          py-20

          md:grid-cols-2
          md:px-8

          lg:px-10
        "
      >
        {/* Espacio izquierdo en desktop */}
        <div className="hidden md:block" />

        {/* =====================================
            BLOQUE NOSOTROS
        ====================================== */}
        <div
          className="
            flex
            w-full
            items-center
            justify-center

            md:px-6
            lg:px-10
          "
        >
          <div
            className="
              w-full
              max-w-xl
              text-center
            "
          >
            {/* TÍTULO */}
            <h2
              className="
                mb-6
                text-3xl
                font-bold
                tracking-[0.35em]
                text-yellow-400

                md:text-4xl
              "
            >
              NOSOTROS
            </h2>

            {/* TEXTO */}
            <p
              className="
                mx-auto
                text-center
                text-sm
                leading-7
                text-white

                sm:text-base
                sm:leading-8
              "
            >
              Sumamos a nuestros clientes y unidades estratégicas de negocio a
              la tendencia de E-Business. A través de interfaces y plataformas
              funcionales, poderosas e integrales que resuelven las necesidades
              de negocios de nuestros clientes y prevén el futuro de uso de sus
              propios usuarios y clientes de manera práctica y en tiempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;