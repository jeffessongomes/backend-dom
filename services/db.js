const Sequelize = require("sequelize");

// Criando uma conexão com o banco de dados MySQL
export const db = new Sequelize("mydb", "myuser", "mypassword", {
  host: "localhost",
  dialect: "mysql",
});
