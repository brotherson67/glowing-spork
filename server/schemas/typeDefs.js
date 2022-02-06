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
    type Query {
        thoughts: [Thought]
        
    }
  
`;

// export the typeDefs
module.exports = typeDefs;