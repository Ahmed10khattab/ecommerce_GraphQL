// const { gql } = require('apollo-server-express');

// const productTypeDefs = gql`
//   type Product {
//     id: ID!
//     ProductName: String!
//     ProductPrice: String!
//     ProductDescription: String!
//     ProductRate: String!
//     createdAt: String
//     updatedAt: String
//   }

//   type Query {
//     getAllProducts: [Product]
//     getProduct(id: ID!): Product
//   }

//   type Mutation {
//     deleteAllProducts: String
//     addProduct(
//       ProductName: String!
//       ProductPrice: String!
//       ProductDescription: String!
//       ProductRate: String!
//     ): Product
//   }
//      type Subscription {
//     productAdded: Product
//   }
// `;

// module.exports = productTypeDefs;



const { gql } = require('apollo-server-express');

const productTypeDefs = gql`
  type Product {
    id: ID!
    productImage: String!
    productNameEng: String!
    productNameAr: String!
    category: ID!
    stock: Int!
    rate: Float!
    numberOfReviews: Int!
    colors: [String!]!
    sizes: [String!]!
    description: String!
    price: Float!
    inFavorites: Boolean
    createdAt: String
    updatedAt: String
  }

  type Query {
    getAllProducts: [Product]
    getProduct(id: ID!): Product
  }

  type Mutation {
    deleteProductById(id: ID!): String
    updateProduct(
      id: ID!
    productImage: String!
    productNameEng: String!
    productNameAr: String!
    category: ID!
    stock: Int!
    rate: Float!
    numberOfReviews: Int!
    colors: [String!]!
    sizes: [String!]!
    description: String!
    price: Float!
    inFavorites: Boolean
    createdAt: String
    updatedAt: String
    ): Product
    addProduct(
      productImage: String!
      productNameEng: String!
      productNameAr: String!
      category: ID!
      stock: Int!
      rate: Float!
       numberOfReviews: Int!
      colors: [String!]!
      sizes: [String!]!
      description: String!
      price: Float!
      inFavorites: Boolean
    ): Product

    deleteAllProducts: String
  }

  type Subscription {
    productAdded: Product
  }
`;

module.exports = productTypeDefs;
