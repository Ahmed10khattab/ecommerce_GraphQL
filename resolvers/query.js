const ProductsController = require('../controller/product.JS');

const queryResolvers = {
  getAllProducts: async () => {
    return await ProductsController.getAllProducts();
  }
};

module.exports = queryResolvers;