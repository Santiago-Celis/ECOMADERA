import React from 'react'
import { useState, handleSubmit } from 'react';
import styles from '../../../views/ProfileAdmin/ProfileAdmin.module.css'


function CrearProducto() {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [alto, setAlto] = useState('');
    const [ancho, setAncho] = useState('');
    const [profundidad, setProfundidad] = useState('');
    const [imagen, setImagen] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Datos del formulario:', { nombre, precio, descripcion, alto, ancho, profundidad, imagen });
    };

  return (
    <div>
      <h2>Crear Producto</h2>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.formulario}>
          <div className={styles.campo}>
            <label className={styles.label} htmlFor="nombre">Nombre del Producto</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className={styles.campo}>
            <label className={styles.label} htmlFor="precio">Precio</label>
            <input
              type="number"
              id="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.campo}>
            <label className={styles.label} htmlFor="descripcion">Descripción</label>
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
              className={styles.textarea}
              
            />
          </div>
          <div className={styles.campo}>
            <label className={styles.label} htmlFor="alto">Alto (cm)</label>
            <input
              type="number"
              id="alto"
              value={alto}
              onChange={(e) => setAlto(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.campo}>
            <label className={styles.label} htmlFor="ancho">Ancho (cm)</label>
            <input
              type="number"
              id="ancho"
              value={ancho}
              onChange={(e) => setAncho(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.campo}>
            <label className={styles.label} htmlFor="profundidad">Profundidad (cm)</label>
            <input
              type="number"
              id="profundidad"
              value={profundidad}
              onChange={(e) => setProfundidad(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className="campo">
            <label className={styles.label} htmlFor="imagen">Imagen del Producto</label>
            <input
              type="file"
              id="imagen"
              accept="image/*"
              onChange={(e) => setImagen(e.target.files[0])}
              required
              className={styles.input}
            />
          </div>
          <button onClick={handleSubmit}  className={styles.botonCrear} >Crear</button>
        </form>
      </div>
    </div>
  )
}

export default CrearProducto
