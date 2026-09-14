import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Soluciones from "../sections/Soluciones";

function SuitePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black">
      <Navbar />

      <Soluciones />

      <Footer />
    </main>
  );
}

export default SuitePage;