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
<<<<<<< HEAD
        thoughts(username: String): [Thought]
      }
=======
        thoughts: [Thought]
        
    }
>>>>>>> 8c50a949adc6172aeae947bb18292a5ca6916435
  
`;

// export the typeDefs
module.exports = typeDefs;