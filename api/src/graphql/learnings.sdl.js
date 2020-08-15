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
    authorId: Int!
    type: LearningType!
  }

  input UpdateLearningInput {
    authorId: Int
    type: LearningType
  }

  type Mutation {
    createLearning(input: CreateLearningInput!): Learning!
    updateLearning(id: Int!, input: UpdateLearningInput!): Learning!
    deleteLearning(id: Int!): Learning!
  }
`
