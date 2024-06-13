import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: {
        msg: "Email is required",
      },
      notEmpty: {
        msg: "Email cannot be empty",
      },
      isLowercase: {
        msg: "Please enter email in lowecase",
      },
      isEmail: {
        args: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        msg: "Must be a valid email address",
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Password is required",
      },
      notEmpty: {
        msg: "Password cannot be empty",
      },
      is: {
        args: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        msg: "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character",
      },
    },
  },
});

export default User;
