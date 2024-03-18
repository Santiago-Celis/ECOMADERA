import styles from './Login.module.css'
import { FaArrowCircleRight } from "react-icons/fa";
import mueble from '../../assets/Login.jpg';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

export default function Login() {

  const navigate = useNavigate();


  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')


  const handleLogin = async (e) =>{
    e.preventDefault();
    
    if( !email || !password ){
      toast.error("Todos los campos son obligatorios")
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if( !emailRegex.test(email)){
      toast.error(error, "Ingresa una direccion de correo valida")
    }
    
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify({
          email:email,
          password: password
        }),
      })
      .then(response => response.json())
      .then(data => {
        if(data.token){
          sessionStorage.setItem('token', data.token)
          navigate('/')
        }
      })

      console.log(response);
      /* const endpoint = await axios.post('http://localhost:3001/api/login', {
        email,
        password
      });

      navigate('/') */
      
    } catch (error) {
      console.log(error);
      toast.error("Error", "Ha ocurrido un error")
    }


  }

  return (
    <>
      <div className={styles.contenedor}>
        <div className={styles.formulario}>
        
        <form className={styles.form}>
            <h1 className={styles.Titulo}>ECO MADERA</h1>
            <div className={styles.campo}>
                <span className={styles.span} >Ingresa tu correo</span>
                <input 
                  className={styles.input} 
                  value={email}  
                  name='email' 
                  placeholder='Correo' 
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={styles.campo}>
                <span className={styles.span}  >Ingresa tu contraseña</span>
                <input
                  className={styles.input} 
                  value={password} 
                  type='password' name='password' 
                  placeholder='Contraseña' 
                  onChange={(e) => setPassword(e.target.value)}
                  />
            </div>
            <Link to='/#' style={{ color: 'white' }} >
                <p>¿Olvidaste tu contraseña?</p>
              </Link>
            <Link to='/register' style={{ color: 'white' }}>
                <p>Crea una cuenta</p>
              </Link>
            
            <button type='submit' onClick={handleLogin} className={styles.boton} ><FaArrowCircleRight style={{ fontSize: '100' }}/></button>
        </form>


        </div>
          <img src={mueble} alt="" />
        
        </div>

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />


    </>
  )
}
