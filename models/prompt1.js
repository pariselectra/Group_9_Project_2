const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class prompt1 extends Model {}
prompt1.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        prompttext: {
            type: DataType.STRING,
            allowNull: false,
        },
        image: {
            type: DataType.COMPOSITE,
        },
        choice1: {
            value: 
            type:
            
        }
    }
)