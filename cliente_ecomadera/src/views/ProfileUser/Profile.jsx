import React from 'react'
import Lista from '../../components/Profile/ProductList/Lista'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import UserList from '../../components/Profile/Admin/UserList'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import TextField from '@mui/material/TextField';
import UserData from '../../components/Profile/User/UserData/UserData'
import UpdateUser from '../../components/Profile/User/UserData/UpdateUser'
import Directions from '../../components/Profile/User/Directions/Directions'
import AddDirection from '../../components/Profile/User/Directions/addDirection'




const lista = {
    p: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
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
          <Link to={'Profile'}>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderBottom: '2px solid #906040' }}>
                <ListItemText primary="Perfil" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={'directionUser'}>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderBottom: '2px solid #906040' }}>
                <ListItemText primary="Direcciones" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={'add'}>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderBottom: '2px solid #906040' }}>
                <ListItemText primary="Añadir Dirección" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        


    <Routes>
        <Route path='/' element={<UserData/>}/>  
        <Route path='/Profile' element={<UserData/>}/>
        <Route path='/edit' element={<UpdateUser/>}/>
        <Route path='/directionUser' element={<Directions/>}/>
        <Route path='/add' element={<AddDirection/>}/>
    </Routes>

      </Box>



        <Footer/>

    </div>
  )
}

export default Profile
