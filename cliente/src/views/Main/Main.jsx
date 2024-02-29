import React from 'react'

import 'swiper/css'
import './Main.css'

import Slider1 from '../../imgs/Slider1.jpg'
import Slider2 from '../../imgs/Slider2.jpg'
import Slider3 from '../../imgs/Slider3.jpg'
import Carpintero from '../../imgs/carpinteroIcon.png'
import arbol from '../../imgs/arbolIcon.png'
import camion from '../../imgs/entrega.png'
import mueble from '../../imgs/muebleC.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import Cards from '../../components/CardSlider/Cards'

function Main() {


  return (
    <div className='main'>
    
        <div className="general">
        <div className="texto">
            <h1>HOLA BUENAS</h1>
            <p>Aca encontraras todos los muebles que necesitas para tu hogar.</p>
        </div>
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src={Slider1} alt="" className='Slider1'/></SwiperSlide>
            <SwiperSlide><img src={Slider2} alt="" className='Slider2'/></SwiperSlide>
            <SwiperSlide><img src={Slider3} alt="" className='Slider3'/></SwiperSlide>
        </Swiper>
        </div>

        <div className="Caracteristicas">
            <div className="Citem">
                <img src={Carpintero} alt="" className='Icono' />
                <p>Productos 100% artesanales</p>
            </div>
            <div className="Citem">
                <img src={arbol} alt="" className='Icono' />
                <p>Amigables con el ambiente</p>
            </div>
            <div className="Citem">
                <img src={camion} alt="" className='Icono' />
                <p>Entrega confiable y rapida</p>
            </div>
        </div>

            <div className="Separador">
                <p>PRODUCTOS ESTRELLA</p>
            </div>

        <div className="Productos">

            <Cards/>
            
        </div>

        <div className="Separador">
                <p>CATEGORIAS</p>
            </div>

        <div className='muebles'>
            <div className='Card'>
                <div className="transparente">
                    {/* <img className="img" src={mueble} alt="" /> */}
                    <p>MUEBLES PARA HABITACIÓN</p>
                    <button>Ver muebles</button>
                </div>

            </div>
            <div className='Card'>
                <div className="transparente">
                    {/* <img className="img" src={mueble} alt="" /> */}
                    <p>MUEBLES PARA HABITACIÓN</p>
                    <button>Ver muebles</button>
                </div>

            </div>
            <div className='Card'>
                <div className="transparente">
                    {/* <img className="img" src={mueble} alt="" /> */}
                    <p>MUEBLES PARA HABITACIÓN</p>
                    <button>Ver muebles</button>
                </div>

            </div>



        </div>

    </div>
  )
}

export default Main
