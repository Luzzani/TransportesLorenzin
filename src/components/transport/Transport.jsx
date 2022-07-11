// import { useInView } from 'react-intersection-observer';
import { useRef } from "react";
import "./Transport.css";
import img from "../../assets/secondFoto.jpg";
import { motion, useInView } from "framer-motion";

function Transport() {
  //const { ref: myRef, inView: myElementIsVisible } = useInView();
  // const { ref: myRef2, inView: myElementIsVisible2 } = useInView();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <section id="transport">
      <h2
        className={`transport__title`}
        ref={ref}
        style={{
          transform: isInView ? "none" : "translatex(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        Elegi el transporte que se adapte a tus necesidades
      </h2>

      <div
        className="container transport__container"
        ref={ref2}
        style={{
          transform: isInView2 ? "none" : "translateY(200px)",
          opacity: isInView2 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className={`transport__us`}>
          <div className="transport__us-image">
            <img src={img} alt="dibujo camioneta" />
          </div>
        </div>

        <div className={`transport__content`}>
          <div className={`transport__cards`}>
            <motion.article className="transport__card">
              <h5>Mudanzas</h5>
              <small>
                Hacemos mudanzas a
                <strong> Capital Federal y Gran Buenos Aires</strong>
              </small>
            </motion.article>

            <motion.article className="transport__card">
              <h5>Fletes</h5>
              <small>
                Ofrecemos Fletes a <strong>Todo el Pais</strong>
              </small>
            </motion.article>

            <motion.article className="transport__card">
              <h5>Transporte de mercaderia</h5>
              <small>
                Transportamos mercaderia en <strong>SECO</strong>
              </small>
            </motion.article>

            <motion.article className="transport__card">
              <h5>Camion</h5>
              <small>Camiones para transportes de mas de 2 Toneladas</small>
            </motion.article>

            <motion.article className="transport__card">
              <h5>Camioneta</h5>
              <small>Camionetas para transportes de hasta 2 Toneladas</small>
            </motion.article>

            <motion.article className="transport__card">
              <h5>Utilitario</h5>
              <small>Utilitarios para hasta de 500 kilos</small>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transport;
