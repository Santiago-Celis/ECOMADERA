import React, { useContext, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Button, Paper } from '@mui/material'
import {Grid} from '@mui/material'
import { Card } from '@mui/material'
import {CardMedia} from '@mui/material'
import {CardContent} from '@mui/material'
import {Typography} from '@mui/material'
import {CardActions} from '@mui/material'
import {Box} from '@mui/material'
import { useEffect } from 'react'

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { Blanco, Cafe, Gris } from '../../Colors'


function cart() {

  const [redirectUrl, setRedirectUrl] = useState();

  const [ preferenceId, setPreferenceId ] = useState(null)
  initMercadoPago('TEST-81c76e7f-b45f-43e6-b753-937b96286f50', {
    locale: "es-CO"
  });
  

  const createPreference = async () => {
    try {
      const response = await axios.post('http://localhost:3001/payment/create_Order', {
        cart,
        totalPrice
      })

      setPreferenceId(response.data.preferenceId);

      window.location.href = response.init_point
    } catch (error) {
      console.log(error);
    }
  }


  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  const removeItem = (id) => {
    setCart((currItems) => {

      if(currItems.find((product)=> product.id === id)?.quantity === 1){
        
        return currItems.filter((product) => product.id !== id);
        
      } else {
        
        
        return currItems.map((producto) => {
          if(producto.id === id) {
            return {...producto, quantity: producto.quantity -1};

          } else {
            return producto;
          }
        })
      }
    })
  };

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0)

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price
  
  }, 0);

  console.log(cart);

  return (
    <div>

      <Navbar/>


      <Typography sx={{ textAlign: 'center', fontSize: '2em', marginTop: '2em' }} variant='body2' >PRODUCTOS EN TU CARRITO</Typography>

      <Box
        sx={{
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            borderRadius: 2,
            color: 'text.secondary',
            height: '100em',
            padding: '0px 0em',
            width: '100%',
        }} >

      <Grid container spacing={{ xs: -5, md: -20 }} columns={{ xs: 4, sm: 8, md: 12 }} >
      {cart.map((product, i) => (
        <Card key={i} sx={{ width:'300px', maxWidth:345, margin: '4em 20px', background: 'paper', height: 'fit-content', display: 'inline-block' }}>
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
              <Typography gutterBottom variant="body2" color={Gris[500]} component="div">
                {product.description}
              </Typography>
              <Typography variant="h5" color="text.primary">
                Precio: ${product.price}
              </Typography>
              <Typography variant="body2" color="text.primary">
                Cantidad: {product.quantity}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => removeItem(product.id)} sx={{ width: 'fit-content', height: 'auto', background:Cafe[500], color:grey[800] }}>Eliminar del carrito</Button>
            </CardActions>
          </Card>
      ))}
      </Grid>


        <Paper sx={{ width:'30em', height: 'fit-content', margin: '0 3em', padding: '30px', display: 'flex', flexDirection:'column', gap:2 }} elevation={5}>
          <Typography variant='body2' color="GrayText">
            Cantidad de productos:  {quantity}
          </Typography>
          <Typography variant='h5' color="GrayText">
            Productos a comprar:
          </Typography>
          {cart.map((product) => (
            <Typography variant='h7' color="GrayText" sx={{ margin:0 }}>
              {product.quantity} | {product.name}: {product.price}
            </Typography>
          ))}
          <Typography variant='h5' color="brown">
            Precio Total: $ {totalPrice}
          </Typography>
          
          
          <Wallet initialization={{ preferenceId: '<PREFERENCEID>' }}/>
        </Paper>




      </Box>

    </div>
  )
}

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

export default cart
