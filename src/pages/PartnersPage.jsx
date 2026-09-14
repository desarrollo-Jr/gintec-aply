import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Partners from "../sections/Partners";

function PartnersPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black">
      <Navbar />

      <Partners />

      <Footer />
    </main>
  );
}

export default PartnersPage;