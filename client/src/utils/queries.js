<<<<<<< HEAD
import { gql } from "@apollo/client";
=======
import { gql, useQuery } from '@apollo/client';
>>>>>>> e2a5ab1f85307003ebbb4cbae42feb8c55c47bc7

export const QUERY_THOUGHTS = gql`
  query thoughts($username: String) {
    thoughts(username: $username) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_THOUGHT = gql`
  query thought($id: ID!) {
    thought(_id: $id) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      image
      friends {
        _id
        username
      }
      thoughts {
        _id
        thoughtText
        createdAt
        reactionCount
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      image
      thoughts {
        _id
        thoughtText
        createdAt
        reactionCount
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      image
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_USER_IMG = gql`
  query User($username: String!) {
    user(username: $username) {
      image
      username
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query checkout($donations: [ID]!) {
    checkout(donations: $donations) {
      session
    }
  }
`;

export const QUERY_DONATIONS = gql`
  query donations {
    _id
    name
    donationAmount
    donationDescription
  }
`;
