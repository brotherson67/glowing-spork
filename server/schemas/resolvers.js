<<<<<<< HEAD
require("dotenv").config();

const { User, Thought, Checkout, Message, Donation } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { PubSub, withFilter } = require("graphql-yoga");
const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);

const chats = [];
const CHAT_CHANNEL = "CHAT_CHANNEL";

const resolvers = {
  Query: {
    users: () => User.find(),
    messages: () => Message.find(),
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    },
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("friends")
        .populate("thoughts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("friends")
        .populate("thoughts");
    },
=======





// const { User, Thought } = require('../models');
// const { AuthenticationError } = require('apollo-server-express');
// const { signToken } = require('../utils/auth');

// const resolvers = {
//     Query: {
//         // parent: hold the reference to the resolver that executed the nested resolver function
//         // args: object of all of the values passed into a query or mutation request as parameters. we destructure the username parameter out to be used.
//         thoughts: async (parent, { username }) => {
//             const params = username ? { username } : {};
//             return Thought.find(params).sort({ createdAt: -1 });
//         },
//         // place this inside of the `Query` nested object right after `thoughts` 
//         thought: async (parent, { _id }) => {
//             return Thought.findOne({ _id });
//         },
//         // get all users
//         users: async () => {
//             return User.find()
//                 .select('-__v -password')
//                 .populate('friends')
//                 .populate('thoughts');
//         },
//         // get a user by username
//         user: async (parent, { username }) => {
//             return User.findOne({ username })
//                 .select('-__v -password')
//                 .populate('friends')
//                 .populate('thoughts');
//         },
//         me: async (parent, args, context) => {
//             if (context.user) {
//                 const userData = await User.findOne({ _id: context.user._id })
//                     .select('-__v -password')
//                     .populate('thoughts')
//                     .populate('friends');

//                 return userData;
//             }

//             throw new AuthenticationError('Not logged in');
//         }
//     },
//     Mutation: {
//         addUser: async (parent, args) => {
//             const user = await User.create(args);
//             const token = signToken(user);

//             return { token, user };
//         },
//         login: async (parent, { email, password }) => {
//             const user = await User.findOne({ email });

//             if (!user) {
//                 throw new AuthenticationError('Incorrect credentials');
//             }

//             const correctPw = await user.isCorrectPassword(password);
const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
>>>>>>> e2a5ab1f85307003ebbb4cbae42feb8c55c47bc7
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("thoughts")
          .populate("friends");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
<<<<<<< HEAD
    messages: async ({ username }) => {
      return Message.find({ sendUsername: username });
    },
    users: async ({ sendUsername }) => {
      return User.find({ username: sendUsername });
    },
    donations: async () => {
      return Donation.find();
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const checkout = new Checkout({ donations: args.donations });
      const { donations } = await checkout.populate("donations").execPopulate();

      const line_items = [];

      for (let i = 0; i < donations.length; i++) {
        const product = await stripe.products.create({
          name: donations[i].name,
          description: donations[i].description,
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: donations[i].donationAmount * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
=======
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
>>>>>>> e2a5ab1f85307003ebbb4cbae42feb8c55c47bc7
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
<<<<<<< HEAD
        throw new AuthenticationError("Wrong credentials!");
=======
        throw new AuthenticationError('Incorrect credentials');
>>>>>>> e2a5ab1f85307003ebbb4cbae42feb8c55c47bc7
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
<<<<<<< HEAD
        throw new AuthenticationError("Wrong credentials!");
=======
        throw new AuthenticationError('Incorrect credentials');
>>>>>>> e2a5ab1f85307003ebbb4cbae42feb8c55c47bc7
      }

      const token = signToken(user);
      return { token, user };
    },
    addThought: async (parent, args, context) => {
      if (context.user) {
        const thought = await Thought.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { thoughts: thought._id } },
          { new: true }
        );

        return thought;
      }
<<<<<<< HEAD
      throw new AuthenticationError("You need to login!");
=======

      throw new AuthenticationError('You need to be logged in!');
>>>>>>> e2a5ab1f85307003ebbb4cbae42feb8c55c47bc7
    },
    addReaction: async (parent, { thoughtId, reactionBody }, context) => {
      if (context.user) {
        const updatedThought = await Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $push: {
              reactions: { reactionBody, username: context.user.username },
            },
          },
          { new: true, runValidators: true }
        );

        return updatedThought;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate("friends");

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addDonationType: async (parent, { name, donationAmount }) => {
      const donation = Donation.create({ name, donationAmount });

      return donation;
    },
    sendMessage: async ({
      sendUsername,
      receiveUsername,
      message,
      timestamp,
    }) => {
      const userText = new Message({
        sendUsername,
        receiveUsername,
        message,
        timestamp,
      });
      await userText.save();
      pubsub.publish("newMessage", {
        newMessage: userText,
        receiveUsername,
      });
      return userText;
    },
    updateMessage: async (_, { id, message }) => {
      const userText = await Message.findOneAndUpdate(
        { _id: id },
        { message },
        { new: true }
      );
      return userText;
    },
    deleteMessage: async (_, { id }) => {
      await Message.findOneAndDelete({ _id: id });
      return true;
    },
  },
};

module.exports = resolvers;

//             if (!correctPw) {
//                 throw new AuthenticationError('Incorrect credentials');
//             }

//             const token = signToken(user);
//             return { token, user };
//         },
//         addThought: async (parent, args, context) => {
//             if (context.user) {
//                 const thought = await Thought.create({ ...args, username: context.user.username });

//                 await User.findByIdAndUpdate(
//                     { _id: context.user._id },
//                     { $push: { thoughts: thought._id } },
//                     { new: true }
//                 );

//                 return thought;
//             }

//             throw new AuthenticationError('You need to be logged in!');
//         },
//         addReaction: async (parent, { thoughtId, reactionBody }, context) => {
//             if (context.user) {
//                 const updatedThought = await Thought.findOneAndUpdate(
//                     { _id: thoughtId },
//                     { $push: { reactions: { reactionBody, username: context.user.username } } },
//                     { new: true, runValidators: true }
//                 );

//                 return updatedThought;
//             }

//             throw new AuthenticationError('You need to be logged in!');
//         },
//         addFriend: async (parent, { friendId }, context) => {
//             if (context.user) {
//                 const updatedUser = await User.findOneAndUpdate(
//                     { _id: context.user._id },
//                     { $addToSet: { friends: friendId } },
//                     { new: true }
//                 ).populate('friends');

//                 return updatedUser;
//             }

//             throw new AuthenticationError('You need to be logged in!');
//         }
//     }
// };

// module.exports = resolvers;
