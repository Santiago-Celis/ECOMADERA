import React from 'react'
import styles from '../../../views/ProfileAdmin/ProfileAdmin.module.css';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

function CrearCategoria() {

    const url = 'http://localhost:3001/category/categories';
    const [category, setCategory] = useState([]);

    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!name) {
            newErrors.name = 'El nombre del producto es requerido';
        }
        setErrors(newErrors);
        try {
            const response = await axios.post('http://localhost:3001/category/newCategory',{
                name: name
            })
            console.log(response);
            toast.success('!La Categoria se ha registrado correctamente¡');
        } catch (error) {
            console.log(error);
            toast.error("Error al agregar el producto");
        }
    };

  return (
    <div>
      <h1>Crear Categoria</h1>
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.formulario}>
                    <div className={styles.campo}>
                        <label className={styles.label} htmlFor="nombre">Nombre del Producto</label>
                        <input
                            name='name'
                            type="text"
                            id="nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className={`${styles.input} ${styles.inputNombre}`}
                        />
                        {errors.nombre && <p>{errors.nombre}</p>}
                    </div>
                    <button className={styles.botonCrear} onClick={handleSubmit}>Crear</button>
                </form>
            </div>
    </div>
  )
}

export default CrearCategoria
