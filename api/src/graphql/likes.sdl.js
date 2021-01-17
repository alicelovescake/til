import gql from 'graphql-tag'

export const schema = gql`
  type Like {
    id: Int!
    userId: Int!
    user: User!
    learningId: Int!
    learning: Learning!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    likes: [Like!]!
    like(id: Int!): Like!
  }

  input CreateLikeInput {
    learningId: Int!
  }

  type Mutation {
    createLike(input: CreateLikeInput!): Like!
    deleteLike(id: Int!): Like!
  }
`
