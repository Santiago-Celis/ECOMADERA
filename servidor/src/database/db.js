import { Sequelize } from "sequelize";

const globalOptions = {
    define: {
        timestamps: true,
        underscored: true,
        freezeTableName: true
    },
}

export const sequelize = new Sequelize(
    "ecomadera",
    "root",
    "root", {
        host: "localhost",
        dialect: "mysql",
        port: 3308,
        ...globalOptions,
    });

    /* module.exports = sequelize; */

export const conexion = async  () =>{

    try {
        await sequelize.sync({ force: false }).then(() => {
            console.log("la base de datos ha sido iniciada");
        });
    } catch (error) {
        console.log(`Ha ocurrido un error ${error}`);
    }

}



