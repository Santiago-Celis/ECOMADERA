import React from 'react'
import styles from './Register.module.css'
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { MdCancel } from "react-icons/md";

export default function Register() {

  const navigate = useNavigate();


  const url = 'http://localhost:3001/api/register';

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();


    if (!name || !email || !phone || !password) {

      toast.error("Llenar todos los campos es obligatorio", {
        position: 'top-right',
      })

      /* toastr.success("Llenar todos los campos es obligatorio.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }); */
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Ingresa una dirección de correo electrónico válida.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (password.length < 8) {
      toast.warning("Contraseña débil", "La contraseña debe tener al menos 8 caracteres");
      return
    }

    if (password !== confirm_password) {
      toast.error("Las contraseñas no coinciden.", {
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify({
          name: name,
          phone: phone,
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
      /* const response = await axios.post("http://localhost:3001/api/register", {
        name: name,
        email: email,
        phone: phone,
        password: password

      });
      console.log(response) */
      navigate('/Login')

    } catch (err) {
      console.log(err);
      toast.error("Ocurrió un error al registrarte. Intentalo más tarde.")
    }
  };
  return (
    <>
      <div className={styles.Contenedor}>
        <div className={styles.generalRegister}>

          <div className={styles.Formulario}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <h1 className={styles.titulo}>REGISTRATE</h1>
              <div className={styles.campo}>
                <span>Nombre Completo</span>
                <input
                  name=''
                  placeholder='Ingresa tu nombre'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.campo}>
                <span>Correo</span>
                <input
                  name='email'
                  type='email'
                  placeholder='Ingresa un correo'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.campo}>
                <span>Celular</span>
                <input
                  name='phone'
                  placeholder='Ingresa un Celular'
                  type='phone'
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.campo}>
                <span>Ingresa tu contraseña</span>
                <input
                  name='password'
                  type='password'
                  placeholder='Contraseña'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.campo}>
                <span>Verifica tu contraseña</span>
                <input
                  name=''
                  type='password'
                  value={confirm_password}
                  placeholder='Confirma tu contraseña'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={styles.input}
                />
              </div>
              <Link to='/Login'>
                <p className={styles.cuenta} >¿Ya tienes cuenta?</p>
              </Link>

              <button onClick={handleSubmit} className={styles.botonRegister} >Registrarme</button>
            </form>
          </div>
        </div>
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
};
