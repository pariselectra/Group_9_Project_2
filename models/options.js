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
            optiontext: {
            type: DataTypes.STRING,
            allowNull: false,
        },
            winningchoice: {
            type:DataTypes.INTEGER
        },
            prompt_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'prompt',
            key: 'id',
              
        }
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