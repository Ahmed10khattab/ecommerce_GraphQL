const queryResolvers = require('./query');
const mutationResolvers = require('./mutations');
const {subscriptionResolvers}  = require('./subscription');

const resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
  Subscription: subscriptionResolvers
};

module.exports = resolvers;


