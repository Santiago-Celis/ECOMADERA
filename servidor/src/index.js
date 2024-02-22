import app from './app.js'
import { sequelize } from './database/db.js'


app.listen(3001, function () { 
    console.log("Servidor corriendo en el PORT 3001");

    sequelize.authenticate().then(() => {
        console.log("Conectado con la base de datos");
    }).catch(error => {
        console.log('Se ha producido el error:', error);
    })
});
// haga una peticion login
//mando error 
//eso veo en la terminal