import gql from 'graphql-tag'

export const schema = gql`
  type Learning {
    id: Int!
    author: User!
    authorId: Int!
    tags: [Tag]!
    likes: [Like]!
    comments: [Comment]!
    content: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    learnings: [Learning!]!
    learning(id: Int!): Learning!
  }

  input CreateLearningInput {
    content: String!
  }

  input UpdateLearningInput {
    content: String
  }

  type Mutation {
    createLearning(input: CreateLearningInput!): Learning!
    updateLearning(id: Int!, input: UpdateLearningInput!): Learning!
    deleteLearning(id: Int!): Learning!
  }
`
