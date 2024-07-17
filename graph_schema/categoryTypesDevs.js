const { gql } = require('apollo-server-express');

const categoryTypeDefs = gql`
  type Category {
    id: ID!
    categoryNameAr: String!
    categoryNameEng: String!
    categoryImage: String!
    categoryIcon: String!
    categoryProductCount: Int!
    createdAt: String
    updatedAt: String
  }

  type Query {
    getAllCategories: [Category]
    getCategory(id: ID!): Category
  }

  type Mutation {
    addCategory(
      categoryNameAr: String!
      categoryNameEng: String!
      categoryImage: String!
      categoryIcon: String!
      categoryProductCount: Int!
    ): Category

    deleteAllCategories: String
    deleteCategoryById(id: ID!): String
    updateCategory(
      id: ID!
      categoryNameAr: String
      categoryNameEng: String
      categoryImage: String
      categoryIcon: String
      categoryProductCount: Int
    ): Category
  }

  type Subscription {
    categoryAdded: Category
  }
`;

module.exports = categoryTypeDefs;
