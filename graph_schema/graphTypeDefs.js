// // const { gql } = require('apollo-server-express');
// // const Product=require('../models/product')
// // const typeDefs = gql`
// //   type Product {
// //     id: ID!
// //     ProductName: String!
// //     ProductPrice: String!
// //     ProductDescription: String!
// //     ProductRate: String!
// //     createdAt: String!
// //     updatedAt: String!
// //   }

// //   type Query {
// //     getAllProducts: [Product]
// //   }

// //   type Mutation {
// //     addProduct(
// //       ProductName: String!,
// //       ProductPrice: String!,
// //       ProductDescription: String!,
// //       ProductRate: String!
// //     ): Product
// //   }

// //   type Subscription {
// //     productAdded: Product
// //   }
// // `;
// // module.exports=typeDefs;


// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   type Product {
//     id: ID!
//     ProductName: String!
//     ProductPrice: String!
//     ProductDescription: String!
//     ProductRate: String!
//     createdAt: String!
//     updatedAt: String!
//   }

//   type Query {
//     getAllProducts: [Product]
//   }

//   type Mutation {
//     addProduct(
//       ProductName: String!,
//       ProductPrice: String!,
//       ProductDescription: String!,
//       ProductRate: String!
//     ): Product
//      deleteAllProducts: String
//   }

//   type Subscription {
//     productAdded: Product
//   }
// `;

// module.exports = typeDefs;
// const { gql } = require('apollo-server-express');
// const{authTypeDefs}=require('./authTypesDevs');

// const typeDefs = gql`
// ${authTypeDefs}
//   type Product {
//     id: ID!
//     ProductName: String!
//     ProductPrice: String!
//     ProductDescription: String!
//     ProductRate: String!
//     createdAt: String!
//     updatedAt: String!
//   }

//   type Query {
//     getAllProducts: [Product]
//   }

//   type Mutation {
//     addProduct(
//       ProductName: String!,
//       ProductPrice: String!,
//       ProductDescription: String!,
//       ProductRate: String!
//     ): Product
//     deleteAllProducts: String
//   }

//   type Subscription {
//     productAdded: Product
//   }
// `;

// module.exports = typeDefs;









const { gql } = require('apollo-server-express');
const authTypeDefs = require('./authTypesDevs');
const uploadTypeDefs = require('./uploadTypesDev');
const productTypeDefs = require('./productTypeDevs');
const categoryTypeDefs=require('./categoryTypesDevs');

const typeDefs = gql`
  ${authTypeDefs}
  ${productTypeDefs}
  ${categoryTypeDefs}
 
  

`;

module.exports = typeDefs;














// const { createWriteStream } = require('fs');
// const path = require('path');

// const storeUpload = async ({ stream, filename }) => {
//   const uploadDir = path.join(__dirname, '../uploads');
//   if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir);
//   }
//   const filePath = path.join(uploadDir, filename);
//   return new Promise((resolve, reject) =>
//     stream
//       .pipe(createWriteStream(filePath))
//       .on('finish', () => resolve({ filename }))
//       .on('error', reject),
//   );
// };

// const processUpload = async (upload) => {
//   const { createReadStream, filename, mimetype } = await upload;
//   const stream = createReadStream();
//   const stored = await storeUpload({ stream, filename });
//   return stored;
// };

// const resolvers = {
//   Query: {
//     getAllProducts: () => {
//       // Implement logic to fetch all products
//     },
//   },
//   Mutation: {
//     addProduct: async (_, { productName, productPrice, productDescription, productRate }) => {
//       // Implement logic to add a product
//     },
//     deleteAllProducts: () => {
//       // Implement logic to delete all products
//     },
//     signup: async (_, { username, email, password, isAdmin }) => {
//       // Implement logic to sign up a user
//     },
//     login: async (_, { email, password }) => {
//       // Implement logic to log in a user
//     },
//     singleUpload: async (_, { file }) => {
//       const { filename } = await processUpload(file);
//       return {
//         filename,
//         mimetype: file.mimetype,
//         encoding: file.encoding,
//       };
//     },
//   },
//   Subscription: {
//     productAdded: {
//       // Implement logic for subscriptions if needed
//     },
//   },
// };

// module.exports = resolvers;
