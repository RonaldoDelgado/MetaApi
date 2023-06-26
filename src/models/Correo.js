import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";


export const Correo = sequelize.define("correo", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    correo: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
})
