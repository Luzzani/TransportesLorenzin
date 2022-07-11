import React, { useRef } from "react";
import "./Clients.css";
import AVATAR from '../../assets/avatar.jpg'
import logo1 from '../../assets/yummy-logos_transparent.png'
import logo2 from '../../assets/meca-nics-logos_transparent.png'
import logo3 from '../../assets/magicGamer-logos_transparent.png'
import logo4 from '../../assets/builderSoft-logos_transparent.png'
import { useInView} from 'framer-motion';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

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
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });


  return (
    <section id="clients">
      <h2 className={`clients__title`}
        ref={ref}
        style={{
          transform: isInView ? "none" : "translatex(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}>Clientes que confian en nosotros</h2>
      <div>
      <Swiper className="container clients__container"
         ref={ref2}
         style={{
           transform: isInView2 ? "none" : "translateY(200px)",
           opacity: isInView2 ? 1 : 0,
           transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
         }}
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}
      >
      {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className={`client`}>
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
      <div className={`clients__logos`}
          ref={ref3}
          style={{
            transform: isInView3 ? "none" : "translatex(200px)",
            opacity: isInView3 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}>
        <div className="client__logo"><img src={logo1} alt="dummy logo" /></div>
        <div className="client__logo"><img src={logo2} alt="dummy logo" /></div>
        <div className="client__logo"><img src={logo3} alt="dummy logo" /></div>
        <div className="client__logo"><img src={logo4} alt="dummy logo" /></div>
      </div>
    </section>
  );
};

export default Clients;
