import Product from "../models/product.js";

async function createProd() {
  try {
    const newProd = await Product.create({
      name: "Product 1",
      price: 20,
      category: "Electronics",
    });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      console.log("Unique Constraint Error : ", err.errors[0].message);
      return;
    }
  }
}

export default createProd;
