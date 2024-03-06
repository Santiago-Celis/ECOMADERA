import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../database/db.js";
/* import { User } from "./User"; */
import { Actions } from "./Actions.js";


export class Roles extends Model {}

Roles.init({
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
    },

},{sequelize, modelName: 'roles'});

Roles.belongsToMany(Actions, {
    through: "ActionsRol",
    foreignKey: "rolId",
    otherKey: "actionId"
})