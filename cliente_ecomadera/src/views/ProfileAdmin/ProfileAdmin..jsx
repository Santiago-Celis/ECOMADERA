import React, { useState } from 'react';
import './ProfileAdmin.module.css';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.jsx';
import { Box } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import CrearProducto from '../../components/Profile/Admin/CrearProducto.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ActualizarProducto from '../../components/Profile/Admin/ActualizarProducto.jsx';
import Lista from '../../components/Profile/ProductList/Lista.jsx';
import Admin from '../../components/Profile/Admin/UserAdmin.jsx';
import CrearCategoria from '../../components/Profile/Admin/CrearCategoria.jsx';
import ListaCategoria from '../../components/Profile/Admin/ListaCategoria.jsx';
import CrearAdmin from '../../components/Profile/Admin/CrearAdmin.jsx';


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
      <Navbar />
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
          height: '50em'
        }}
      >
        <List sx={lista} aria-label="mailbox folders">
          <ListItem disablePadding>
            <ListItemButton sx={{ borderBottom: '2px solid #906040' }}>
              <ListItemText primary="Perfil" />
            </ListItemButton>
          </ListItem>
          <Link to={'UserAdmin'}>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderBottom: '2px solid #906040' }}>
                <ListItemText primary="Admin" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={'createAdmin'}>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderBottom: '2px solid #906040' }}>
                <ListItemText primary="Crear Admin" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={'productos'}>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderBottom: '2px solid #906040' }}>
                <ListItemText primary="Productos" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={'createProduct'}>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderBottom: '2px solid #906040' }}>
                <ListItemText primary="Crear Producto" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={'createCategory'}>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderBottom: '2px solid #906040' }}>
                <ListItemText primary="Crear Categoria
                " />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={'categories'}>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderBottom: '2px solid #906040' }}>
                <ListItemText primary="Categorias" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

        <Box sx={{ height:'fit-content' }}>
          <Routes>
            <Route path='/' element={<CrearProducto />} />
            <Route path='/productos' element={<Lista />} />
            <Route path='/createAdmin' element={<CrearAdmin/>} />
            <Route path='/createProduct' element={<CrearProducto />} />
            <Route path='/updateProduct' element={<ActualizarProducto />} />
            <Route path='/UserAdmin' element={<Admin />} />
            <Route path='/categories' element={<ListaCategoria/>} />
            <Route path='/createCategory' element={<CrearCategoria/>} />
          </Routes>
        </Box>
      </Box>

      
    </>
  );
}

export default ProfileAdmin;