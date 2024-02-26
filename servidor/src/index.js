import { Sequelize } from 'sequelize';
import app from './app.js'
import { conexion } from './database/db.js';



app.listen(3001, function () { 
    console.log("Servidor corriendo en el PORT 3001");
    conexion();
});
