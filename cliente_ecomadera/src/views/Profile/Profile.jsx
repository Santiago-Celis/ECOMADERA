import React from 'react'
import Lista from '../../components/Profile/List/Lista'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import List from '@mui/material/List'

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
      
      <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            bgcolor: 'background.paper',
            color: 'text.secondary',
        }}>

    <List sx={lista} aria-label="mailbox folders">

    </List>


    <Routes>
        <Route path='list' element={<Lista/>} />
    </Routes>

      </Box>





    </div>
  )
}

export default Profile
