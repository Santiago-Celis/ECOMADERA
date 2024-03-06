import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../database/db.js";

import { Roles } from "./Rol.js";
import { Actions } from "./Actions.js";

export class ActionRol extends Model{};

ActionRol.init({
    RolId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Roles',
            key: 'Id'
        }
    },
    AccionId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Actions',
            key: 'id'
        }
    }

},{sequelize, modelName:'AccionRol'})