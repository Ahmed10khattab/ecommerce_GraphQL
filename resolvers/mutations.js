const ProductController = require("../controller/product.JS");
const { pubsub } = require("./subscription"); // Assuming pubsub is exported from subscriptions.js
const PRODUCT_ADDED = "PRODUCT_ADDED";
const AuthController = require("../controller/Auth");
const Category = require("../controller/category");

const mutationResolvers = {
 
//Category

  addCategory: async (
      _,
      {
         categoryNameAr,
      categoryNameEng,
      categoryImage,
      categoryIcon,
      categoryProductCount,
      }
    ) => {
      const savedProduct = await Category.addCategory({
         categoryNameAr,
      categoryNameEng,
      categoryImage,
      categoryIcon,
      categoryProductCount,
      });
      //pubsub.publish(PRODUCT_ADDED, { productAdded: savedProduct });
      return savedProduct;
    },

    deleteCategoryById: async (_,{id}) => {
      await Category.deleteCategoryById(id);
      return " category is deleted successfully";
    },
  
    deleteAllCategories:async (_, { id }) => {
      await Category.deleteAllCategories();
      return " all categories are deleted successfully";
    },
    
    updateCategory: (_, { id, ...updateData }) => Category.updateCategory(id, updateData),


//Product

  addProduct: async (
    _,
    {
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
    }
  ) => {
    const savedProduct = await ProductController.addProduct({
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
    pubsub.publish(PRODUCT_ADDED, { productAdded: savedProduct });
    return savedProduct;
  },
  deleteProductById: async (_,{id}) => {
    await ProductController.deleteProductById(id);
    return " product is deleted successfully";
  },
  updateProduct: (_, { id, ...updateData }) => ProductController.updateProduct(id, updateData),


  deleteAllProducts: async () => {
    await ProductController.deleteAll();
    return "All products deleted successfully";
  },

  //Auth

  signup: async (
    _,
    {
      username,
      email,
      password,
      isAdmin,
      phone,
      address,
      deviceToken,
      userImage,
      gander,
    }
  ) =>
    AuthController.signup(_, {
      username,
      email,
      password,
      isAdmin,
      phone,
      address,
      deviceToken,
      userImage,
      gander,
    }),

  login: async (_, { email, password }) =>
    AuthController.login(_, { email, password }),
};

module.exports = mutationResolvers;
