function Partners() {
  return (
    <section
      id="partners"
      className="w-full overflow-hidden bg-black"
    >
      <picture>
        {/* Celular y pantallas pequeñas */}
        <source
          media="(max-width: 767px)"
          srcSet="/images/NUESTROS-PARTNERS.jpg"
        />

        {/* Tablet grande / computadora */}
        <img
          src="/images/PARTNERS-IMAGEN-COMPLETA.jpg"
          alt="Nuestros Business Partners"
          className="
            block
            h-auto
            w-full
            object-cover
            object-center
          "
        />
      </picture>
    </section>
  );
}

export default Partners;