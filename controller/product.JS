const Product = require("../models/product");

const getAllProducts = async () => {
  return await Product.find();
};
const deleteAll = (_) => {
  return Product.deleteMany();
};

const addProduct = async ({
  productImage,
  productNameEng,
  productNameAr,
  category,
  stock,
  rate,
  numberOfReviews,

  colors,
  sizes,
  description,
  price,
  inFavorites,
}) => {
  const newProduct = new Product({
    productImage,
    productNameEng,
    productNameAr,
    category,
    stock,
    rate,
    
    numberOfReviews,
    colors,
    sizes,
    description,
    price,
    inFavorites,
  });
  return await newProduct.save();
};


const deleteProductById = async (id) => {
  return await Product.findByIdAndDelete(id);
};

const updateProduct = async (id, updateData) => {
  return await Product.findByIdAndUpdate(id, updateData, { new: true });
};

module.exports = {
  getAllProducts,
  addProduct,
  deleteAll,
  deleteProductById,
  updateProduct
};
