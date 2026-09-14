import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";

import NosotrosPage from "./pages/NosotrosPage";
import SuitePage from "./pages/SuitePage";
import ServiciosPage from "./pages/ServiciosPage";
import PartnersPage from "./pages/PartnersPage";
import ContactoPage from "./pages/ContactoPage";

import HabitanTPage from "./pages/HabitanTPage";
import HubblePage from "./pages/HubblePage";
import IndustrialPage from "./pages/IndustrialPage";
import SpacesPage from "./pages/SpacesPage";

import DesarrolladorPage from "./pages/DesarrolladorPage";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* NAVBAR */}
        <Route
          path="/nosotros"
          element={<NosotrosPage />}
        />

        <Route
          path="/suite"
          element={<SuitePage />}
        />

        <Route
          path="/servicios"
          element={<ServiciosPage />}
        />

        <Route
          path="/partners"
          element={<PartnersPage />}
        />

        <Route
          path="/contacto"
          element={<ContactoPage />}
        />

        {/* SOLUCIONES */}
        <Route
          path="/habitan-t"
          element={<HabitanTPage />}
        />

        <Route
          path="/hubble"
          element={<HubblePage />}
        />

        <Route
          path="/industrial"
          element={<IndustrialPage />}
        />

        <Route
          path="/spaces"
          element={<SpacesPage />}
        />

        {/* 
          DESARROLLADOR VERIFICADO

          No aparece en Navbar.
          Solo mediante URL.
        */}
        <Route
          path="/desarrollador-verificado"
          element={<DesarrolladorPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;