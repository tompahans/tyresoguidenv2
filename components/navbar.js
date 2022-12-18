import Link from "next/link";
import Image from "next/image";
import Hamburger from "./hamburger.js";
// import { menuItems } from "../siteSettings.js";

// const MenuItems = menuItems.map((menu, idx) => (
//   <li key={menu.label} className="nav-item">
//     <Link className="nav-link" href={menu.url}>
//       {menu.label}
//     </Link>
//   </li>
// ));

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg justify-content-center navbar-custom no-bg">
        <div className="container-fluid text-center justify-content-center align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Hamburger className="button" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Hem
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="../Badplatser">
                  Badplatser
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="../Restauranger">
                  Restauranger
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="historiaDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Historia
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="historiaDropdown"
                >
                  <li>
                    <Link className="dropdown-item" href="../Historia">
                      Tyresö
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="../Historia/Slottet">
                      Tyresö Slott
                    </Link>
                  </li>

                  <li>
                    <a className="dropdown-item" href="../Historia/Annas">
                      Annas Pepparkakor
                    </a>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="../Historia/Fontana">
                      Fontana Food
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="aktiviteterDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Aktiviteter
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="aktiviteterDropdown"
                >
                  <li>
                    <Link className="dropdown-item" href="../Aktiviteter/Alby">
                      Alby Fridluftsgård
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="../Aktiviteter/Slottet"
                    >
                      Besök Tyresö Slott
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" href="../Aktiviteter/">
                      För barnfamiljen
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
