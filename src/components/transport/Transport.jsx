import './Transport.css';
import React from "react";
import img from '../../assets/secondFoto.jpg';

function Transport() {
  return (
    <section id="transport">
      <h2 className="transport__title">Elegi el transporte que se adapte a tus necesidades</h2>

      <div className="container transport__container">
        <div className="transport__us">
          <div className="transport__us-image">
            <img
              src={img}
              alt="dibujo camioneta"
            />
          </div>
        </div>

        <div className="transport__content">
          <div className="transport__cards">
            <article className="transport__card">
              <h5>Mudanzas</h5>
              <small>
                Hacemos mudanzas a{" "}
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
              <small>
                Camiones para transportes de mas de 2 Toneladas
              </small>
            </article>

            <article className="transport__card">
              <h5>Camioneta</h5>
              <small>
                Camionetas para transportes de hasta 2 Toneladas
              </small>
            </article>

            <article className="transport__card">
              <h5>Utilitario</h5>
              <small>
                Utilitarios para hasta de 500 kilos
              </small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transport;
