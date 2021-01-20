const { gql } = require("apollo-server");

const employeeTypeDefs = require("./employee");
const performanceTypeDefs = require("./performance");

const typeDefs = gql`
  scalar Date

  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;

module.exports = [typeDefs, employeeTypeDefs, performanceTypeDefs];
