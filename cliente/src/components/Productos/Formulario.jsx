import React from 'react'
import styles from './Formulario.modules.css'
import { useForm } from 'react-hook-form'
import { useProduct } from '../../context/ProductContext';

function Formulario() {

    const { register, handleSubmit } = useForm();

    const { createProduct } = useProduct()

    const onSubmit = handleSubmit((data) => {
        createProduct(data);
    })

  return (
    <div>
      
      <div className={styles.form}>
        <form onSubmit={onSubmit}>
            <div className={styles.campos}>
                <h1>AGREGAR PRODUCTO</h1>
                <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="" className={styles.formCamp} {...register("name")}/>
                <label htmlFor="descripcion">descripcion</label>
                    <input type="text" className={styles.descripcion} name="descripcion" id="" {...register("description")} />
                <label htmlFor="height">Altura</label>
                    <input type="number" className={styles.descripcion} name="height" id="" {...register("height")} />
                <label htmlFor="width">Anchura</label>
                    <input type="number" className={styles.descripcion} name="width" id="" {...register("width")} />
                <label htmlFor="depth">Profundidad</label>
                    <input type="number" className={styles.descripcion} name="depth" id="" {...register("depth")} />
                <label htmlFor="precio">precio</label>
                    <input type="number" name="precio" id="" className={styles.formCamp} {...register("price")}/>
                <label htmlFor="categoria">categoria</label>
                    <input type="number" name="precio" id="" className={styles.formCamp} {...register("categoryId")}/>
            </div>
            <div className={styles.img}>
                <div className={styles.customFile}>
                    <input type="file" name="" id="" className={styles.inputImg} {...register("imagenURL")}/>
                </div>
            </div>
                <div className={styles.agregar}>
                    <button className={styles.botoncito}/>
                </div>
        </form>
    </div>

    </div>
  )
}

export default Formulario
