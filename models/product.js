import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Name already taken",
      },
      validate: {
        notEmpty: {
          msg: "Please provide a name",
        },
        notNull: "Product name is required",
      },
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    category: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

export default Product;
