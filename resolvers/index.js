const { GraphQLDateTime } = require("graphql-iso-date");

const employeeResolver = require("./employee");
const performanceResolver = require("./performance");
const feedbackResolver = require("./feedback");

const customDateScalarResolver = {
  Date: GraphQLDateTime,
};

module.exports = [
  customDateScalarResolver,
  employeeResolver,
  performanceResolver,
  feedbackResolver,
];
