const { User, Thought } = require('../models');


const resolvers = {
    Query: {
        // parent as a placeholder parameter
      thoughts: async (parent, { username }) => {
        //   ternary operator to check if username exists
        const params = username ? { username } : {};
        return Thought.find().sort({ createdAt: -1 });
    }
  }
}
  module.exports = resolvers;