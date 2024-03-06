import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../database/db.js";
/* import { Roles } from "./Rol.js"; */

export class Actions extends Model {};

Actions.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
},{sequelize, modelName:"actions"})