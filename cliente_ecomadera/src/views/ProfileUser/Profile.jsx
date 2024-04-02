import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import TextField from '@mui/material/TextField';
import UserData from '../../components/Profile/User/UserData/UserData';
import UpdateUser from '../../components/Profile/User/UserData/UpdateUser';
import Directions from '../../components/Profile/User/Directions/Directions';
import AddDirection from '../../components/Profile/User/Directions/addDirection';

const lista = {
    p: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    borderColor: 'divider',
    backgroundColor: 'background.paper',
};

function Profile() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Navbar />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
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

                <Box sx={{ height: '100%', width: '100%' }}>
                    <Routes>
                        <Route path='/' element={<UserData />} />
                        <Route path='/Profile' element={<UserData />} />
                        <Route path='/edit' element={<UpdateUser />} />
                        <Route path='/directionUser' element={<Directions />} />
                        <Route path='/add' element={<AddDirection />} />
                    </Routes>
                </Box>
            </Box>
        </>
    );
}

export default Profile;