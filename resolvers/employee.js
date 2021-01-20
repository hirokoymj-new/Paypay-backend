const Employee = require("../database/models/employee");
const Performance = require("../database/models/performance");

module.exports = {
  Query: {
    employees: async (_) => {
      try {
        const employee = await Employee.find();
        return employee;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    employee: async (_, { id }) => {
      try {
        const employee = await Employee.findById(id);
        return employee;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  Mutation: {
    createEmployee: async (_, { input }) => {
      try {
        const employee = new Employee({ ...input });
        const result = await employee.save();
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    deleteEmployee: async (_, { id }) => {
      try {
        const employee = await Employee.findByIdAndDelete(id);
        return employee;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    updateEmployee: async (_, { id, input }) => {
      try {
        const employee = await Employee.findByIdAndUpdate(
          id,
          { ...input },
          { new: true }
        );
        return employee;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  Employee: {
    performances: async ({ id }) => {
      try {
        const performances = await Performance.find({ employee: id });
        return performances;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};
