function Mapa() {
  return (
    <section className="w-full bg-black">
      <div className="h-[260px] w-full md:h-[320px]">
        <iframe
          title="Ubicación Gintec"
          src="https://maps.google.com/maps?q=GINTEC%20Pachuca%20Hidalgo&t=&z=11&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          className="block w-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default Mapa;