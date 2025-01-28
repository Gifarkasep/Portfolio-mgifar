import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "../MobileNav/MobileNav.jsx";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img
            className="logo"
            src="./assets/images/logogifar.png"
            alt="Logo"
          />

          <ul>
            <li>
              <Link
                className="menu-item"
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="menu-item"
                to="skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="menu-item"
                to="experience"
                smooth={true}
                duration={500}
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                className="menu-item"
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact Me
              </Link>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
