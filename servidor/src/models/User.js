import { Sequelize, Model, DataTypes } from "sequelize";
import { sequelize } from '../database/db.js'
import bcrypt from 'bcryptjs'



export class Address extends Model {

    /* static associate(models) {
        Address.belongsTo( models.User, {
            foreignKey: 'id',
            targetKey: 'AddressId'
        } )
    } */

    static associate(models) {
        Address.hasMany( models.User, {
            foreignKey: 'Id',
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


export class User extends Model {}
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
},{sequelize, modelName: 'user'});


const saltRounds = 10;
User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, saltRounds)
    .then(hash => {
        user.password = hash
    })
    .catch(err => {
        throw new Error(err);
    });
});





