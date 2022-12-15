import Link from "next/link";
import Image from "next/image";

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
            <Image
              src="/img/gfx/burger-red.png"
              alt="Meny"
              width={20}
              height={20}
              style={{ width: "auto", height: "auto" }}
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Hem
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  href="../Badplatser"
                  alt="Badplatser"
                >
                  Badplatser
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="../Restauranger"
                  alt="Restauranger"
                >
                  Restauranger
                </Link>
              </li>
              <li className="nav-item dropdown <%= page_name === 'historia' && 'active' %>">
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
                    <Link
                      className="dropdown-item"
                      href="../Historia"
                      alt="Tyresö historia"
                    >
                      Tyresö
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="../Historia/Slottet"
                      alt="Tyresö slott historia"
                    >
                      Tyresö Slott
                    </Link>
                  </li>

                  <li>
                    <a
                      className="dropdown-item"
                      href="../Historia/Annas"
                      alt="Annas pepparkakor historia"
                    >
                      Annas Pepparkakor
                    </a>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="../Historia/Fontana"
                      alt="Fontana food historia"
                    >
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
                    <Link
                      className="dropdown-item"
                      href="../Aktiviteter/Alby"
                      alt="Aktivitet alby fridluftsgård"
                    >
                      Alby Fridluftsgård
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="../Aktiviteter/Slottet"
                      alt="Aktitivet Tyresö slott"
                    >
                      Besök Tyresö Slott
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      href="../Aktiviteter/Barnfamilj"
                      alt="Aktiviteter för barnfamiljen"
                    >
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
