import React, { useEffect, useRef, useState } from 'react';
import "./Servuce.css"

import ServiceData from "../../ServucesDate.json"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


export default function ServicesBody() {
    const [drag,setDrag] =useState(!true);
    // slidesPerView(2)
    
  return (
      <div className="ServicesBody">
        <div className="conteinar ServiceMain">
            <div className="Service-text">
                <h1>Expertise Area</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum hic dolor veniam quis nulla labore facilis ipsa dolores ipsum excepturi? Perspiciatis earum soluta praesentium. Sapiente iste magnam unde architecto autem?</p>
            </div>
            <div className="row">
            <Swiper
        slidesPerView={document.body.clientWidth <= 555 ?  1 : document.body.clientWidth <= 744 ?  2 : 3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
            ServiceData.map(data=>{
                const {icons,title,desc} = data; 
                return (
                    <SwiperSlide className='card' key={desc}  style={{
                        width:"20rem"
                    }}>
                        <i className={icons}></i>
                        <h1>{title}</h1>
                        <p>{desc}</p>
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
            </div>
        </div>
      </div>
  );
}
