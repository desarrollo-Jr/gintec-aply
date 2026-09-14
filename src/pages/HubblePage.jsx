import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HubblePage() {
  return (
    <main
      className="
        min-h-screen
        overflow-x-hidden
        bg-black
      "
    >
      {/* ===========================
          NAVBAR
      ============================ */}
      <Navbar solid />

      {/* ===========================
          HUBBLE
      ============================ */}
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-black
        "
      >
        <div className="relative w-full">
          <img
            src="/images/ENLACE-HUBLE-1.png"
            alt="Hubble"
            className="
              block
              h-auto
              w-full
              object-contain
              object-top
            "
          />
        </div>
      </section>

      {/* ===========================
          FOOTER
      ============================ */}
      <Footer />
    </main>
  );
}

export default HubblePage;