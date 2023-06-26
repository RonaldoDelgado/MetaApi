import  {Sequelize}  from "sequelize";

export const sequelize = new Sequelize("MetaTreader","postgres", "adminPRDC", {
host: "localhost",
dialect: "postgres"
})