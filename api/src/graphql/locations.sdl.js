import gql from 'graphql-tag'

export const schema = gql`
  type Location {
    id: Int!
    city: String!
    lat: Float!
    long: Float!
    userId: Int!
    user: User!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    locations: [Location!]!
    location(id: Int!): Location!
  }

  input CreateLocationInput {
    city: String!
    lat: Float!
    long: Float!
    userId: Int!
  }

  input UpdateLocationInput {
    city: String
    lat: Float
    long: Float
    userId: Int
  }

  type Mutation {
    createLocation(input: CreateLocationInput!): Location!
    updateLocation(id: Int!, input: UpdateLocationInput!): Location!
    deleteLocation(id: Int!): Location!
  }
`
