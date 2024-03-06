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

export default function BasicTable() {
  const [data, setData] = useState([]);

  const endPoint = 'http://localhost:3001/products/products';

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
    { price: 'price', label: 'Precio' },
    { description: 'description', label: 'Descripcion' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table 
        sx={{
            minWidth: 650,
            
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
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center"> <AppRegistrationOutlinedIcon/> <DeleteOutlineOutlinedIcon/> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
