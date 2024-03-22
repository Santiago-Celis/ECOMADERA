import { Sequelize, Model, DataTypes } from "sequelize";
import { sequelize } from '../database/db.js'
import bcrypt from 'bcryptjs'
import { Roles } from "./Rol.js";


export class Address extends Model {

    /* static associate(models) {
        Address.belongsTo( models.User, {
            foreignKey: 'id',
            targetKey: 'AddressId'
        } )
    } */

    static associate(models) {
        Address.hasMany( models.User, {
            foreignKey: 'id',
            targetKey: 'UserId'
        })
    }

}
Address.init({
    id: {  
        type: DataTypes.INTEGER,  
        allowNull: false,  
        autoIncrement: true,   
        primaryKey: true  
      },
    Department: DataTypes.STRING,
    City: DataTypes.STRING,
    Direccion: DataTypes.STRING,
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
    } ,{
        sequelize,
        tableName:'Address',
        timestamps:false,
        
})

export class CreditCard extends Model {

    static associate(models) {
        CreditCard.hasMany( models.User, {
            foreignKey: 'id',
            targetKey: 'UserId'
        })
    }

}
CreditCard.init ({
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    Titular: {
        type: DataTypes.STRING
    },
    CardNumber:{
        type:DataTypes.INTEGER(12),
        unique:true,
        allowNull:false
    },
    CVV: {
        type:DataTypes.INTEGER(3),
        allowNull:false
    },
    ExpirationDate:DataTypes.STRING,
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
}, {sequelize, tableName:"creditcard"})


export class User extends Model {
    
    static associate(models) {
        User.hasOne(models.Roles, {
            foreignKey: 'Id',
            targetKey: 'rol'
        })
    }

}
User.init({
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    name:  DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.INTEGER(10),
    rol: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        references: {
            model: 'roles',
            key: 'Id'
        }
    }
},{sequelize, modelName: 'user'});


/* const saltRounds = 8;
User.beforeCreate((user, options) => {
    return bcryptjs.hash(user.password, saltRounds);
}); */





