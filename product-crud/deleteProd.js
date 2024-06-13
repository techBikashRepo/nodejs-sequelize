import Product from "../models/product.js";

async function deleteProd() {
  try {
    const removeProd = await Product.destroy({
      where: { name: "Product 5" },
    });
  } catch (error) {
    console.log(error);
  }
}

export default deleteProd;
