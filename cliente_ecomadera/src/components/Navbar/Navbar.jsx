import React from 'react'
import { useState } from 'react'
import styles from './navbar.module.css'
import Dropdown from './Dropdown'

function Navbar() {

    const [openProfile, setOpenProfile] = useState(false)

  return (
    <div>
       <div>
      <div className={styles.General}>

        <p>ECOMADERA</p>

        <div className={styles.Busqueda}>
            <input type='text' placeholder='Buscar' />

            <ul>
                <li>Habitacion</li>
                <li>Baños</li>
                <li>Sala</li>
                <li>Estudio</li>
                <li>Cocina</li>
                <li>Gamer</li>
            </ul>

        {
           openProfile && <Dropdown/>
        }
        </div>
          <span onClick={() => setOpenProfile((prev) => !prev)}>LOGO</span>
      </div>
    </div>
    </div>
  )
}

export default Navbar
