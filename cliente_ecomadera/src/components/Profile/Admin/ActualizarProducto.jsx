import React, { useState } from 'react';
import styles from '../../../views/ProfileAdmin/ProfileAdmin.module.css';

function ActualizarProducto() {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [alto, setAlto] = useState('');
    const [ancho, setAncho] = useState('');
    const [profundidad, setProfundidad] = useState('');
    const [imagen, setImagen] = useState('');
    const [categoria, setCategoria] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!nombre) {
            newErrors.nombre = 'El nombre del producto es requerido';
        }

        if (!precio || precio <= 0) {
            newErrors.precio = 'El precio es requerido y debe ser mayor a cero';
        }

        if (!descripcion) {
            newErrors.descripcion = 'La descripción es requerida';
        }

        if (!alto || alto <= 0) {
            newErrors.alto = 'El alto es requerido y debe ser mayor a cero';
        }

        if (!ancho || ancho <= 0) {
            newErrors.ancho = 'El ancho es requerido y debe ser mayor a cero';
        }

        if (!profundidad || profundidad <= 0) {
            newErrors.profundidad = 'La profundidad es requerida y debe ser mayor a cero';
        }

        if (!imagen) {
            newErrors.imagen = 'La imagen es requerida';
        }

        if (!categoria) {
            newErrors.categoria = 'La categoría es requerida';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Datos del formulario:', { nombre, precio, descripcion, alto, ancho, profundidad, imagen, categoria });
        }
    };

    const handleImagenChange = (e) => {
        setImagen(e.target.files[0]);
    };

    return (
        <div>
            <h2>Actualizar Producto</h2>
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
                        {errors.nombre && <p>{errors.nombre}</p>}
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
                        {errors.precio && <p>{errors.precio}</p>}
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
                        {errors.descripcion && <p>{errors.descripcion}</p>}
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
                        {errors.alto && <p>{errors.alto}</p>}
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
                        {errors.ancho && <p>{errors.ancho}</p>}
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
                        {errors.profundidad && <p>{errors.profundidad}</p>}
                    </div>
                    <div className={styles.campo}>
                        <label className={styles.label} htmlFor="categoria">Categoría</label>
                        <select
                            id="categoria"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            required
                        >
                            <option value="">Seleccione una categoría</option>
                            <option value="baños">Baños</option>
                            <option value="habitaciones">Habitaciones</option>
                            <option value="cocina">Cocina</option>
                            <option value="sala">Sala</option>
                            {/* Agrega más opciones según tus categorías */}
                        </select>
                        {errors.categoria && <p>{errors.categoria}</p>}
                    </div>
                    <div className="campo">
                        <label className={styles.label} htmlFor="imagen">Imagen del Producto</label>
                        <input
                            type="file"
                            id="imagen"
                            accept="image/*"
                            onChange={handleImagenChange}
                            required
                            className={styles.input}
                        />
                        {errors.imagen && <p>{errors.imagen}</p>}
                    </div>
                    <button onClick={handleSubmit} className={styles.botonActualizar}>Actualizar</button>
                </form>
            </div>
        </div>
    );
}

export default ActualizarProducto;