import React from 'react'
import styles from './Register.module.css'
import { FaArrowCircleRight } from "react-icons/fa";


export default function Register() {
  return (
    <div>
      <div className={styles.Contenedor}>
        <div className={styles.generalRegister}>
            <div className={styles.Formulario}>
                <form action="">
            <div className={styles.campo}>
                <span>Nombre Completo</span>
                <input name='' placeholder='Contraseña' />
            </div>
            <div className={styles.campo}>
                <span>Correo</span>
                <input name='' placeholder='Ingresa un correo' />
            </div>
            <div className={styles.campo}>
                <span>Celular</span>
                <input name='' placeholder='Ingresa un Celular' type='number' />
            </div>
            <div className={styles.campo}>
                <span>Ingresa tu contraseña</span>
                <input name='' placeholder='Contraseña' />
            </div>
            <div className={styles.campo}>
                <span>Verifica tu contraseña</span>
                <input name='' placeholder='Contraseña' />
            </div>
            <a href="">¿Ya tienes cuenta?</a>
            <button type='submit' className={styles.botonRegister}><FaArrowCircleRight/></button>
            </form>
            </div>
        </div>
      </div>
    </div>
  )
}
