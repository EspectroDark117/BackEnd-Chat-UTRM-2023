import { Model, DataTypes } from "sequelize";
import {DatabaseConfig  } from  "../config/database.js";

export class MessagesModel extends Model {  }

MessagesModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id_usuario_env: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_conversacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize: DatabaseConfig,
    tableName: 'mensajes',
    timestamps: false,
  })