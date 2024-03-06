import React from 'react'
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

const lista = {
    p: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
};


function Products() {
  return (
    <div>
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
          <ListItemButton>
            <ListItemText primary="Perfil" ></ListItemText>
          </ListItemButton>
        </ListItem>

        
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Usuarios" />
            </ListItemButton>
          </ListItem>
        

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Productos" />
            </ListItemButton>
          </ListItem>
        
    </List>
        
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    </Box>
    
    </div>
  )
}

export default Products
