import React from 'react'
import './Register.css'
import logo from '../../Flecha.png'

export default function Register() {
  return (
    <div>
      <div className="Contenedor">
        <div className="generalRegister">
            <div className="Formulario">
                <form action="">
            <div className='campo'>
                <span>Nombre Completo</span>
                <input name='' placeholder='Contraseña' />
            </div>
            <div className='campo'>
                <span>Correo</span>
                <input name='' placeholder='Ingresa un correo' />
            </div>
            <div className='campo'>
                <span>Celular</span>
                <input name='' placeholder='Ingresa un Celular' type='number' />
            </div>
            <div className='campo'>
                <span>Ingresa tu contraseña</span>
                <input name='' placeholder='Contraseña' />
            </div>
            <div className='campo'>
                <span>Verifica tu contraseña</span>
                <input name='' placeholder='Contraseña' />
            </div>
            <a href="">¿Ya tienes cuenta?</a>
            <button type='submit' className='botonRegister'><img src={logo} alt='flecha' /></button>
            </form>
            </div>
        </div>
      </div>
    </div>
  )
}
