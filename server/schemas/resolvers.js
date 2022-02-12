const { User, Post } = require("../models");

//in resolvers you write the code for what the method is actually doing
//query must match typedef definition
const resolvers = {
  Query: {
    // parent as a placeholder parameter
    posts: async (parent, { username }) => {
      //   ternary operator to check if username exists
      const params = username ? { username } : {};
      return Post.find().sort({ createdAt: -1 });
    },
  },

  Mutation: {
    createPost: async (parent, args) => {
      const post = await Post.create(args);

      return post;
    },
  },
};
module.exports = resolvers;
