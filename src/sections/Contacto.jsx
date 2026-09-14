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
      className="w-full overflow-hidden bg-black text-white"
    >
      {/* =====================================================
          DESKTOP / TABLET
      ===================================================== */}
      <div
        className="
          relative
          hidden
          min-h-[820px]
          w-full
          bg-cover
          bg-center
          bg-no-repeat
          md:block
        "
        style={{
          backgroundImage: "url('/images/CONTACTANOS.jpg')",
        }}
      >
        {/* Oscurecimiento muy ligero */}
        <div className="absolute inset-0 bg-black/5" />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[820px]
            max-w-6xl
            flex-col
            px-8
            py-16
          "
        >
          {/* Título */}
          <h2
            className="
              text-center
              text-3xl
              font-bold
              tracking-[0.45em]
              text-yellow-400
              lg:text-4xl
            "
          >
            CONTÁCTANOS
          </h2>

          {/* Espacio para que se vean teléfonos,
              correo y ubicación de la imagen */}
          <div className="flex-1" />

          {/* Formulario */}
          <form
            onSubmit={enviarFormulario}
            className="mx-auto w-full max-w-5xl pb-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre..."
                required
                className="
                  h-[54px]
                  w-full
                  border-0
                  bg-white
                  px-4
                  text-sm
                  text-black
                  outline-none
                  focus:ring-2
                  focus:ring-yellow-400
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
                  border-0
                  bg-white
                  px-4
                  text-sm
                  text-black
                  outline-none
                  focus:ring-2
                  focus:ring-yellow-400
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
                min-h-[115px]
                w-full
                resize-none
                border-0
                bg-white
                px-4
                py-4
                text-sm
                text-black
                outline-none
                focus:ring-2
                focus:ring-yellow-400
              "
            />

            <button
              type="submit"
              className="
                mt-4
                min-w-[110px]
                rounded-full
                bg-yellow-400
                px-8
                py-3
                text-xs
                font-bold
                text-black
                transition-all
                duration-300
                hover:bg-white
              "
            >
              ENVIAR
            </button>
          </form>
        </div>
      </div>

      {/* =====================================================
          CELULAR
      ===================================================== */}
      <div className="block bg-black md:hidden">
        {/* Título */}
        <div className="px-5 pb-7 pt-12">
          <h2
            className="
              text-center
              text-2xl
              font-bold
              tracking-[0.3em]
              text-yellow-400
            "
          >
            CONTÁCTANOS
          </h2>
        </div>

        {/* Imagen de teléfonos

            IMPORTANTE:
            Aquí ya NO es background.
            Es una imagen normal colocada ANTES del formulario.
        */}
        <img
          src="/images/TELEFONOS.jpg"
          alt="Información de contacto Gintec"
          className="
            block
            h-auto
            w-full
            object-contain
          "
        />

        {/* Formulario móvil */}
        <div className="bg-black px-5 py-10">
          <form
            onSubmit={enviarFormulario}
            className="mx-auto w-full max-w-xl"
          >
            <input
              type="text"
              name="nombre"
              placeholder="Nombre..."
              required
              className="
                h-[52px]
                w-full
                bg-white
                px-4
                text-sm
                text-black
                outline-none
                focus:ring-2
                focus:ring-yellow-400
              "
            />

            <input
              type="email"
              name="correo"
              placeholder="Correo..."
              required
              className="
                mt-4
                h-[52px]
                w-full
                bg-white
                px-4
                text-sm
                text-black
                outline-none
                focus:ring-2
                focus:ring-yellow-400
              "
            />

            <textarea
              name="mensaje"
              rows="5"
              placeholder="Mensaje..."
              required
              className="
                mt-4
                min-h-[130px]
                w-full
                resize-none
                bg-white
                px-4
                py-4
                text-sm
                text-black
                outline-none
                focus:ring-2
                focus:ring-yellow-400
              "
            />

            <button
              type="submit"
              className="
                mt-4
                rounded-full
                bg-yellow-400
                px-9
                py-3
                text-xs
                font-bold
                text-black
                transition
                hover:bg-white
              "
            >
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;