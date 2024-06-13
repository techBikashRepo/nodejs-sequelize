import Product from "../models/product.js";

async function updateProd() {
  try {
    const updateProduct = await Product.update(
      { price: 62 },
      {
        where: {
          id: 3,
        },
      }
    );
    console.log("Product Updated", updateProduct);
  } catch (error) {
    console.log(error);
  }
}

export default updateProd;
