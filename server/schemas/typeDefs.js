// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
//type queries are methods you come up with that will be used to read you database
//mutations are used to alter data base, similar to update delete
const typeDefs = gql`
  type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
  }

  type User {
    _id: ID
    username: String
    posts: [Post]
    friends: [User]
    friendCount: Int
    activities: [Activity]
    reactions: [Reaction]
  }

  type Activity {
    _id: ID
    activity: String
    participants: [User]
  }

  type Reaction {
    _id: ID
    reactionBody: String
  }

  type Query {
    users(username: String): [User]
    posts(username: String): [Post]

  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createPost(postText: String!, username: String!): Post
    login(username: String!, password: String!)
  }
`;

// export the typeDefs
module.exports = typeDefs;
