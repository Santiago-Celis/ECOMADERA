const mysql = require('mysql')

const conexion = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : process.env.DB_PASS,
    /* database : process.env.DB_DATABASE, */
})

conexion.connect( (error) => {
    if(error){
        console.log('el error de conexion es: '+error);
        return
    }
    console.log('!Conectado a la base de datos¡');
})

module.exports = conexion