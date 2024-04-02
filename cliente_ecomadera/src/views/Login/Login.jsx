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




  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Todos los campos son obligatorios")
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error(error, "Ingresa una direccion de correo valida")
    }

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      })
        .then(response => response.json())
        .then(data => {

          function parseJwt(token) {
            var base64Url = token.split('.')[1]; // Obtén el payload del token
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Reemplaza los caracteres URL-safe con los caracteres base64 estándar
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join('')); // Decodifica base64 y luego decodifica URI

            return JSON.parse(jsonPayload); // Convierte la cadena JSON en un objeto
          }

          console.log('Respuesta del servidor:', data);
          console.log(data.data.token); // Para ver qué estás recibiendo exactamente del servidor
          console.log(data.payload); // Para ver qué estás recibiendo exactamente del servidor
          if (data.data.token) {
            sessionStorage.setItem('token', data.data.token);
            console.log('Token guardado en sessionStorage.');

            const payload = parseJwt(data.data.token);
            console.log('Payload decodificado:', data.data.payload); // Para verificar el contenido del payload

            const id = data.data.payload._id
            sessionStorage.setItem("id", id)

            if (data.data.payload.rol === 2) {
              console.log('Redirigiendo a /admin');
              navigate('/admin');
            } else {
              console.log('Redirigiendo a /');
              navigate('/');
            }
          } else {
            console.log('No se recibió token en la respuesta.');
            navigate('/login');
          }
        })
        .catch(error => {
          console.error('Error durante el login:', error);
          navigate('/login');
        });


      /* if (!response.ok) {
        throw new Error("Error en el servidor");
      }

      const data = await response.json();

      if (data.token) {
        sessionStorage.setItem('token', data.token);
        const payload = parseJwt(data.token);
        console.log(data);
        if (payload.rol === 2) {
          navigate('/admin');
        }else{
          navigate('/')
        }

      } */


      /* navigate('/') */

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

            <button type='submit' onClick={handleLogin} className={styles.boton} ><FaArrowCircleRight style={{ fontSize: '100' }} /></button>
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
