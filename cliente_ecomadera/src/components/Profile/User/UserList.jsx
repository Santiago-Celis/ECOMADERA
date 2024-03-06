import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function UserList() {
  const [data, setData] = useState([]);

  const endPoint = 'http://localhost:3001/api/users';

  const getData = async () => {
    try {
      const response = await axios.get(endPoint);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    { id: 'id', label: 'ID', minWidth: 10 },
    { name: 'name', label: 'Nombre' },
    { email: 'email', label: 'Correo' },
    { phone: 'phone', label: 'Telefono' },
    { rol: 'rol', label: 'RolId' },
  ];

  return (
    <TableContainer component={Paper} sx={{
      maxWidth: 1050,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Table 
        sx={{
            maxWidth: 1050,
            
        }}
        aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} align='center'>{column.label}</TableCell>
              ))}
              <TableCell align='center'>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" align='center' className=''>{row.id}</TableCell>
              <TableCell align="center" >{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.rol}</TableCell>
              <TableCell align="center"> <AppRegistrationOutlinedIcon /> <DeleteOutlineOutlinedIcon/> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
