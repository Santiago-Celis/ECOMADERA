import React from 'react'
import styles from '../../styles/navbar.module.css'


function DropdownProfile() {
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

export default DropdownProfile
