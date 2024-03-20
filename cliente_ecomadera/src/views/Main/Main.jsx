import Navbar from '../../components/Navbar/Navbar.jsx'
import 'swiper/css'
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import styles from './Main.module.css'

import Slider1 from '../../assets/Main/Slider1.jpg'
import Slider2 from '../../assets/Main/Slider2.jpg'
import Slider3 from '../../assets/Main/Slider3.jpg'
import Carpintero from '../../assets/Main/carpinteroIcon.png'
import arbol from '../../assets/Main/arbolIcon.png'
import camion from '../../assets/Main/entrega.png'
import mueblec from '../../assets/Main/muebleC.jpg' 

/* import mueble from '../../assets/Main/muebleC.jpg' */

import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from '../../components/Footer/Footer.jsx'

function Main() {
  return (
    <div className={styles.main}>
      <Navbar/>
      <div className={styles.general}>
        <div className={styles.texto}>
          <p>Acá encontraras todos los muebles que necesitas para tu hogar.</p>
        </div>

        <div className={styles.nose}>
          <div className={styles.fondito}></div>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000 }}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
          >
            <SwiperSlide><img src={Slider1} alt="" className={styles.Slider}/></SwiperSlide>
            <SwiperSlide><img src={Slider2} alt="" className={styles.Slider}/></SwiperSlide>
            <SwiperSlide><img src={Slider3} alt="" className={styles.Slider}/></SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className={styles.Caracteristicas}>
        <div className={styles.Citem}>
          <img src={Carpintero} alt="" className={styles.Icono} />
          <p>Productos 100% artesanales</p>
        </div>
        <div className={styles.Citem}>
          <img src={arbol} alt="" className={styles.Icono} />
          <p>Amigables con el ambiente</p>
        </div>
        <div className={styles.Citem}>
          <img src={camion} alt="" className={styles.Icono} />
          <p>Entrega confiable y rapida</p>
        </div>
      </div>

      <div className={styles.Separador}>
        <h2>Los mejores diseños para tu hogar</h2>
      </div>

      <div className={styles.Gallery}>
        <img src={mueblec} alt="" />
        <img src={Slider1} alt="" />
        <img src={Slider2} alt="" />
        <img src={Slider3} alt="" />
        <img src={mueblec} alt="" />
        <img src={mueblec} alt="" />
        <img src={mueblec} alt="" />
        <img src={mueblec} alt="" />
        <img src={mueblec} alt="" />
      </div>

      <Footer/>
    </div>
  )
}

export default Main