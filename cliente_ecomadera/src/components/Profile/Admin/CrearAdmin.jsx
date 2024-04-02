import React from 'react'
import styles from '../../../views/ProfileAdmin/ProfileAdmin.module.css';
import { useState } from 'react';
import { Button } from '@mui/material';

function CrearAdmin() {

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');
    const [celular, setCelular] = useState('');


   const handleSubmit = async (e) => {
    e.preventDefault();
   }

  return (
    <div>
      <h1>Crear Administrador</h1>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.formulario}>
          <div className={styles.campo}>
            <label className={styles.label} htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.campo}>
            <label className={styles.label} htmlFor="apellidos">Apellidos</label>
            <input
              type="text"
              id="apellidos"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.campo}>
            <label className={styles.label} htmlFor="correo">Correo</label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.campo}>
            <label className={styles.label} htmlFor="celular">Celular</label>
            <input
              type="tel"
              id="celular"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <button>Crear Administrador</button>
        </form>
      </div>
    </div>
  )
}

export default CrearAdmin
