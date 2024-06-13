import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("test", "root", "admin", {
  dialect: "mysql",
  host: "localhost",
});
