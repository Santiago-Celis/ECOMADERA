import { DataTypes, Model } from "sequelize";

export class Cart extends Model {}
Cart.init({
    name: { type: DataTypes.STRING, allowNull: false },
    imgurl: {type: DataTypes.STRING, allowNull: false},
    amount: { type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false}
},{
    sequelize,
    tableName:'Cart',
    timestamps:false,
    
})

