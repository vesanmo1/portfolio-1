import React, { useState } from "react";
import BurguerButton from "../icons/Burguer-menu";
import Logo from "../icons/Logo";
import "./Navbar.scss";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando está true lo pasa a false y viceversa
    setClicked(!clicked);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Logo />
        </div>
        <ul
          className={`navbar__sections-links on-top ${clicked ? "active" : ""}`}
        >
          <li className="sections">
            <a href="#hello">¡Hola!</a>
          </li>
          <li className="sections">
            <a href="#my-projects">Mis proyectos</a>
          </li>
          <li className="sections">
            <a href="#what-i-do">Qué hago</a>
          </li>
          <li className="sections">
            <a href="#who-i-am">Quién soy</a>
          </li>
          <li className="sections">
            <a href="#contact">¿Hablamos?</a>
          </li>
        </ul>

        <ul
          className={`navbar__rrss-links on-bottom ${clicked ? "active" : ""}`}
        >
          <li>
            <a href="#hello">github</a>
          </li>
          <li>
            <a href="#my-projects">linkedin</a>
          </li>
          <li>
            <a href="#what-i-do">codepen</a>
          </li>
        </ul>

        <div className="burguerButton">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`initial ${clicked ? " active" : ""}`}></div>
      </nav>
    </>
  );
}

export default Navbar;
