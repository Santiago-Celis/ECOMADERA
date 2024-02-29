import React, { useState } from 'react'
import '../../styles/navbar.css'
import DropdownProfile from './DropdownProfile'

function Navbar() {

  const [openProfile, setOpenProfile] = useState(false)

  return (
    <div>
      <div className='General'>

        <p>ECOMADERA</p>

        <div className='Busqueda'>
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
