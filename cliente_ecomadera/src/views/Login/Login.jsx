import './Login.css'
import { FaArrowCircleRight } from "react-icons/fa";


import { useState } from 'react';

export default function Login() {

  const endpoint = 'http://localhost:3001/api/register'


  const [password, setPassword] = useState('')
  const [correo, setCorreo] = useState('')

  const handleLogin = (e) =>{
    e.preventDefault();
    console.log('holis');
  }

  return (
    <div>
      <div className='contenedor'>
        <div className='superior'>
            <h1 className="Titulo">ECO MADERA</h1>
        </div>
        <div className='inferior'>
        <form>
            <div className='campo'>
                <span>Ingresa tu correo</span>
                <input name='' placeholder='Correo' />
            </div>
            <div className='campo'>
                <span>Ingresa tu contraseña</span>
                <input name='' placeholder='Contraseña' />
            </div>

            
            <button type='submit' onClick={handleLogin} ><FaArrowCircleRight style={{ fontSize: '100' }}/></button>
        </form>
        </div>
      </div>
    </div>
  )
}
