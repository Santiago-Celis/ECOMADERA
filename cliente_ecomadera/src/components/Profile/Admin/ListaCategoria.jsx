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
                <TableCell>{row.name}</TableCell>
                <TableCell><AppRegistrationOutlinedIcon/><DeleteOutlineOutlinedIcon/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </div>
    
  )
}

export default ListaCategoria
