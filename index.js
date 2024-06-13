import { sequelize } from "./db.js";
import Product from "./models/product.js";
import createProd from "./product-crud/createProd.js";
import deleteProd from "./product-crud/deleteProd.js";
import readProd from "./product-crud/readProd.js";
import updateProduct from "./product-crud/updateProd.js";

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection Established");
    await Product.sync();
    await createProd();
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
