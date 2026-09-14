import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Contacto from "../sections/Contacto";
import DesarrolladorVerificado from "../sections/DesarrolladorVerificado";
import Mapa from "../sections/Mapa";

function ContactoPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black">
      <Navbar />

      {/* CONTACTO + FORMULARIO */}
      <Contacto />

      {/* DESARROLLADOR VERIFICADO */}
      <DesarrolladorVerificado />

      {/* MAPA */}
      <Mapa />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

export default ContactoPage;