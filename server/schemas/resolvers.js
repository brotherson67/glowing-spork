const { User, Thought } = require('../models');

//in resolvers you write the code for what the method is actually doing 
//query must match typedef definition 
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