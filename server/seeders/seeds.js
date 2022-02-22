const faker = require('faker');

const db = require('../config/connection');
const { Thought, User } = require('../models');

db.once('open', async () => {
  await Thought.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();
    const image = faker.image.avatar();
    userData.push({ username, email, password, image });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create friends
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      friendId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }

  // create thoughts
  let createdThoughts = [];
  for (let i = 0; i < 100; i += 1) {
    const thoughtText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdThought = await Thought.create({ thoughtText, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { thoughts: createdThought._id } }
    );

    createdThoughts.push(createdThought);
  }

  // create reactions
  for (let i = 0; i < 100; i += 1) {
    const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomThoughtIndex = Math.floor(Math.random() * createdThoughts.length);
    const { _id: thoughtId } = createdThoughts[randomThoughtIndex];

    await Thought.updateOne(
      { _id: thoughtId },
      { $push: { reactions: { reactionBody, username } } },
      { runValidators: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});



// const faker = require("faker");

// const db = require("../config/connection");
// const { Thoughts, User } = require("../models");

// db.once("open", async () => {
//   // await Post.deleteMany({});
//   await User.deleteMany({});

//   // create user data
//   const userData = [];

//   for (let i = 0; i < 50; i += 1) {
//     const username = faker.internet.userName();
//     const email = faker.internet.email(username);
//     const password = faker.internet.password();

//     userData.push({ username, email, password });
//   }

//   const createdUsers = await User.collection.insertMany(userData);

//   // create friends
//   for (let i = 0; i < 100; i += 1) {
//     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
//     const { _id: userId } = createdUsers.ops[randomUserIndex];

//     let friendId = userId;

//     while (friendId === userId) {
//       const randomUserIndex = Math.floor(
//         Math.random() * createdUsers.ops.length
//       );
//       friendId = createdUsers.ops[randomUserIndex];
//     }

//     await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
//   }

//   // create Posts
//   let createdPosts = [];
//   for (let i = 0; i < 100; i += 1) {
//     const postText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

//     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
//     const { username, _id: userId } = createdUsers.ops[randomUserIndex];

//     const createdPost = await Post.create({ postText, username });

//     const updatedUser = await User.updateOne(
//       { _id: userId },
//       { $push: { posts: createdPost._id } }
//     );

//     createdPosts.push(createdPost);
//   }

//   // create reactions
//   for (let i = 0; i < 100; i += 1) {
//     const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

//     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
//     const { username } = createdUsers.ops[randomUserIndex];

//     const randomPostIndex = Math.floor(Math.random() * createdPosts.length);
//     const { _id: postId } = createdPosts[randomPostIndex];

//     await Post.updateOne(
//       { _id: postId },
//       { $push: { reactions: { reactionBody, username } } },
//       { runValidators: true }
//     );
//   }

//   console.log("all done!");
//   process.exit(0);
// });
