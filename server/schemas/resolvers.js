const { User, Thought } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

//in resolvers you write the code for what the method is actually doing 
//query must match typedef definition 
const resolvers = {
    Query: {
      me: async (parent, args, context) => {
       if(context.user) {
        const userData = await User.findOne({})
        .select('-__v -password')
        .populate('thoughts')
        .populate('friends');

        return userData;
       }
       throw new AuthenticationError("You're not logged in!");
      },
      users: async () => {
        return User.find()
          .select('-__v -password')
          .populate('thoughts')
          .populate('friends');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username })
          .select('-__v -password')
          .populate('friends')
          .populate('thoughts');
      },
        // parent as a placeholder parameter
      thoughts: async (parent, { username }) => {
        //   ternary operator to check if username exists
        const params = username ? { username } : {};
        return Thought.find().sort({ createdAt: -1 });
    },
     thought: async (parent, { _id }) => {
      return Thought.findOne({_id});
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return {token, user};
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if(!user) {
        throw new AuthenticationError('Wrong credentials!')
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Wrong credentials!');
      }
      const token = signToken(user);
      return {token, user};
    },
    addThought: async (parent, args, context) => {
      if (context.user) {
        const thought = await Thought.create({...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { thoughts: thought._id} },
          { new: true }
        );

        return thought;
      }
      throw new AuthenticationError('You need to login!')
    },
    addReaction: async (parent, { thoughtId, reactionBody }, context) => {
      if (context.user) {
        const updatedThought = await Thought.findOneAndUpdate(
          { _id: thoughtId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );
    
        return updatedThought;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    addFriends: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');
    
        return updatedUser;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};
  module.exports = resolvers;