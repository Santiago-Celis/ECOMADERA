import React from 'react'
import { Typography } from '@mui/material'
import {Link} from '@mui/material'
import styles from './directionUser.module.css'

function Directions() {
  return (
    <div>
      <Typography variant="h3" color="initial">AGREGAR DIRECCION</Typography>
      <div className={styles.container}>
        <p className={styles.noDirecciones}>No tienes ninguna dirección registrada.</p>
        
        
          <Link to="/addDirection">
            <button className={styles.linkAgregar}>Añadir Dirección</button>
          </Link>
      </div>
    </div>
  )
}

export default Directions
