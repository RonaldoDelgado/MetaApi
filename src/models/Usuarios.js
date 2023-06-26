import {  DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Usuarios = sequelize.define("usuario",{
    login: {
        type : DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    pasword: {
        type : DataTypes.STRING
    },
    MPD : {
        type: DataTypes.INTEGER
    },
    MPA : {
        type: DataTypes.INTEGER
    },
    DOC : {
        type: DataTypes.INTEGER
    },
    ganancia: {
        type: DataTypes.INTEGER
    },
    OA: {
        type: DataTypes.BOOLEAN,
    },
    razon: {
        type: DataTypes.STRING,
        allowNull: true
    },
    error: {
        type: DataTypes.JSON,
        allowNull: true
    }
}, {
    timestamps: false
}

)