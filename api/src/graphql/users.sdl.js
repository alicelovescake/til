import gql from 'graphql-tag'

export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
    location: Location
    birthDate: DateTime
    username: String!
    learnings: [Learning]!
    likes: [Like]!
    comments: [Comment]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User!
  }

  input CreateUserInput {
    email: String!
    name: String
    username: String!
  }

  input UpdateUserInput {
    email: String
    name: String
    birthDate: DateTime
    username: String
    location: Location
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`
