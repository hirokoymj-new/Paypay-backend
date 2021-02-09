const { gql } = require("apollo-server");

const employeeTypeDefs = require("./employee");
const performanceTypeDefs = require("./performance");
const feedbackTypeDefs = require("./feedback");

const typeDefs = gql`
  scalar Date
  enum AllowedColor {
    RED
    GREEN
    BLUE
  }
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;

module.exports = [
  typeDefs,
  employeeTypeDefs,
  performanceTypeDefs,
  feedbackTypeDefs,
];
