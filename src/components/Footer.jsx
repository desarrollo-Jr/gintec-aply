function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M13.5 22v-9h3l.5-3h-3.5V8.2c0-.9.3-1.7 1.8-1.7H17V3.8c-.3 0-1.4-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.5v3h2.8v9h3.2z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path d="M23 12s0-3.5-.4-5.2c-.2-1-1-1.8-2-2C18.8 4.4 12 4.4 12 4.4s-6.8 0-8.6.4c-1 .2-1.8 1-2 2C1 8.5 1 12 1 12s0 3.5.4 5.2c.2 1 1 1.8 2 2 1.8.4 8.6.4 8.6.4s6.8 0 8.6-.4c1-.2 1.8-1 2-2C23 15.5 23 12 23 12zm-13 3.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M12 2a9.8 9.8 0 00-8.5 14.7L2 22l5.5-1.4A10 10 0 1012 2zm0 17.8a8 8 0 01-4.1-1.1l-.3-.2-3.3.9.9-3.2-.2-.3A7.9 7.9 0 1112 19.8zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.4-1.6-3.2-2.8-.2-.3 0-.5.1-.7l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.7 1.1 2.9c.1.2 2 3 4.8 4.2 1.8.8 2.5.9 3.4.8.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.2-.3-.3-.5-.4z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="mx-auto max-w-6xl px-6 py-10">

        {/* =========================
            LOGO GRUPO INDIGO
        ========================== */}
        <div className="flex justify-center">
          <img
            src="/images/LOGO-INDIGO.png"
            alt="Grupo Indigo"
            className="
              w-[230px]
              object-contain
              sm:w-[300px]
            "
          />
        </div>


        {/* =========================
            REDES SOCIALES
        ========================== */}
        <div
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-center
            gap-7

            sm:flex-row
            sm:gap-16
          "
        >

          {/* FACEBOOK */}
          <a
            href="#"
            aria-label="Facebook"
            className="
              flex
              items-center
              gap-2
              font-semibold

              transition
              duration-300

              hover:text-yellow-400
            "
          >
            <FacebookIcon />

            Facebook
          </a>


          {/* YOUTUBE */}
          <a
            href="#"
            aria-label="YouTube"
            className="
              flex
              items-center
              gap-2
              font-semibold

              transition
              duration-300

              hover:text-yellow-400
            "
          >
            <YoutubeIcon />

            Youtube
          </a>


          {/* WHATSAPP NORMAL DEL FOOTER */}
          <a
            href="#"
            aria-label="WhatsApp"
            className="
              flex
              items-center
              gap-2
              font-semibold

              transition
              duration-300

              hover:text-yellow-400
            "
          >
            <WhatsappIcon />

            WhatsApp
          </a>

        </div>
      </div>


      {/* =========================
          COPYRIGHT
      ========================== */}
      <div
        className="
          border-t
          border-white/10
          py-7
          text-center
        "
      >
        <p className="text-sm">
          Copyright © 2026 Gintec Aply
        </p>
      </div>

    </footer>
  );
}

export default Footer;