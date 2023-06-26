import { DataTypes } from "sequelize"
import { sequelize } from "../database/database"

export const Estado = sequelize.define("estado",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estado:{
        type: DataTypes.STRING,
    }
}, {
    timestamps: false
})