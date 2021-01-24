const { gql } = require("apollo-server");

module.exports = gql`
  extend type Query {
    feedbacks: [Feedback!]
  }

  extend type Mutation {
    createFeedback(input: createFeedbackInput): Feedback
  }

  input createFeedbackInput {
    performance: ID!
    name: String!
    comment: String
  }

  type Feedback {
    id: ID!
    performance: Performance!
    name: String!
    comment: String
    createdAt: Date!
    updatedAt: Date!
  }
`;
