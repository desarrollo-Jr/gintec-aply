import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import DesarrolladorVerificado from "../sections/DesarrolladorVerificado";

function DesarrolladorPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black">

      {/* NAVBAR */}
      <Navbar solid />

      {/* DESARROLLADOR VERIFICADO */}
      <DesarrolladorVerificado />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}

export default DesarrolladorPage;