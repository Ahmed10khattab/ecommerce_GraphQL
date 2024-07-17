const { gql } = require('apollo-server-express');

const UploadtypeDefs = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Query {
    uploads: [File]
  }

  type Mutation {
    singleUpload(file: Upload!): File!
  }
`;

module.exports = UploadtypeDefs;
