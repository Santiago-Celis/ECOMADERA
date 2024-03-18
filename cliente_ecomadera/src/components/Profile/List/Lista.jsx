import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { TablePagination } from '@mui/material';
import { TableFooter } from '@mui/material';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { useRef } from 'react';
import style from './Lista.module.css'

import axios from 'axios';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Cafe } from '../../../Colors';

export default function BasicTable() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Adjust as needed

  const tableRef = useRef(null);

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

  

  const columns = [
    { 
      id: 'name', 
      label: 'Nombre',
      minWidth: 150 
    },
    { 
      id: 'price', 
      label: 'Precio',
      align: 'left',
      minWidth: 150  
    },
    { 
      id: 'description',
      label: 'Descripcion',
      align: 'left', 
      minWidth: 150 
    },
    { 
      id: 'Acciones',
      label: 'Acciones',
      align: 'left', 
      minWidth: 150, 
    },
  ];

  return (
    <div className={style.form}>

      <DownloadTableExcel
        filename="users table"
        sheet="users"
        currentTableRef={tableRef.current}
      >

        <button> Export excel </button>

      </DownloadTableExcel>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage)
              .map((data) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={data.id}>
                    {columns.map((column) => {
                      const value = data[column.id];
                      return (
                        <TableCell key={column.id} /* align={column.align} */>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value }
                            
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={currentPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}