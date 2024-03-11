import React from 'react'
import Lista from '../../components/Profile/List/Lista'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import UserList from '../../components/Profile/User/UserList'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


const lista = {
    p: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
};


function Profile() {
  return (
    <div>
      
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
          <ListItemButton>
            <ListItemText primary="Perfil" ></ListItemText>
          </ListItemButton>
        </ListItem>

        <Link to={'users'}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Usuarios" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={'list'}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Productos" />
            </ListItemButton>
          </ListItem>
        </Link>
    </List>


    <Routes>
        <Route path='' element={<Lista/>}/>  
    </Routes>

      </Box>



        <Footer/>

    </div>
  )
}

export default Profile
