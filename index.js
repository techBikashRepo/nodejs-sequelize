import { sequelize } from "./db.js";
import Product from "./models/product.js";
import User from "./models/user.js";
import createProd from "./product-crud/createProd.js";
import deleteProd from "./product-crud/deleteProd.js";
import readProd from "./product-crud/readProd.js";
import updateProduct from "./product-crud/updateProd.js";

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection Established");
    await User.sync();
    console.log("Table Created");
    const newUser = await User.create({
      email: "admin@gmail.com",
      password: "Admin@123",
    });
    console.log(("newUser-->", JSON.stringify(newUser)));
    // await Product.sync();
    // await createProd();
    //await readProd();
    //await updateProduct();
    //await deleteProd();
  } catch (error) {
    console.log(error);
  } finally {
    await sequelize.close();
  }
}

main();
