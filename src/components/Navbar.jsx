import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ solid = false }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  const estiloLink = ({ isActive }) => `
    text-sm
    font-medium
    transition-colors
    duration-300
    ${
      isActive
        ? "text-yellow-400"
        : "text-white hover:text-yellow-400"
    }
  `;

  return (
    <header
      className={`
        left-0
        top-0
        z-50
        w-full

        ${
          solid
            ? "relative bg-black"
            : "absolute bg-transparent"
        }
      `}
    >
      <nav
        className="
          mx-auto
          flex
          min-h-[85px]
          w-full
          max-w-7xl
          items-center
          justify-between

          px-6
          py-4

          md:px-8
          lg:px-10
        "
      >
        {/* =============================
            LOGO
        ============================== */}
        <Link
          to="/"
          onClick={cerrarMenu}
          aria-label="GINTEC - Inicio"
          className="
            relative
            z-50
            flex
            shrink-0
            items-center
          "
        >
          <img
            src="/images/LOGO-HORIZONTAL.png"
            alt="GINTEC"
            className="
              h-9
              w-auto
              object-contain

              sm:h-10
              md:h-11
              lg:h-12
            "
          />
        </Link>

        {/* =============================
            MENÚ DESKTOP
        ============================== */}
        <ul
          className="
            hidden
            items-center
            justify-end

            gap-6

            md:flex
            lg:gap-9
            xl:gap-10
          "
        >
          <li>
            <NavLink
              to="/nosotros"
              className={estiloLink}
            >
              NOSOTROS.
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/suite"
              className={estiloLink}
            >
              SUITE.
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/servicios"
              className={estiloLink}
            >
              SERVICIOS.
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/partners"
              className={estiloLink}
            >
              PARTNERS.
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contacto"
              className={estiloLink}
            >
              CONTÁCTO.
            </NavLink>
          </li>
        </ul>

        {/* =============================
            BOTÓN HAMBURGUESA
        ============================== */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="
            relative
            z-50

            flex
            h-11
            w-11
            flex-col
            items-center
            justify-center
            gap-[6px]

            md:hidden
          "
        >
          <span
            className={`
              h-[2px]
              w-7
              bg-white

              transition-all
              duration-300

              ${
                menuAbierto
                  ? "translate-y-2 rotate-45"
                  : ""
              }
            `}
          />

          <span
            className={`
              h-[2px]
              w-7
              bg-white

              transition-all
              duration-300

              ${
                menuAbierto
                  ? "opacity-0"
                  : "opacity-100"
              }
            `}
          />

          <span
            className={`
              h-[2px]
              w-7
              bg-white

              transition-all
              duration-300

              ${
                menuAbierto
                  ? "-translate-y-2 -rotate-45"
                  : ""
              }
            `}
          />
        </button>
      </nav>

      {/* =============================
          MENÚ MÓVIL
      ============================== */}
      <div
        className={`
          absolute
          left-0
          top-full
          z-40

          w-full

          overflow-hidden

          bg-black/95
          backdrop-blur-lg

          transition-all
          duration-300

          md:hidden

          ${
            menuAbierto
              ? "visible max-h-[500px] border-t border-white/10 opacity-100"
              : "invisible max-h-0 opacity-0"
          }
        `}
      >
        <ul
          className="
            mx-auto
            flex
            w-full
            max-w-md
            flex-col
            px-7
            py-5
            text-center
          "
        >
          <li className="border-b border-white/10">
            <NavLink
              to="/nosotros"
              onClick={cerrarMenu}
              className="
                block
                py-4
                text-sm
                font-medium
                text-white
                transition
                hover:text-yellow-400
              "
            >
              NOSOTROS.
            </NavLink>
          </li>

          <li className="border-b border-white/10">
            <NavLink
              to="/suite"
              onClick={cerrarMenu}
              className="
                block
                py-4
                text-sm
                font-medium
                text-white
                transition
                hover:text-yellow-400
              "
            >
              SUITE.
            </NavLink>
          </li>

          <li className="border-b border-white/10">
            <NavLink
              to="/servicios"
              onClick={cerrarMenu}
              className="
                block
                py-4
                text-sm
                font-medium
                text-white
                transition
                hover:text-yellow-400
              "
            >
              SERVICIOS.
            </NavLink>
          </li>

          <li className="border-b border-white/10">
            <NavLink
              to="/partners"
              onClick={cerrarMenu}
              className="
                block
                py-4
                text-sm
                font-medium
                text-white
                transition
                hover:text-yellow-400
              "
            >
              PARTNERS.
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contacto"
              onClick={cerrarMenu}
              className="
                block
                py-4
                text-sm
                font-medium
                text-white
                transition
                hover:text-yellow-400
              "
            >
              CONTÁCTO.
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;