const Category = require("../models/category");

const getAllCategories = async () => {
  return await Category.find();
};

const deleteAllCategories = async () => {
  return await Category.deleteMany();
};

const addCategory = async ({
  categoryNameAr,
  categoryNameEng,
  categoryImage,
  categoryIcon,
  categoryProductCount,
}) => {
  const newCategory = new Category({
    categoryNameAr,
    categoryNameEng,
    categoryImage,
    categoryIcon,
    categoryProductCount,
  });
  return await newCategory.save();
};

const deleteCategoryById = async (id) => {
  return await Category.findByIdAndDelete(id);
};

const updateCategory = async (id, updateData) => {
  return await Category.findByIdAndUpdate(id, updateData, { new: true });
};

module.exports = {
  getAllCategories,
  addCategory,
  deleteAllCategories,
  deleteCategoryById,
  updateCategory,
};
