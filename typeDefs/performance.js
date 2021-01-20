const { gql } = require("apollo-server");

module.exports = gql`
  extend type Query {
    performances: [Performance]
    performance(id: ID!): Performance
  }

  extend type Mutation {
    createPerformance(input: createPerformanceInput): Performance
    updatePerformance(id: ID!, input: updatePerformanceInput!): Performance
    deletePerformance(id: ID!): Performance
  }

  enum Score {
    excellent
    good
    bad
  }

  input createPerformanceInput {
    teamPlayer: Score
    communication: Score
    comment: String
    employee: ID!
    evaluator: ID!
  }

  input updatePerformanceInput {
    teamPlayer: Score
    communication: Score
    comment: String
  }

  type Performance {
    id: ID!
    teamPlayer: Score
    communication: Score
    comment: String
    employee: Employee!
    evaluator: Employee!
    createdAt: Date!
    updatedAt: Date!
  }
`;
