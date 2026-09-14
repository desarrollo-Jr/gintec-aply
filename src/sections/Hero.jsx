function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/HOME-BACKGROUND-1.jpg')",
        backgroundAttachment: 'fixed',
      }}
    >

      {/* Oscurecer ligeramente el fondo */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">

        {/* Icono GINTEC */}
        <img
          src="/images/ICONO-GINTEC.png"
          alt="GINTEC"
          className="mb-8 h-28 w-auto object-contain"
        />

        {/* Título */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          THE FUTURE IS NOW
        </h1>

        {/* Línea amarilla */}
        <div className="my-7 h-1 w-28 bg-yellow-400" />

        {/* Descripción */}
        <p className="max-w-4xl text-sm leading-7 text-white sm:text-base">
          Resolvemos las necesidades de negocios de nuestros clientes,
          a través interfaces y plataformas funcionales, poderosas e integrales.
        </p>

        {/* Botón */}
        <a
          href="#nosotros"
          className="mt-12 rounded-full border border-white px-12 py-4 text-sm font-bold text-white transition duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
        >
          DESCUBRIR
        </a>

      </div>

    </section>
  )
}

export default Hero