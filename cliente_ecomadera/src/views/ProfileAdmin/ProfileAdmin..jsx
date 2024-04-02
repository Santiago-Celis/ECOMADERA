import React, { useState } from 'react';
import './ProfileAdmin.module.css';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.jsx';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import CrearProducto from '../../components/Profile/Admin/CrearProducto.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ActualizarProducto from '../../components/Profile/Admin/ActualizarProducto.jsx';
import Lista from '../../components/Profile/List/Lista.jsx';
import Admin from '../../components/Profile/Admin/UserAdmin.jsx';

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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row', // Cambiar la dirección de la columna a la fila si es móvil
          alignItems: 'center',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          height: '100%',
          padding: '20px',
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
        </List>

        <Box sx={{ height: '100%', width: '100%' }}>
          <Routes>
            <Route path='/' element={<CrearProducto />} />
            <Route path='/productos' element={<Lista />} />
            <Route path='/createProduct' element={<CrearProducto />} />
            <Route path='/updateProduct' element={<ActualizarProducto />} />
            <Route path='/UserAdmin' element={<Admin />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default ProfileAdmin;