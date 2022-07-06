import { useState } from "react";
import "./Nav.css";
import { AiOutlineDribbble, AiOutlineMenu } from "react-icons/ai";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const onShowHandle = () => {
    setShowLinks(() => !showLinks);
  };
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="#home">
          <AiOutlineDribbble />
          <small>Logistica Lorenzin</small>
        </a>
      </div>
      <div className="navbar__links">
        <div className='navbar__links-container' id={showLinks ? "hidden" : ""}>
          <a href="#home">Home</a>
          <a href="#transport">Transportes</a>
          <a href="#clients">Clientes</a>
          <a href="#contact">Contacto</a>
        </div>
        <button className="navbar__button-toggle" onClick={onShowHandle}>
          <AiOutlineMenu />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
