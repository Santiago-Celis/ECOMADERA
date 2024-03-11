import React, { useState } from 'react'; 
import './ProfileAdmin.module.css';
import { Link, NavLink, Route, Router, Routes } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.jsx';
import { Box } from '@mui/material';
import {List} from '@mui/material';
import {ListItem} from '@mui/material';
import {ListItemButton} from '@mui/material';
import {ListItemText} from '@mui/material';
import CrearProducto from '../../components/Profile/Admin/CrearProducto.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ActualizarProducto from '../../components/Profile/Admin/ActualizarProducto.jsx';
import Lista from '../../components/Profile/List/Lista.jsx'






const lista = {
  p: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  borderColor: 'divider',
  backgroundColor: 'background.paper', 
};


function ProfileAdmin() {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [alto, setAlto] = useState('');
    const [ancho, setAncho] = useState('');
    const [profundidad, setProfundidad] = useState('');
    const [imagen, setImagen] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Datos del formulario:', { nombre, precio, descripcion, alto, ancho, profundidad, imagen });
    };
  
    return (
      <>

        <Navbar/>

        <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            bgcolor: 'background.paper',
            color: 'text.secondary',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: '50em'

            
        }}>

<List sx={lista} aria-label="mailbox folders">
        
        <ListItem disablePadding>
          <ListItemButton sx={{ borderBottom: '2px solid blue' }}>
            <ListItemText primary="Perfil" ></ListItemText>
          </ListItemButton>
        </ListItem>

        <Link to={'users'}>
          <ListItem disablePadding>
            <ListItemButton sx={{ borderBottom: '2px solid blue' }}>
              <ListItemText primary="Usuarios" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={'productos'}>
          <ListItem disablePadding>
            <ListItemButton sx={{ borderBottom: '2px solid blue' }}>
              <ListItemText primary="Productos" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={'createProduct'}>
          <ListItem disablePadding>
            <ListItemButton sx={{ borderBottom: '2px solid blue' }}>
              <ListItemText primary="Crear Producto" />
            </ListItemButton>
          </ListItem>
        </Link>
    </List>
        

        <Routes>
          <Route path='/' element={<CrearProducto/>}/>
          <Route path='/productos' element={<Lista/>}/>
          <Route path='/createProduct' element={<CrearProducto/>}/>
          <Route path='/updateProduct' element={<ActualizarProducto/>}/>
        </Routes>

        </Box>

        <Footer/>

      </>
    );
  }

export default ProfileAdmin;