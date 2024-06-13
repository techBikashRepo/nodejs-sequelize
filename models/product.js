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
        notNull: {
          msg: "Product name is required",
        },
        len: {
          args: [3, 25],
          msg: "Name length should be between 3 to 25 characters",
        },
      },
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Price is required",
        },
        validatePrice(value) {
          if (value <= 0 || value % 5 !== 0) {
            throw new Error("Price must be non-zero, positive multiple of 5");
          }
        },
        max: {
          args: 100000,
          msg: "Price should be equal to or less than 1000",
        },
      },
    },
    category: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

export default Product;
