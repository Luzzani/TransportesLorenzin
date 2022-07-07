import { useInView } from 'react-intersection-observer';


import React from "react";
import "./Clients.css";
import AVATAR from '../../assets/avatar.jpg'
import logo1 from '../../assets/yummy-logos_transparent.png'
import logo2 from '../../assets/meca-nics-logos_transparent.png'
import logo3 from '../../assets/magicGamer-logos_transparent.png'
import logo4 from '../../assets/builderSoft-logos_transparent.png'
// import Swipper core and required module 
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper Styles 
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVATAR,
    name: 'John Doe',
    review: 'Explicabo, expedita odit blanditiis amet tempora excepturi accusantium sit eligendi repudiandae? Fugit necessitatibus ut laboriosam hic sit quam consequuntur praesentium, molestias sed!'
  },
  {
    avatar: AVATAR,
    name: 'John Doe',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, expedita odit blanditiis amet tempora excepturi accusantium sit eligendi repudiandae? Fugit necessitatibus ut laboriosam hic sit quam consequuntur praesentium, molestias sed!'
  },
  {
    avatar: AVATAR,
    name: 'John Doe',
    review: 'dolor sit amet consectetur adipisicing elit. Explicabo, expedita odit blanditiis amet tempora excepturi accusantium sit eligendi repudiandae? Fugit nec praesentium, molestias sed!'
  },
  {
    avatar: AVATAR,
    name: 'John Doe',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit necessitatibus ut laboriosam hic sit quam consequuntur praesentium, molestias sed!'
  },
]

const Clients = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView();

  return (
    <section id="clients" ref={myRef}>
      <h2 className={`clients__title ${myElementIsVisible ? 'animation__clients' : ''}`}>Clientes que confian en nosotros</h2>
      <div  ref={myRef2}>
      <Swiper className="container clients__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}
      >
      {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className={`client ${myElementIsVisible2 ? 'animation__clients' : ''}`}>
            <div className="client__avatar">
              <img src={avatar} alt="client avatar" />
            </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
          </SwiperSlide>
          )
        })
      }
      </Swiper>
      </div>
      <div className={`clients__logos ${myElementIsVisible2 ? 'animation__clients' : ''}`}>
        <div className="client__logo"><img src={logo1} alt="dummy logo" /></div>
        <div className="client__logo"><img src={logo2} alt="dummy logo" /></div>
        <div className="client__logo"><img src={logo3} alt="dummy logo" /></div>
        <div className="client__logo"><img src={logo4} alt="dummy logo" /></div>
      </div>
    </section>
  );
};

export default Clients;
