import React, { useEffect, useState } from 'react'
import styles from './Lista.module.css';
import axios from 'axios';

function Lista() {

  const [data, setData] = useState([]);

  const url = 'http://localhost:3001/products/products'

  const getData = async () => {
    await axios.get(url).then((response) => {
      const data = response.data
      console.log(data);
      setData(data.data)
    })
  }

  useEffect(() => {
    getData()
  },[])

  console.log(data)

  return (
    <div>
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
              <tr className={styles.objeto}>
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
  )
}

export default Lista
