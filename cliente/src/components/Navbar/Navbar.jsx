import React, { useState } from 'react'
import styles from '../../styles/navbar.module.css'
import DropdownProfile from './DropdownProfile'

function Navbar() {

  const [openProfile, setOpenProfile] = useState(false)

  return (
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
          openProfile && <DropdownProfile />
        }
        </div>

          <span onClick={() => setOpenProfile((prev) => !prev)}>LOGO</span>



        
      </div>
    </div>
  )
}

export default Navbar
