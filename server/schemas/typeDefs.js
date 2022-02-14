// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
//type queries are methods you come up with that will be used to read you database
//mutations are used to alter data base, similar to update delete
const typeDefs = gql`
    type Thought{
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
       
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

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        thoughts(username: String): [Thought]
        thought(_id: ID!): Thought
    }
  
`;

// export the typeDefs
module.exports = typeDefs;