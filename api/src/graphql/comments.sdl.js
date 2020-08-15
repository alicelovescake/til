import gql from 'graphql-tag'

export const schema = gql`
  type Comment {
    id: Int!
    userId: Int!
    user: User!
    body: String!
    learningId: Int!
    learning: Learning!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    comments: [Comment!]!
    comment(id: Int!): Comment!
  }

  input CreateCommentInput {
    userId: Int!
    body: String!
    learningId: Int!
  }

  input UpdateCommentInput {
    userId: Int
    body: String
    learningId: Int
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment!
    updateComment(id: Int!, input: UpdateCommentInput!): Comment!
    deleteComment(id: Int!): Comment!
  }
`
