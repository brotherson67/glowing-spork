require("dotenv").config();

const { User, Thought, Donation, Message } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { PubSub, withFilter } = require("graphql-yoga");
const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);

const chats = [];
const CHAT_CHANNEL = "CHAT_CHANNEL";
//in resolvers you write the code for what the method is actually doing
//query must match typedef definition
const resolvers = {
  Query: {
    users: () => User.find(),
    messages: () => Message.find(),
    // parent: hold the reference to the resolver that executed the nested resolver function
    // args: object of all of the values passed into a query or mutation request as parameters. we destructure the username parameter out to be used.
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    // place this inside of the `Query` nested object right after `thoughts`
    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    },
    // get all users
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("friends")
        .populate("thoughts");
    },
    // get all messages
    // users: async () => {
    //   return User.find()
    //     .select('-__v -password')
    //     .populate('friends')
    //     .populate('thoughts');
    // },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("friends")
        .populate("thoughts");
    },
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
    messages: async ({ username }) => {
      return Message.find({ sendUsername: username });
    },
    users: async ({ sendUsername }) => {
      return User.find({ username: sendUsername });
    },
    // donate: async (parent, args) => {
    //   const order = new Order({ donation: args.products });
    //   const { products } = await order.populate("products").execPopulate();
    //   const line_items = [];

    //   for (let i = 0; i < products.length; i++) {
    //     // generate product id
    //     const product = await stripe.products.create({
    //       name: products[i].name,
    //       description: products[i].description,
    //     });

    //     // generate price id using the product id
    //     const price = await stripe.prices.create({
    //       product: product.id,
    //       unit_amount: products[i].price * 100,
    //       currency: "usd",
    //     });

    //     // add price id to the line items array
    //     line_items.push({
    //       price: price.id,
    //       quantity: 1,
    //     });
    //   }
    // },
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
        throw new AuthenticationError("Wrong credentials!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Wrong credentials!");
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
      throw new AuthenticationError("You need to login!");
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
  // Subscription: {
  //   newMessage: {
  //     subscribe: withFilter(
  //       () => pubsub.asyncIterator("newMessage"),
  //       (payload, variables) => {
  //         return (
  //           payload.receiveUsername === variables.receiveUsername
  //         )
  //       }
  //     ),
  //   },
  //   newUser: {
  //     subscribe: (_, { }, { pubsub }) => {
  //       return pubsub.asyncIterator("newUser")
  //     },
  //   },
  //   oldUser: {
  //     subscribe: (_, { }, { pubsub }) => {
  //       return pubsub.asyncIterator("oldUser")
  //     },
  //   },
  //   userTyping: {
  //     subscribe: withFilter(
  //       () => pubsub.asyncIterator("userTyping"),
  //       (payload, variables) => {
  //         return (
  //           payload.receiveUsername === variables.receiveUsername
  //         )
  //       }
  //     ),
  //   },
  // },
};
module.exports = resolvers;
