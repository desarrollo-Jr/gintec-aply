function TelefonoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-9 w-9"
    >
      <path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.56 3.5.56a1 1 0 011 1V20a1 1 0 01-1 1C10.6 21 3 13.4 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.56 3.5a1 1 0 01-.25 1L6.6 10.8z" />
    </svg>
  );
}

function CorreoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-10 w-10"
    >
      <path d="M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2zm9 8L3.8 7.5a.7.7 0 00-.8 0v.4l9 6.1 9-6.1v-.4a.7.7 0 00-.8 0L12 13z" />
    </svg>
  );
}

function UbicacionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-10 w-10"
    >
      <path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 10a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  );
}

function Contacto() {
  const enviarFormulario = (event) => {
    event.preventDefault();

    const datos = new FormData(event.currentTarget);

    const informacion = {
      nombre: datos.get("nombre"),
      correo: datos.get("correo"),
      mensaje: datos.get("mensaje"),
    };

    console.log("Formulario:", informacion);
  };

  return (
    <section
      id="contacto"
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        bg-cover
        bg-center
        bg-no-repeat
        text-white
      "
      style={{
        backgroundImage: "url('/images/FondoCONTACTO.png')",
      }}
    >
      {/* Oscurecimiento */}
      <div className="absolute inset-0 bg-black/25" />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[820px]
          w-full
          max-w-6xl
          flex-col
          px-5
          pb-16
          pt-32

          sm:px-8
          md:pt-36
          lg:px-10
        "
      >
        {/* =========================
            TÍTULO
        ========================== */}
        <h2
          className="
            text-center
            text-3xl
            font-bold
            tracking-[0.35em]
            text-yellow-400

            sm:text-4xl
            md:text-5xl
          "
        >
          CONTÁCTANOS
        </h2>

        {/* =========================
            DATOS
        ========================== */}
        <div
          className="
            mx-auto
            mt-10
            grid
            w-full
            max-w-4xl
            grid-cols-1
            gap-8

            md:mt-12
            md:grid-cols-3
            md:gap-0
          "
        >
          {/* TELÉFONO */}
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center

              md:border-r
              md:border-yellow-400/50
              md:px-5
            "
          >
            <div className="text-white">
              <TelefonoIcon />
            </div>

            <span
              className="
                mt-3
                text-sm
                italic
                text-yellow-400
              "
            >
              Teléfono
            </span>

            <a
              href="tel:+527712576279"
              className="
                mt-2
                text-lg
                font-semibold
                transition
                hover:text-yellow-400
              "
            >
              (771) 257 6279
            </a>
          </div>

          {/* CORREO */}
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center

              md:border-r
              md:border-yellow-400/50
              md:px-5
            "
          >
            <div className="text-white">
              <CorreoIcon />
            </div>

            <span
              className="
                mt-3
                text-sm
                italic
                text-yellow-400
              "
            >
              Mail
            </span>

            <a
              href="mailto:contacto@gintecaply.com"
              className="
                mt-2
                break-all
                text-base
                font-semibold
                transition
                hover:text-yellow-400

                sm:text-lg
              "
            >
              contacto@gintecaply.com
            </a>
          </div>

          {/* UBICACIÓN */}
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
              md:px-5
            "
          >
            <div className="text-white">
              <UbicacionIcon />
            </div>

            <span
              className="
                mt-3
                text-sm
                italic
                text-yellow-400
              "
            >
              Ubicación
            </span>

            <p
              className="
                mt-2
                text-lg
                font-semibold
              "
            >
              Pachuca, Hidalgo
            </p>
          </div>
        </div>

        {/* =========================
            FORMULARIO
        ========================== */}
        <form
          onSubmit={enviarFormulario}
          className="
            mx-auto
            mt-auto
            w-full
            max-w-5xl
            pt-16
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-4

              md:grid-cols-2
            "
          >
            <input
              type="text"
              name="nombre"
              placeholder="Nombre..."
              required
              className="
                h-[54px]
                w-full
                border
                border-transparent
                bg-white
                px-4
                text-sm
                text-black
                outline-none
                transition

                focus:border-yellow-400
              "
            />

            <input
              type="email"
              name="correo"
              placeholder="Correo..."
              required
              className="
                h-[54px]
                w-full
                border
                border-transparent
                bg-white
                px-4
                text-sm
                text-black
                outline-none
                transition

                focus:border-yellow-400
              "
            />
          </div>

          <textarea
            name="mensaje"
            rows="5"
            placeholder="Mensaje..."
            required
            className="
              mt-4
              min-h-[135px]
              w-full
              resize-none
              border
              border-transparent
              bg-white
              px-4
              py-4
              text-sm
              text-black
              outline-none
              transition

              focus:border-yellow-400
            "
          />

          <button
            type="submit"
            className="
              mt-4
              min-w-[110px]
              rounded-full
              bg-yellow-400
              px-9
              py-3
              text-xs
              font-bold
              text-black
              transition-all
              duration-300

              hover:scale-105
              hover:bg-white
            "
          >
            ENVIAR
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;