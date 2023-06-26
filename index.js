import app from "./src/app"
import { sequelize } from "./src/database/database";
import "./src/models/Correo.js"
import "./src/models/Cuenta.js"
import "./src/models/Estado.js"
import "./src/models/Usuarios.js"
import "./src/models/Relaciones.js"

async function main() {
try {
    await sequelize.sync({force: true})
    console.log("conexion a la BD")
    app.listen(3000);
    console.log("Server iniciado en el puerto " + "3000");

} catch (error) {
    console.log("Error Base de Datos :", error)
}}

main()