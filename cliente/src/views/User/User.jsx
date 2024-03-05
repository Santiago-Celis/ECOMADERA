import React, { useState } from 'react'
import styles from './User.module.css'
import { Link, Route } from 'react-router-dom'
import { verProductos } from '../../api/Auth'
import { Routes } from 'react-router-dom'
import Lista from '../../components/Lista/Lista'
import Formulario from '../../components/Productos/Formulario'

function User() {

  

  return (
    <div>
        <div className={styles.interfaz}>
          <div className={styles.general}>
          <div className={styles.opciones}>
            
          <h1 className="titulo">BIENVENIDO SANTIAGO</h1>

            <ul className={styles.ul} >
              <li className={styles.li}><Link to='/'>Ver Perfil</Link></li>
              <li className={styles.li}>Productos</li>
              <li className={styles.li}>Cerrar sesion</li>
            </ul>
          </div>
          </div>
          <div className={styles.render} >

            <Routes>
              <Route path='/' element={<Lista/>}/>
              <Route path="/agregar" element={<Formulario/>}/>
            </Routes>

          </div>
        </div>
    </div>
  )
}

export default User