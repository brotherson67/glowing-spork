// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
//type queries are methods you come up with that will be used to read you database
//mutations are used to alter data base, similar to update delete
const typeDefs = gql`
<<<<<<< HEAD
    type Thought{
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
        reactionCount: Int
        reactions: [Reaction]
    }
     
    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int 
        thoughts: [Thought]
        friends: [User]
        activities: String
    }

    type Reaction {
      _id: ID
      reactionBody: String
      createdAt: String
      username: String
    }

    type Auth {
      token: ID!
      user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        thoughts(username: String): [Thought]
        thought(_id: ID!): Thought
    }

    type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      addThought(thoughtText: String!): Thought
      addReaction(thoughtId: ID!, reactionBody: String!): Thought
      addFriends(friendId: ID!): User
    }
=======
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
    login(username: String!, password: String!): User
  }
>>>>>>> 6954ce375b6d38e184a90ff60078df46b21d263e
`;

// export the typeDefs
module.exports = typeDefs;
