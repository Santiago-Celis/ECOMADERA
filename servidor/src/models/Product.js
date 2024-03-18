import { Model, DataTypes } from "sequelize";
import { sequelize } from '../database/db.js';
import multer from 'multer'

export class Category extends Model {}
Category.init({
    id:{
        type: DataTypes.INTEGER, 
        allowNull: false,  
        primaryKey: true,  
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        unique:true,
        allowNull:false
    },
},{sequelize, modelName: 'category'})


export class Product extends Model {

    static associate(models) {
        Product.hasMany(models.Category, {
            foreignKey: categoryId 
        })
    }

}
Product.init({
    id:{
        type: DataTypes.INTEGER, 
        allowNull: false,  
        primaryKey: true,  
        autoIncrement: true
    },

    name:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    height:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    width:{
        type:DataTypes.FLOAT,
        allowNull:true
    },
    depth:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    categoryId:{
        type: DataTypes.INTEGER,
        references :{
            model:"Category",
            key:"id"
    }},
    price:{
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    imagenURL: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{sequelize, modelName: 'product'})