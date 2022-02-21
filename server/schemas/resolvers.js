// const { User, Thought } = require('../models');
// const { AuthenticationError } = require('apollo-server-express');
// const { signToken } = require('../utils/auth');



// //in resolvers you write the code for what the method is actually doing
// //query must match typedef definition
// const resolvers = {
//   Query: {
//     // parent: hold the reference to the resolver that executed the nested resolver function
//     // args: object of all of the values passed into a query or mutation request as parameters. we destructure the username parameter out to be used.
//     thoughts: async (parent, { username }) => {
//       const params = username ? { username } : {};
//       return Thought.find(params).sort({ createdAt: -1 });
//     },
//     // place this inside of the `Query` nested object right after `thoughts` 
//     thought: async (parent, { _id }) => {
//       return Thought.findOne({ _id });
//     },
//     // get all users
//     users: async () => {
//       return User.find()
//         .select('-__v -password')
//         .populate('friends')
//         .populate('thoughts');
//     },
//     // get a user by username
//     user: async (parent, { username }) => {
//       return User.findOne({ username })
//         .select('-__v -password')
//         .populate('friends')
//         .populate('thoughts');
//     },
//     me: async (parent, args, context) => {
//       if (context.user) {
//         const userData = await User.findOne({ _id: context.user._id })
//           .select('-__v -password')
//           .populate('thoughts')
//           .populate('friends');

//         return userData;
//       }

//       throw new AuthenticationError('Not logged in');
//     },
    
//     users: async ({ sendUsername }) => {
//       return User.find({ username: sendUsername })
//     },
//   },
//   Mutation: {
//     addUser: async (parent, args) => {
//       const user = await User.create(args);
//       const token = signToken(user);

//       return { token, user };
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError('Wrong credentials!')
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Wrong credentials!');
//       }
//       const token = signToken(user);
//       return { token, user };
//     },
//     addThought: async (parent, args, context) => {
//       if (context.user) {
//         const thought = await Thought.create({ ...args, username: context.user.username });

//         await User.findByIdAndUpdate(
//           { _id: context.user._id },
//           { $push: { thoughts: thought._id } },
//           { new: true }
//         );

//         return thought;
//       }
//       throw new AuthenticationError('You need to login!')
//     },
//     addReaction: async (parent, { thoughtId, reactionBody }, context) => {
//       if (context.user) {
//         const updatedThought = await Thought.findOneAndUpdate(
//           { _id: thoughtId },
//           { $push: { reactions: { reactionBody, username: context.user.username } } },
//           { new: true, runValidators: true }
//         );

//         return updatedThought;
//       }

//       throw new AuthenticationError('You need to be logged in!');
//     },
//     addFriend: async (parent, { friendId }, context) => {
//       if (context.user) {
//         const updatedUser = await User.findOneAndUpdate(
//           { _id: context.user._id },
//           { $addToSet: { friends: friendId } },
//           { new: true }
//         ).populate('friends');

//         return updatedUser;
//       }

//       throw new AuthenticationError('You need to be logged in!');
//     },
      
//   }
// };
// module.exports = resolvers;

const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('thoughts')
          .populate('friends');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
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
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addThought: async (parent, args, context) => {
      if (context.user) {
        const thought = await Thought.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { thoughts: thought._id } },
          { new: true }
        );

        return thought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    removeThought: async (parent, args, context) => {
      if (context.user) {
        const thought = await Thought.deleteOne({ ...args, username: context.user.username });

        await User.findByIdAndDelete(
          {_id: context.user._id },
          { $pull: { thoughts: thought._id} },
          { new: true }
        );

        return thought;
      }
    },
    updateThought: async (parent, args, context) => {
      if (context.user) {
        const thought = await Thought.updateOne({...args, username:context.user.username });

        await User.findByIdAndUpdate(
          {_id: context.user._id },
          { $set: { thoughts: thought._id} },
          { new: true }
        );

        return thought;
      }
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
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    removeFriend: async(parent, {friendId}, context) => {
      if(context.user) {
      const newUser = await User.findOneAndDelete(
        {_id: context.user._id},
        { $pull: {friends: friendId } },
        {new: true }
      ).populate('friends');

        return newUser;
      }
      throw new AuthenticationError('You need to be logged in!');

    }
  }
};

module.exports = resolvers;

