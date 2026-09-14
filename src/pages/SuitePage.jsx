import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Soluciones from "../sections/Soluciones";

function SuitePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black">

      {/* NAVBAR SEPARADO */}
      <Navbar solid />

      {/* CARDS DE SUITE */}
      <Soluciones />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}

export default SuitePage;