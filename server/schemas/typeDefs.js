const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    title: String
    author: String
    pages: Int
  }
  type User{
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Auth{
      token: ID
      user: User
  }
  type Query {
    books: [Book]
    book(title: String!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, pages: Int!): Book
    addUser(username: String, password: String, email: String): Auth
  }
  
`;

module.exports = typeDefs;
