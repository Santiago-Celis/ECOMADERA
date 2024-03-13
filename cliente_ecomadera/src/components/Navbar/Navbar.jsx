import React from 'react'
import { useState } from 'react'
import styles from './navbar.module.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom'
import Drawer from '@mui/material/Drawer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import mesa from '../../assets/mesa.jpg';
import axios from 'axios';
import { CartContext } from '../../context/ShoppingCartContext';
import { Badge } from '@mui/material';
import { useContext } from 'react';

function Navbar() {

    const [carro, setCarro] = useContext(CartContext);

    const quantity = carro.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);


    const navigate = useNavigate();

    const [cart, setCart] = React.useState(false);
    const handleOpen = () => setOpen(true);

  const toggleDrawer = (newCart) => () => {
    setCart(newCart);
  };

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/logout');
      navigate('/login')
      
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
       <div>
      <div className={styles.General}>

        <Link to ="/" className={styles.Link} >
          <p >ECOMADERA</p>
        </Link>

        <div className={styles.Busqueda}>
        <TextField fullWidth label="Buscar" id="fullWidth" size='small' sx={{
          borderRadius: 3,
          backgroundColor: 'grey',  //Cambiar variable de color
          
        }}
        />

            <ul>
              <Link to='/Products' style={{ color: 'white' }}>
                <li>Productos</li>
              </Link>
                <li>Categorias</li>
                {/* <li>Sala</li>
                <li>Estudio</li>
                <li>Cocina</li>
                <li>Gamer</li> */}
            </ul>
        </div>
        <div className={styles.menus}>

      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ width: 'fit-content', height: 'fit-content' }}
      >
        <CgProfile style={{ fontSize: '40px', color: 'white' }}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={'/Profile'} styles={{ color: 'white' }}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      
        <Button
          id="basic-button"
          sx={{ width: 'fit-content', height: 'fit-content' }}
          >
      <Badge badgeContent={quantity} color='primary'>
          <LuShoppingCart style={{ fontSize: '40px', color: 'white' }} onClick={toggleDrawer(true)}/>
      </Badge>
        </Button>
      
        <Drawer anchor={'right'} open={cart} onClose={toggleDrawer(false)}>
        <Card sx={{ maxWidth: 345, margin: '50px 20px', background: 'paper' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={mesa}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleOpen} sx={{ width: '10vh', height: 'auto', background:red[200], color:grey[800] }}>ver mas</Button>
            </CardActions>
        </Card>
        </Drawer>

    </div>
      </div>
    </div>
    </div>
  )
}

const red = {
  100 : '#DC5A6D',
  200: '#C93B50',
  300: '#BB1A32',
  400: '#B3001B'
}

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

export default Navbar
