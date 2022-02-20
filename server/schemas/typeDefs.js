const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
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
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;




// // import the gql tagged template function
// const { gql } = require("apollo-server-express");

// // create our typeDefs
// //type queries are methods you come up with that will be used to read you database
// //mutations are used to alter data base, similar to update delete
// const typeDefs = gql`
    
//     type User {
//         _id: ID
//         username: String
//         email: String
//         friendCount: Int 
//         thoughts: [Thought]
//         friends: [User]
//         activities: String
//         image: String
        
//     }

//     type Thought{
//       _id: ID
//       thoughtText: String
//       createdAt: String
//       username: String
//       reactionCount: Int
//       reactions: [Reaction]
//   }
   
//     type Reaction {
//       _id: ID
//       reactionBody: String
//       createdAt: String
//       username: String
//     }

    

//     type Query {
//         me: User
//         users: [User]
//         user(username: String!): User
//         thoughts(username: String): [Thought]
//         thought(_id: ID!): Thought
//     }

    

//     type Mutation {
//       login(email: String!, password: String!): Auth
//       addUser(username: String!, email: String!, password: String!): Auth
//       addThought(thoughtText: String!): Thought
//       addReaction(thoughtId: ID!, reactionBody: String!): Thought
//       addFriend(friendId: ID!): User
//     }

    
//     type Auth {
//       token: ID!
//       user: User
//     }
// `;

// // export the typeDefs
// module.exports = typeDefs;

