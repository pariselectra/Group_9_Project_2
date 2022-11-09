const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Message extends Model {}
Message.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        message_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message_text: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'message',
    }
);

module.exports = Message;