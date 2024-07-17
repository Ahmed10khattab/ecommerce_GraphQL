const { gql } = require('apollo-server-express');

const authTypeDefs = gql`
  type AuthPayload {
    message: String!
    email: String!
    username: String!
    isAdmin: Boolean!
    token: String
    phone: String
    address: String
    deviceToken: String
    userImage: String
    gander: String
  }

  extend type Mutation {
    signup(
    username: String!,
    email: String!,
    password: String!,
    isAdmin: Boolean,
    phone: String,
    address: String,
    deviceToken: String,
    userImage: String,
    gander: String): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }
`;

module.exports = authTypeDefs;
