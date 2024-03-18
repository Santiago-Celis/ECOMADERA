import React, { useState } from 'react';
import { Box } from '@mui/material';
import styles from './UserData.module.css';

function UpdateUser() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [celular, setCelular] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', { nombre, apellidos, correo, celular });
  };

  return (
    <div>
      <h2>Actualizar Perfil</h2>
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
            />
          </div>
          <button onClick={handleSubmit} className={styles.botonActualizar}>Actualizar</button>
          <button onClick={handleSubmit} className={styles.botonCancelar}>Cancelar</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;