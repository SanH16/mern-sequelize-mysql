import { Sequelize } from "sequelize";

const db = new Sequelize("learn_mern_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
