import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Nosotros from "../sections/Nosotros";

function NosotrosPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black">
      <Navbar />

      <Nosotros />

      <Footer />
    </main>
  );
}

export default NosotrosPage;