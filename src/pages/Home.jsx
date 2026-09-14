import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import Nosotros from "../sections/Nosotros";
import Soluciones from "../sections/Soluciones";
import Servicios from "../sections/Servicios";
import Partners from "../sections/Partners";
import Contacto from "../sections/Contacto";
import Mapa from "../sections/Mapa";

function Home() {
  return (
    <main className="overflow-x-hidden bg-black">
      <Navbar />

      <Hero />

      <Nosotros />

      <Soluciones />

      <Servicios />

      <Partners />

      <Contacto />

      <Mapa />

      <Footer />
    </main>
  );
}

export default Home;