import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class UserModel extends Model {}
UserModel.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    pass: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    correo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    foto: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize: DatabaseConfig,
    tableName: "usuarios",
    timestamps: false,
  }
);
