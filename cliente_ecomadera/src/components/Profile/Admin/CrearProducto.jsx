import React, { useEffect, useState } from 'react';
import styles from '../../../views/ProfileAdmin/ProfileAdmin.module.css';
import toast from 'react-hot-toast';
import axios from 'axios';

function CrearProducto() {
    const url = 'http://localhost:3001/category/categories';
    const [category, setCategory] = useState([]);

    const getCategory = async () => {
        try {
            const res = await axios.get(url)
            setCategory(res.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCategory();
    }, [])

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [alto, setAlto] = useState('');
    const [ancho, setAncho] = useState('');
    const [profundidad, setProfundidad] = useState('');
    const [imagen, setImagen] = useState('');
    const [categoria, setCategoria] = useState('');
    const [errors, setErrors] = useState({});

    const handleEditProduct = async (id) => {
        const formulario = new FormData(); 
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        const formulario = new FormData(e.currentTarget)

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

        try {
            const response = await axios.post('http://localhost:3001/products/newProduct', 
                formulario, {headers: { 'Content-Type': 'multipart/form-data'}}
            )
            console.log(response);
            toast.success('!El producto se ha registrado correctamente¡');
        } catch (error) {
            console.log(error);
            toast.error("Error al agregar el producto");
        }
    };

    return (
        <div>
            <h1>Crear Producto</h1>
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.formulario}>
                    <div className={styles.campo}>
                        <label className={styles.label} htmlFor="nombre">Nombre del Producto</label>
                        <input
                            name='name'
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                            className={`${styles.input} ${styles.inputNombre}`}
                        />
                        {errors.nombre && <p>{errors.nombre}</p>}
                    </div>
                    <div className={styles.campo}>
                        <label className={styles.label} htmlFor="precio">Precio</label>
                        <input
                            name='price'
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
                            name="description"
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
                            name='height'
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
                            name='width'
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
                            name='depth'
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
                            name='categoryId'
                            id="categoria"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            required
                        >
                            <option value="">Seleccione una categoría</option>
                            {category.map((category, i) => (
                                <option key={i}  value={category.id}>{category.name}</option>
                            ))}
                        </select>
                        {errors.categoria && <p>{errors.categoria}</p>}
                    </div>
                    <div className="campo">
                        <label className={styles.label} htmlFor="imagen">Imagen del Producto</label>
                        <input
                            name='image'
                            type="file"
                            id="imagen"
                            accept="image/*"
                            onChange={(e) => setImagen(e.target.files[0])}
                            required
                            className={styles.input}
                        />
                        {errors.imagen && <p>{errors.imagen}</p>}
                    </div>
                    <button type="submit" className={styles.botonCrear}>Crear</button>
                </form>
            </div>
        </div>
    );
}

export default CrearProducto;