import React, { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Modal as BaseModal } from '@mui/base/Modal';
import { styled, css } from '@mui/system';
import  PropTypes  from 'prop-types';
import clsx from 'clsx';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

import mesa from '../../assets/mesa.jpg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { CartContext } from '../../context/ShoppingCartContext';
import { Azul } from '../../Colors';





function Products() {

  

  const endPoint = 'http://localhost:3001/products/products';

  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);
  
  const [filter, setFilter] = useState('');
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);



  const handleFilter = async () => {
    const { filtro } = await axios.get('/category/categories', {
      params:
      { filter },
    });
    
    if (filtro) {
      setData(filtro);
    } else {
      getAllProducts();
    };
  };

  const getData = async () => {
    try {
      const response = await axios.get(endPoint, {
        headers:
        {'Authorization': 'Bearer '+ sessionStorage.getItem('token')}
      });
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  useEffect(() => {
    getData();
    localStorage.getItem("cart") === null ? setCart([]) : setCart(JSON.parse(localStorage.getItem("cart")))
  }, [])


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  }, [cart])

  
  
  

  const addToCart = (product) => {
    setCart((currItems) => {
      
      const isItemsFound = currItems.find((producto) => producto.id === product.id)

      if (isItemsFound) {
        return currItems.map((producto) => {

          if (producto.id === product.id){
            return { ...producto, quantity: parseInt( producto.quantity + 1 )}
          }
          return producto;
        });
      } else {
        return [...currItems, { quantity: 1, ...product }]
      }
    });
    console.log('Agregando Producto');
  };

  

  const getQuantityById = (id) => {
    return cart.find((product) => product.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(product.id);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  return (
    <>

      <Navbar/>



      <Box
        sx={{
            display: 'flex',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            bgcolor: 'background.paper',
            color: 'text.secondary',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: 'fit-content',
            gap: 10,
            flexDirection: 'column'
        }}>

<Box
        sx={{
            display: 'flex',
            width: '50%',
            borderRadius: 2,
            bgcolor: 'background.paper',
            color: 'text.secondary',
            justifyContent: 'space-evenly',
            alignItems: '',
            height: 'fit-content',
            flexWrap:'wrap',
            flexDirection:'row'
        }}>

        <Typography variant="h1" color="initial"></Typography>
        <Typography variant="h1" color="initial"></Typography>
        <Typography variant="h1" color="initial"></Typography>
        <Typography variant="h1" color="initial"></Typography>

    </Box>
        
    <Box
        sx={{
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            borderRadius: 2,
            color: 'text.secondary',
            height: '100%',
            padding: '0px 0em',
            width: '100%',
        }} >

      <Grid container spacing={{ xs: 2, md: -5, }} columns={{ xs: 5, sm: 4 }} sx={{ gap: '5em' }}>
        {data.map((product, idx) => (
          <Grid  key={product.id}>
            <Card key={idx} sx={{ width:'300px',  maxWidth:345, margin: '4em 20px', background: 'paper', height: 'fit-content', display: 'inline-block' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`http://localhost:3001/image/${product.imagenURL}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="body1" color="grey" component="div">
          {product.description}
        </Typography>
        <Typography variant="h5" color={Azul[500]}>
          Precio: ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => addToCart(product)} sx={{ width: '100%', height: 'auto', background:Azul[500], color:grey[800] }}>Añadir al carrito</Button>
      </CardActions>
    </Card>
          </Grid>
        ))}
      </Grid>


      </Box>


    </Box>
    
          <Footer/>

    </>
  )
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'base-Backdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

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

const red = {
  100 : '#DC5A6D',
  200: '#C93B50',
  300: '#BB1A32',
  400: '#B3001B'
}

const TriggerButton = styled('button')(
  ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }

    &:active {
      background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
  `,
);

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled('div')(
  ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `,
);

export default Products
