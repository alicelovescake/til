import gql from 'graphql-tag'

export const schema = gql`
  type Learning {
    id: Int!
    author: User!
    authorId: Int!
    tags: [Tag]!
    likes: [Like]!
    comments: [Comment]!
    type: LearningType!
    content: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum LearningType {
    SUCCESS
    FAILURE
  }

  type Query {
    learnings: [Learning!]!
    learning(id: Int!): Learning!
  }

  input CreateLearningInput {
    type: LearningType!
    content: String!
  }

  input UpdateLearningInput {
    type: LearningType
    content: String
  }

  type Mutation {
    createLearning(input: CreateLearningInput!): Learning!
    updateLearning(id: Int!, input: UpdateLearningInput!): Learning!
    deleteLearning(id: Int!): Learning!
  }
`
