import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";


export class ChatModel extends Model { }

ChatModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user1: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user2: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'conversacion',
    timestamps: false,
})
