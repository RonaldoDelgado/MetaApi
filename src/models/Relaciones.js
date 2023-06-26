import {Correo} from "./Correo.js"
import {Cuenta} from "./Cuenta.js"
import {Estado} from "./Estado.js"
import {Usuarios} from "./Usuarios.js"

Correo.hasMany(Usuarios,{
    foreignKey: "idcorreo",
    sourceKey: "id"
})

Usuarios.belongsTo(Correo, {
    foreignKey: "idcorreo",
    targetId: "id"
})