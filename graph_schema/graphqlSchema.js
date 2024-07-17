const { makeExecutableSchema } = require('@graphql-tools/schema');
const typeDefs = require('./graphTypeDefs');
const resolvers = require('../resolvers/resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
