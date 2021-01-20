const { gql } = require("apollo-server");

module.exports = gql`
  extend type Query {
    employees: [Employee!]
    employee(id: ID!): Employee
  }

  extend type Mutation {
    createEmployee(input: createEmployeeInput): Employee
    updateEmployee(id: ID!, input: updateEmployeeInput!): Employee
    deleteEmployee(id: ID!): Employee
  }

  input createEmployeeInput {
    firstName: String!
    lastName: String!
    email: String!
  }

  input updateEmployeeInput {
    firstName: String
    lastName: String
    email: String
  }

  type Employee {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    performances: [Performance]
    createdAt: Date!
    updatedAt: Date!
  }
`;
