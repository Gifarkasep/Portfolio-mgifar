import React from "react";
import { Link } from "react-scroll"; // Import Link dari react-scroll
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/images/logogifar.png" alt="" />

          <ul>
            <li>
              <Link
                to="home" // Sesuaikan dengan id pada elemen tujuan
                smooth={true}
                duration={500}
                onClick={toggleMenu} // Tutup menu setelah klik
                className="menu-item"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills" // Sesuaikan dengan id pada elemen tujuan
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="menu-item"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="experience" // Sesuaikan dengan id pada elemen tujuan
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="menu-item"
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                to="contact" // Sesuaikan dengan id pada elemen tujuan
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="menu-item"
              >
                Contact Me
              </Link>
            </li>
          </ul>

          <button className="contact-btn" onClick={toggleMenu}>
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
