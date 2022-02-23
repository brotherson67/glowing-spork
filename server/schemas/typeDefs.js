const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    image: String
    thoughts: [Thought]
    friends: [User]
    
  }

  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

    type Subscription {
    newMessage(receiveUsername: String!): Message
    newUser: User
    oldUser: String
    userTyping(receiveUsername: String!): String
  }
  
  type Checkout {
    session: ID
  }

  type Donation {
    _id: ID
    name: String
    donationDate: String
    donationAmount: Int
    donationDescription: String

 
 type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
    donations: [Donation]
    checkout(donations: [ID]!): Checkout
  }

 type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
    addDonationType(
      name: String!
      donationAmount: Int!
      donationDescription: String
    ): Donation

  type Auth {
    token: ID!
    user: User
  }

`;

module.exports = typeDefs;
