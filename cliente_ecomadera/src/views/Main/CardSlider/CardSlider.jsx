import React from 'react'
import styles from'./CardSlider.module.css'

import Mueble from '../../../assets/Main/Mueble1.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'

function Cards() {
  return (
    <div>
      <Swiper
            modules={[EffectCards]}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >

            <SwiperSlide>
                <div className={styles.Carta}>
                    <img src={Mueble} alt="" className={styles.ImagenCarta}/>
                    <h2>MUEBLE COMODO</h2>
                    <h3>$150.000</h3>
                    <a href="#">Ver mas</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.Carta}>
                    <img src={Mueble} alt="" className={styles.ImagenCarta}/>
                    <h2>MUEBLE COMODO</h2>
                    <h3>$150.000</h3>
                    <a href="#">Ver mas</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.Carta}>
                    <img src={Mueble} alt="" className={styles.ImagenCarta}/>
                    <h2>MUEBLE COMODO</h2>
                    <h3>$150.000</h3>
                    <a href="#">Ver mas</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.Carta}>
                    <img src={Mueble} alt="" className={styles.ImagenCarta}/>
                    <h2>MUEBLE COMODO</h2>
                    <h3>$150.000</h3>
                    <a href="#">Ver mas</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.Carta}>
                    <img src={Mueble} alt="" className={styles.ImagenCarta}/>
                    <h2>MUEBLE COMODO</h2>
                    <h3>$150.000</h3>
                    <a href="#">Ver mas</a>
                </div>
            </SwiperSlide>
            

            </Swiper>
    </div>
  )
}

export default Cards
