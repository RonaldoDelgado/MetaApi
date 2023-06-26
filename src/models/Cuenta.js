import { DataTypes } from "sequelize"
import { sequelize } from "../database/database"

export const Cuenta = sequelize.define("cuenta", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cuenta: {
        type: DataTypes.STRING,
    }
},
{
    timestamps: false
})