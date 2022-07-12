import React from "react";
import "./Footer.css";
import { AiOutlineDribbble } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
          <AiOutlineDribbble />
          <small>Logistica Lorenzin</small>
      </a>

      <ul className="permalink">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#transport">Transporte</a>
        </li>
        <li>
          <a href="#clients">clientes</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; LUZZANI - All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
