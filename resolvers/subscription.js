const { PubSub } = require('graphql-subscriptions');

const pubsub = new PubSub();
const PRODUCT_ADDED = 'PRODUCT_ADDED';

const subscriptionResolvers = {
  productAdded: {
    subscribe: () => pubsub.asyncIterator([PRODUCT_ADDED])
  }
};

module.exports = {
 subscriptionResolvers,
  pubsub
};
