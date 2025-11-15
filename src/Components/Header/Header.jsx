import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo-wrapper">
            <img src="/logo.png" alt="logo" className="img-fluid" />
          </div>

          {/* Header Links */}
          <ul className="nav-links d-none d-lg-flex align-items-center gap-5">
            <li className="nav-link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/cars">Rental deals</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/">How it work</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/">Why choose us</NavLink>
            </li>
          </ul>

          {/* Header Actions buttons */}
          <div className="actions-wrapper d-none d-lg-flex align-items-center gap-2">
            <a href="#" className="outline-btn">
              sign up
            </a>
            <a href="#" className="main-btn">
              sign in
            </a>
          </div>

          {/* Burger button for mobile */}
          <button
            className="btn d-block d-lg-none burger"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="navbar-toggler-icon">
              <i className="fa-solid fa-bars fs-4"></i>
            </span>
          </button>

          {/* Bootstrap Offcanvas Sidebar */}
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="mobileMenu"
            aria-labelledby="mobileMenuLabel"
          >
            <div className="offcanvas-header shadow-sm">
              <img
                src="/logo.png"
                width="120px"
                className="img-fluid"
                alt="logo"
              />
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="list-unstyled">
                <li className="mb-3 sidebar-link">
                  <NavLink
                    to="/"
                    className="text-decoration-none"
                    data-bs-dismiss="offcanvas"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="mb-3 sidebar-link">
                  <NavLink
                    to="/"
                    className="text-decoration-none"
                    data-bs-dismiss="offcanvas"
                  >
                    Rental deals
                  </NavLink>
                </li>
                <li className="mb-3 sidebar-link">
                  <NavLink
                    to="/"
                    className="text-decoration-none"
                    data-bs-dismiss="offcanvas"
                  >
                    How it works
                  </NavLink>
                </li>
                <li className="mb-3 sidebar-link border-0">
                  <NavLink
                    to="/"
                    className="text-decoration-none"
                    data-bs-dismiss="offcanvas"
                  >
                    Why choose us
                  </NavLink>
                </li>
              </ul>
              <div className="mt-auto d-flex flex-column gap-2 h-50 justify-content-end">
                <a href="#" className="main-btn">
                  Sign in
                </a>
                <a href="#" className="outline-btn w-100">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
