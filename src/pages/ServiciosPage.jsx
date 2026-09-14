import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Servicios from "../sections/Servicios";

function ServiciosPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black">

      {/* NAVBAR SEPARADO */}
      <Navbar solid />

      {/* SERVICIOS */}
      <Servicios />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}

export default ServiciosPage;