import React, { useState } from 'react'
import styles from './User.module.css'
import { Link } from 'react-router-dom'
import { verProductos } from '../../api/Auth'

function User() {

  

  return (
    <div>
        <div className={styles.interfaz}>
          <div className={styles.contenedor}>
          <div className={styles.opciones}>
            
          <h1 className="titulo">BIENVENIDO SANTIAGO</h1>

            <ul className={styles.ul} >
              <li className={styles.li}><Link to='/'>Ver Perfil</Link></li>
              <li className={styles.li}>Productos</li>
              <li className={styles.li}>Cerrar sesion</li>
            </ul>
          </div>
          </div>
          <div className={styles.render}>

          <div className={styles.tabla}>
            <table>
              <thead>
              <th className={styles.columna}>Num</th>
              <th className={styles.columna}>Producto</th>
              <th className={styles.columna}>Precio</th>
              <th className={styles.columna}>Imagen</th>
              </thead>
              <tbody>
              <tr className={styles.objeto}>
                <th className={styles.item}>1</th>
                <td className={styles.item}>Producto</td>
                <td className={styles.item}>Precio</td>
                <td className={styles.item}>Imagen</td>
                <td className={styles.item}>editar/borrar</td>
              </tr>
              <tr className={styles.objeto}>
                <th className={styles.item}>2</th>
                <td className={styles.item}>Producto</td>
                <td className={styles.item}>Precio</td>
                <td className={styles.item}>Imagen</td>
                <td className={styles.item}>editar/borrar</td>
              </tr>
              <tr className={styles.row}>
                <th className={styles.item}>3</th>
                <td className={styles.item}>Producto</td>
                <td className={styles.item}>Precio</td>
                <td className={styles.item}>Imagen</td>
                <td className={styles.item}>editar/borrar</td>
              </tr>
                
              </tbody>
            </table>
          </div>

          </div>
        </div>
    </div>
  )
}

export default User