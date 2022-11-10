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
            type: DataTypes.TEXT,
            allowNull: false,
        },
        promptimage: {
            type: DataTypes.STRING,
        },
        choice1: {
            type: DataTypes.TEXT,
        },
        choice1image: {
            type: DataTypes.STRING,
        },
        choice1text: {
            type: DataTypes.TEXT,
        },
        choice2: {
            type:DataTypes.TEXT,
        },
        choice2image: {
            type: DataTypes.STRING,
        },
        choice2text: {
            type: DataTypes.TEXT,
        },
        choice3: {
            type: DataTypes.TEXT,
        },
        choice3image: {
            type: DataTypes.STRING,
        },
        choice3text: {
            type: DataTypes.TEXT,
        },
        choice4: {
            type: DataTypes.TEXT,
        },
        choice4image: {
            type: DataTypes.STRING,
        },
        choice4text: {
            type: DataTypes.TEXT,
        },
        winningchoice: {
            type:DataTypes.TEXT,
        },
        continuetext: {
            type: DataTypes.STRING,
        },
        deathtext: {
            type: DataTypes.STRING,
        },  
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