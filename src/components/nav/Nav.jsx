import { useState } from "react";
import "./Nav.css";
import { AiOutlineDribbble, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const link = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const onShowHandle = () => {
    setShowLinks(() => !showLinks);
  };
  return (
    <nav className="navbar">
      <motion.div
        className="navbar__logo"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
      >
        <a href="#home">
          <AiOutlineDribbble />
          <small>Logistica Lorenzin</small>
        </a>
      </motion.div>
      <div className="navbar__links">
        <motion.div
          className="navbar__links-container"
          id={showLinks ? "hidden" : ""}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.a href="#home" variants={link} whileHover={{ scale: 1.1 }}>
            Home
          </motion.a>
          <motion.a
            href="#transport"
            variants={link}
            whileHover={{ scale: 1.1 }}
          >
            Transportes
          </motion.a>
          <motion.a href="#clients" variants={link} whileHover={{ scale: 1.1 }}>
            Clientes
          </motion.a>
          <motion.a href="#contact" variants={link} whileHover={{ scale: 1.1 }}>
            Contacto
          </motion.a>
        </motion.div>
        <button className="navbar__button-toggle" onClick={onShowHandle}>
          <AiOutlineMenu />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
