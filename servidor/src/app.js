const express = require('express');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const  app = express();

const conexion = require('./database/db')


app.get( '/', (req, res) => {
    conexion()
    res.send('Hello World!')
})

//seteo de cookies
app.use(cookieParser)



app.listen(3000, ()=>{
    console.log('SERVIDOR CORRIENDO EN http://localhost:3000');
})

