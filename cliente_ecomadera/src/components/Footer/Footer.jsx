import React from 'react';
import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoCar } from "react-icons/io5";


function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <p>Síguenos en:</p>
        <div className="social-icons">
        <FaFacebookF style={{fontSize:'25'}}/>
        <RiInstagramFill style={{fontSize:'30'}}  />
        <IoLogoTiktok tyle={{fontSize:'60'}}   />

        
        </div>
      </div>
      <div className="footer-center">
        <p>@EcomaderaTodos los derechos reservados</p>
      </div>
      <div className="footer-right">
      <FaMapMarkedAlt  style={{fontSize:'40'}}/>
      <IoCar style={{fontSize:'40'}} />
      </div>
    </footer>
  );
}

export default Footer;