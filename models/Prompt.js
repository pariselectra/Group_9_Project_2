const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Prompt extends Model {}
Prompt.init (
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
            type: DataType.STRING,
        },
        choice2: {
            type:DataType.STRING,
        },
        choice3: {
            type: DataType.STRING,
        },
        choice4: {
            type: DataType.STRING,
        },
        winningchoice: {
            type:DataType.INTEGER
        }  
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'prompt',
    }
);

module.exports = Prompt;