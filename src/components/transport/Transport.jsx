import { useInView } from 'react-intersection-observer';

import "./Transport.css";
import React from "react";
import img from "../../assets/secondFoto.jpg";

function Transport() {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView();




  return (
    <section id="transport" ref={myRef}>
      <h2 className={`transport__title ${myElementIsVisible ? 'animation__transport' : ''}`}>
        Elegi el transporte que se adapte a tus necesidades
      </h2>

      <div className='container transport__container' ref={myRef2}>
        <div className={`transport__us ${myElementIsVisible2 ? 'animation__transport' : ''}`}>
          <div className="transport__us-image">
            <img src={img} alt="dibujo camioneta" />
          </div>
        </div>

        <div className={`transport__content`}>
          <div className={`transport__cards ${myElementIsVisible2 ? 'animation__transport' : ''}`}>
            <article className="transport__card">
              <h5>Mudanzas</h5>
              <small>
                Hacemos mudanzas a
                <strong>Capital Federal y Gran Buenos Aires</strong>
              </small>
            </article>

            <article className="transport__card">
              <h5>Fletes</h5>
              <small>
                Ofrecemos Fletes a <strong>Todo el Pais</strong>
              </small>
            </article>

            <article className="transport__card">
              <h5>Transporte de mercaderia</h5>
              <small>
                Transportamos mercaderia en <strong>SECO</strong>
              </small>
            </article>

            <article className="transport__card">
              <h5>Camion</h5>
              <small>Camiones para transportes de mas de 2 Toneladas</small>
            </article>

            <article className="transport__card">
              <h5>Camioneta</h5>
              <small>Camionetas para transportes de hasta 2 Toneladas</small>
            </article>

            <article className="transport__card">
              <h5>Utilitario</h5>
              <small>Utilitarios para hasta de 500 kilos</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transport;
