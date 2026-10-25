import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../utilities/UserContext.js";
import "../assets/css/navbar.css";

const navigationLinks = [
  { label: "Home", to: "/", end: true },
  { label: "Courses", to: "/courses" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useContext(UserContext);

  const isLoggedIn = user?.id != null;

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Brand logo */}
        <Link
          className="navbar__brand"
          to="/"
          aria-label="CodeLab home"
          onClick={closeMenu}
        >
          <img
            className="navbar__logo"
            src="/images/brand-logo.png"
            alt="CodeLab"
          />
        </Link>

        {/* Mobile menu toggle */}
        <button
          className={`navbar__menu-toggle ${
            menuOpen ? "navbar__menu-toggle--open" : ""
          }`}
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="navbar-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation links */}
        <nav
          className={`navbar__navigation ${
            menuOpen ? "navbar__navigation--open" : ""
          }`}
          id="navbar-navigation"
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `navbar__link${isActive ? " navbar__link--active" : ""}`
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Account actions */}
        <div className="navbar__actions">
          {isLoggedIn ? (
            <Link
              className="navbar__join"
              to="/logout"
              onClick={closeMenu}
            >
              Logout
            </Link>
          ) : (
            <Link
              className="navbar__join"
              to="/account/login"
              onClick={closeMenu}
            >
              Join Now
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}