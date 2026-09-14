function AppleIcon() {
  return (
    <div
      className="
        flex h-12 w-12 shrink-0
        items-center justify-center
        rounded-xl
        border border-yellow-400/30
        bg-yellow-400
        text-black
      "
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
      >
        <path d="M16.7 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.7-1.7-3.3-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 6.9 1.2 9.2.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3.1-.7 1.4 0 1.9.7 3.1.7 1.3 0 2.1-1.1 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.9-1.1-2.9-3.7z" />
        <path d="M14.4 6.1c.7-.8 1.1-1.9 1-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2-.5 2.7-1.3z" />
      </svg>
    </div>
  );
}

function GooglePlayIcon() {
  return (
    <div
      className="
        flex h-12 w-12 shrink-0
        items-center justify-center
        rounded-xl
        border border-yellow-400/30
        bg-yellow-400
        text-black
      "
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
      >
        <path d="M3.7 2.7a2.1 2.1 0 0 0-.7 1.6v15.4c0 .6.3 1.2.7 1.6L13 12 3.7 2.7z" />
        <path d="M14.2 10.8 5.7 2.3c.3-.1.6-.1.9 0l10.8 6.1-3.2 2.4z" />
        <path d="m14.2 13.2 3.2 2.4-10.8 6.1c-.3.2-.6.2-.9 0l8.5-8.5z" />
        <path d="m18.8 9.2 2 1.1c1.2.7 1.2 2.4 0 3.1l-2 1.1-3.4-2.6 3.4-2.7z" />
      </svg>
    </div>
  );
}

function Dato({ titulo, children }) {
  return (
    <div
      className="
        grid grid-cols-1
        gap-1
        sm:grid-cols-[160px_1fr]
        sm:gap-4
      "
    >
      <span className="font-semibold text-white">
        {titulo}
      </span>

      <span className="break-words text-white/90">
        {children}
      </span>
    </div>
  );
}

function DesarrolladorVerificado() {
  return (
    <section
      className="
        w-full
        bg-black
        px-5
        py-16
        text-white
        sm:px-8
        lg:px-12
        lg:py-20
      "
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* TÍTULO */}
        <div className="mb-10">
          <h2
            className="
              text-2xl
              font-bold
              uppercase
              leading-tight
              text-yellow-400
              sm:text-3xl
              lg:text-4xl
            "
          >
            DESARROLLADOR VERIFICADO EN IOS Y GOOGLE PLAY
          </h2>

          <p
            className="
              mt-3
              max-w-5xl
              text-sm
              leading-6
              text-white/80
              sm:text-base
            "
          >
            Gintec Aply, S.A. de C.V. cuenta con cuentas activas y
            verificadas para la publicación y mantenimiento de
            aplicaciones móviles.
          </p>
        </div>


        {/* TARJETAS */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-2
          "
        >

          {/* =======================
              APPLE
          ======================= */}
          <article
            className="
              rounded-2xl
              border
              border-white/15
              bg-[#0d0d0d]
              p-5
              sm:p-7
            "
          >
            <div className="flex items-center gap-4">
              <AppleIcon />

              <div>
                <h3
                  className="
                    text-xl
                    font-bold
                    text-yellow-400
                  "
                >
                  Apple Developer Program
                </h3>

                <p className="mt-1 text-sm text-white/80">
                  Inscrita como{" "}
                  <span className="font-bold text-white">
                    Organización
                  </span>
                </p>
              </div>
            </div>

            <div
              className="
                mt-7
                space-y-5
                text-sm
                sm:text-base
              "
            >
              <Dato titulo="Nombre de la entidad">
                Gintec Aply, S.A. de C.V.
              </Dato>

              <Dato titulo="Team ID">
                <span
                  className="
                    inline-block
                    rounded-md
                    border
                    border-white/10
                    bg-black
                    px-2
                    py-1
                    font-mono
                  "
                >
                  ZBZCWBTJNK
                </span>
              </Dato>

              <Dato titulo="Titular">
                Gintec Aply, S.A. de C.V.
              </Dato>

              <Dato titulo="Estado">
                <span className="text-yellow-400">
                  Cuenta activa y verificada
                </span>
              </Dato>
            </div>
          </article>


          {/* =======================
              GOOGLE PLAY
          ======================= */}
          <article
            className="
              rounded-2xl
              border
              border-white/15
              bg-[#0d0d0d]
              p-5
              sm:p-7
            "
          >
            <div className="flex items-center gap-4">
              <GooglePlayIcon />

              <div>
                <h3
                  className="
                    text-xl
                    font-bold
                    text-yellow-400
                  "
                >
                  Google Play Console
                </h3>

                <p className="mt-1 text-sm text-white/80">
                  Cuenta de{" "}
                  <span className="font-bold text-white">
                    Organización
                  </span>
                </p>
              </div>
            </div>

            <div
              className="
                mt-7
                space-y-5
                text-sm
                sm:text-base
              "
            >
              <Dato titulo="Nombre del programador">
                Gintec Aply S.A. de C.V.
              </Dato>

              <Dato titulo="ID de desarrollador">
                <span
                  className="
                    inline-block
                    max-w-full
                    break-all
                    rounded-md
                    border
                    border-white/10
                    bg-black
                    px-2
                    py-1
                    font-mono
                  "
                >
                  7509722201386340802
                </span>
              </Dato>

              <Dato titulo="Estado">
                <span className="text-yellow-400">
                  Cuenta activa y verificada
                </span>
              </Dato>

              <Dato titulo="Sitio web">
                <a
                  href="https://gintecaply.com"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    underline
                    decoration-yellow-400
                    underline-offset-4
                    transition
                    hover:text-yellow-400
                  "
                >
                  gintecaply.com
                </a>
              </Dato>
            </div>
          </article>

        </div>


        {/* INFORMACIÓN INFERIOR */}
        <div
          className="
            mt-6
            flex
            flex-col
            gap-3
            border-t
            border-white/10
            pt-5
            text-sm
            text-white/85
            lg:flex-row
            lg:flex-wrap
            lg:items-center
          "
        >
          <div
            className="
              inline-flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-[#0d0d0d]
              px-4
              py-2
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-yellow-400
              "
            />

            <strong>
              Gintec Aply, S.A. de C.V.
            </strong>
          </div>

          <span className="leading-6">
            Campo Deportivo No. 107, Santa Julia, Pachuca de Soto,
            Santa Julia – 42080, México
          </span>

          <a
            href="tel:+527712576279"
            className="
              whitespace-nowrap
              transition
              hover:text-yellow-400
            "
          >
            Tel: +52 771 257 6279
          </a>
        </div>

      </div>
    </section>
  );
}

export default DesarrolladorVerificado;