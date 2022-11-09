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
            type: DataTypes.STRING,
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            type: DataTypes.STRING,
        },
        choice1: {
            type: DataTypes.STRING,
            type: DataTypes.STRING,
        },
        choice2: {
            type:DataTypes.STRING,
            type:DataTypes.STRING,
        },
        choice3: {
            type: DataTypes.STRING,
            type: DataTypes.STRING,
        },
        choice4: {
            type: DataTypes.STRING,
            type: DataTypes.STRING,
        },
        winningchoice: {
            type:DataTypes.INTEGER,
            type: DataTypes.INTEGER,
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