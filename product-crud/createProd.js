import Product from "../models/product.js";

async function createProd() {
  try {
    const newProd = await Product.create({
      name: "Product 2",
      price: 12,
      category: "Electronics",
    });
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      err.errors.forEach((errItem) => {
        console.log("Error: ", errItem.message);
        console.log("Got Value : ", errItem.value);
      });
    }
  }
}

export default createProd;
