import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { TablePagination } from '@mui/material';
import { TableFooter, Button } from '@mui/material';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { usePDF } from 'react-to-pdf';
import { useRef } from 'react';
import style from './Lista.module.css'

import axios from 'axios';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Cafe } from '../../../Colors';
import toast from 'react-hot-toast';

export default function BasicTable() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Adjust as needed

  const tableRef = useRef(null);
  const {toPDF, targetRef} = usePDF({filename: 'productos.pdf'})

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0); // Reset page when rows per page changes
  };
  const endPoint = 'http://localhost:3001/products/products';

  const getData = async () => {
    try {
      const response = await axios.get(endPoint, {
        headers:
          { 'Authorization': 'Bearer ' + sessionStorage.getItem('token') }
      });

      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  const deleteProduct = (id) => {
    try {
      const response = axios.delete(`http://localhost:3001/products/deleteProduct/${id}`)
      toast.success("Se ha eliminado el producto correctamente")
      document.location.reload();
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className={style.form}>

      <DownloadTableExcel
        filename="users table"
        sheet="users"
        currentTableRef={tableRef.current}
      >

        <button> Export excel </button>

      </DownloadTableExcel>

      <button onClick={() => toPDF()} style={{ margin: '10px 0px' }} >Export PDF</button>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }} ref={targetRef}>
        <Table stickyHeader aria-label="sticky table" ref={tableRef}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell><AppRegistrationOutlinedIcon/><DeleteOutlineOutlinedIcon onClick={() => deleteProduct(row.id)} className={style.Borrar} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </div>
  );
}