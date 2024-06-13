import Product from "../models/product.js";

async function readProd() {
  try {
    const findProd = await Product.findAll({
      where: {
        category: "Electronics",
      },
    });
    console.log(JSON.stringify(findProd, null, 2));
  } catch (error) {
    console.log(error);
  }
}

export default readProd;
