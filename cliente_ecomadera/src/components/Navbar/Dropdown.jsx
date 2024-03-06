import React from 'react'
import styles from './navbar.module.css'


function Dropdown() {
  return (
      <div className={styles.Usuario}>
            <ul>
              <li>Perfil</li>
              <li>Carrito</li>
              <li>Opciones</li>
              <li>Cerrar Sesion</li>
            </ul>
        </div>
  )
}

export default Dropdown
