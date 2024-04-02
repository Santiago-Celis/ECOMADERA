import React, { useState, useEffect } from 'react';
import styles from './addDirection.module.css';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

function AddDirection() {
  const navigate = useNavigate();

  const [Department, setDepartment] = useState('');
  const [City, setCity] = useState('');
  const [Direccion, setDireccion] = useState('');
  const [Departments, setDepartments] = useState([]);
  const [UserId, setUserId] = useState(parseInt(sessionStorage.getItem('id')));
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


        setDepartments(departamentos);
        setCiudadesPorDepartamento(ciudadesPorDepartamento);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };


    obtenerDatos();
  }, []);


  const handleDepartamentoChange = (e) => {
    const selectedDepartamento = e.target.value;
    setDepartment(selectedDepartamento);
    setCity('');
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

      const token = sessionStorage.getItem('token');

      /* function parseJwt(token) {
        var base64Url = token.split('.')[1]; // Obtén el payload del token
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Reemplaza los caracteres URL-safe con los caracteres base64 estándar
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join('')); // Decodifica base64 y luego decodifica URI

        return JSON.parse(jsonPayload); // Convierte la cadena JSON en un objeto
      } */

      const formulario = new FormData(e.currentTarget);
    
      formulario.append('City', City);
      formulario.append('Department', Department);
      formulario.append('Direccion', Direccion);
      formulario.append('UserId', UserId)
    
      for (let [key, value] of formulario.entries()) {
        console.log(key, value);
    }




    if (!Department || !City || !Direccion) {
      toast.error('Rellenar todos los campos es necesario')
    }

    try {
      const url = 'http://localhost:3001/address/newAddress'; // Reemplaza con la URL a la que estás enviando el formulario

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${ token }`
    }
};

      const respuesta = await axios.post(url, formulario, config )
        
      console.log("Exito: " + respuesta);
        
        
      }catch(error){
        console.log(error);
      }
    };
    
    console.log('Datos del formulario:', { Department, City, Direccion, UserId });
    
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
            value={Department}
            onChange={handleDepartamentoChange}
            required
          >
            <option value="">Seleccione un departamento</option>
            {Departments.map((depto, index) => (
              <option key={index} value={depto}>{depto}</option>
            ))}
          </select>
        </div>
        <div className={styles.campo}>
          <label className={styles.label} htmlFor="ciudad">Ciudad</label>
          <select
            id="ciudad"
            name='City'
            value={City}
            onChange={(e) => setCity(e.target.value)}
            required
            disabled={!Department}
          >
            <option value="">Seleccione una ciudad</option>
            {ciudadesPorDepartamento[Department] && ciudadesPorDepartamento[Department].map((City, index) => (
              <option key={index} value={City}>{City}</option>
            ))}
          </select>
        </div>
        <div className={styles.campo}>
          <label className={styles.label} htmlFor="Direccion">Dirección</label>
          <input
            type="text"
            name='Direccion'
            id="Direccion"
            value={Direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
            className={styles.input}

          />
        </div>
        <div className={styles.campo}>
          <input
            style={{ display:'none' }}
            name='UserId'
            id="userId"
            value={UserId}
            onChange={()=>{}}  //No se usa por que el valor de UserID es tomado desde el session storage
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