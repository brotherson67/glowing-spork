const { User, Thought } = require('../models');

//in resolvers you write the code for what the method is actually doing 
//query must match typedef definition 
const resolvers = {
    Query: {
      thoughts: async () => {
        return Thought.find().sort({ createdAt: -1 });
    }
  }
}
  module.exports = resolvers;