import React, { useState, useEffect } from 'react';
import styles from './addDirection.module.css';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

function AddDirection() {
  const navigate = useNavigate();

  const [departamento, setDepartamento] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [direccion, setDireccion] = useState('');
  const [departamentos, setDepartamentos] = useState([]);
  const [usuario, setUsuario] = useState('')
  const [ciudadesPorDepartamento, setCiudadesPorDepartamento] = useState({});

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json');
        const data = await response.json();

        const departamentos = data.map(item => item.departamento).filter((value, index, self) => self.indexOf(value) === index);
        const ciudadesPorDepartamento = {};
        departamentos.forEach(depto => {
          ciudadesPorDepartamento[depto] = data.filter(item => item.departamento === depto).map(item => item.municipio);
        });


        setDepartamentos(departamentos);
        setCiudadesPorDepartamento(ciudadesPorDepartamento);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };


    obtenerDatos();
  }, []);


  const handleDepartamentoChange = (e) => {
    const selectedDepartamento = e.target.value;
    setDepartamento(selectedDepartamento);
    setCiudad('');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    
    
      const token = sessionStorage.getItem('token');
      const formulario = new FormData(e.currentTarget);
    
      formulario.append('City', ciudad);
      formulario.append('Department', departamento);
      formulario.append('Direccion', direccion);
      formulario.append('UserId', token);
    
      for (let [key, value] of formulario.entries()) {
        console.log(key, value);
    }




    if (!departamento || !ciudad || !direccion) {
      toast.error('Rellenar todos los campos es necesario')
    }

    try {
      const url = 'http://localhost:3001/address/newAddress'; // Reemplaza con la URL a la que estás enviando el formulario

      const config = {
        headers: {
          'Authorization': `Bearer ${ token }`
    }
};

      axios.post(url, formulario, config)
        .then(response => {
          console.log('Éxito:', response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });

      }catch(error){
        console.log(error);
      }
    };
    console.log('Datos del formulario:', { departamento, ciudad, direccion });
    
    
return (
  <div>
    <h1>Añadir Dirección</h1>
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <div className={styles.campo}>
          <label className={styles.label} htmlFor="departamento">Departamento</label>
          <select
            id="departamento"
            name='Department'
            value={departamento}
            onChange={handleDepartamentoChange}
            required
          >
            <option value="">Seleccione un departamento</option>
            {departamentos.map((depto, index) => (
              <option key={index} value={depto}>{depto}</option>
            ))}
          </select>
        </div>
        <div className={styles.campo}>
          <label className={styles.label} htmlFor="ciudad">Ciudad</label>
          <select
            id="ciudad"
            name='City'
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            required
            disabled={!departamento}
          >
            <option value="">Seleccione una ciudad</option>
            {ciudadesPorDepartamento[departamento] && ciudadesPorDepartamento[departamento].map((ciudad, index) => (
              <option key={index} value={ciudad}>{ciudad}</option>
            ))}
          </select>
        </div>
        <div className={styles.campo}>
          <label className={styles.label} htmlFor="direccion">Dirección</label>
          <input
            type="text"
            name='Direccion'
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
            className={styles.input}

          />
        </div>
        <button type="submit" className={styles.botonAgregarDireccion}>Añadir Dirección</button>
      </form>
    </div>
  </div>
);
}

export default AddDirection;