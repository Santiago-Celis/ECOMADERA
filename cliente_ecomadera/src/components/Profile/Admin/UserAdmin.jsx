import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './UserAdmin.module.css';

function UserAdmin() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [celular, setCelular] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !apellidos.trim() || !correo.trim() || !celular.trim()) {
      alert('Por favor completa todos los campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    if (celular.length !== 10) {
      alert('Por favor ingresa un número de celular válido.');
      return;
    }

    navigate('/Admin/UpdateAdmin'); 
  };

  const handleChangeCelular = (e) => {
    const inputValue = e.target.value;
    const onlyNums = /^[0-9]*$/;
    if (onlyNums.test(inputValue) || inputValue === '') {
      setCelular(inputValue);
    }
  };

  return (
    <div>
      <h1>Perfil</h1>
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
              onChange={handleChangeCelular}
              required
              className={styles.input}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserAdmin;