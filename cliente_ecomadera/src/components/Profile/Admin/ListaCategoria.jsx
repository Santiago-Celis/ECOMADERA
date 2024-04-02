import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { Paper } from '@mui/material';
import {TableContainer} from '@mui/material';
import { useRef } from 'react';
import {TableBody} from '@mui/material';
import { Table } from '@mui/material';
import {TableHead} from '@mui/material';
import {TableRow} from '@mui/material';
import {TableCell} from '@mui/material';
import { usePDF } from 'react-to-pdf';


import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import style from '../ProductList/Lista.module.css'

function ListaCategoria() {
    const [category, setCategory] = useState([]);

    const url = 'http://localhost:3001/category/categories';

    const getCategory = async () => {
        try {
            const res = await axios.get(url)
            setCategory(res.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCategory();
    }, [])

    console.log(category);

    const deleteCategoria = (id) => {
      try {
        const response = axios.delete(`http://localhost:3001/category/deleteCategory/${id}`, {
          headers:
                    { 'Authorization': 'Bearer ' + sessionStorage.getItem('token') } 
        });
        toast.success('La categoria se ha eliminado con exito')
        document.location.reload();
        

      } catch (error) {
        console.log(error);
      }
    }


    const tableRef = useRef(null);
    const {toPDF, targetRef} = usePDF({filename: 'Categorias.pdf'})
  return (
    <div>
      <DownloadTableExcel
        filename="categories"
        sheet="categories"
        currentTableRef={tableRef.current}
      >

        <button> Export excel </button>

      </DownloadTableExcel>

      <button onClick={() => toPDF()} style={{ margin: '10px 0px' }} >Export PDF</button>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }} ref={targetRef} >
        <Table stickyHeader aria-label="sticky table" ref={tableRef}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell><AppRegistrationOutlinedIcon/><DeleteOutlineOutlinedIcon onClick={() => deleteCategoria(row.id)} className={style.Borrar} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>

    <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />

    </div>
    
  )
}

export default ListaCategoria
