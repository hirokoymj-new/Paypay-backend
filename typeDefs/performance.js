const { gql } = require("apollo-server");

module.exports = gql`
  extend type Query {
    performances(employeeId: ID): [Performance]
    performance(id: ID!): Performance
  }

  extend type Mutation {
    createPerformance(input: createPerformanceInput): Performance
    updatePerformance(id: ID!, input: updatePerformanceInput!): Performance
    deletePerformance(id: ID!): Performance
  }

  enum Score {
    EXCELLENT
    GOOD
    BAD
  }

  input createPerformanceInput {
    title: String!
    employee: ID!
    evaluator: ID!
    teamPlayer: Score
    communication: Score
    comment: String
  }

  input updatePerformanceInput {
    title: String
    employee: ID
    evaluator: ID
    teamPlayer: Score
    communication: Score
    comment: String
  }

  type Performance {
    id: ID!
    title: String!
    employee: Employee!
    evaluator: Employee!
    teamPlayer: Score
    communication: Score
    comment: String
    feedbacks: [Feedback]
    createdAt: Date!
    updatedAt: Date!
  }
`;
