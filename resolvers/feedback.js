const Employee = require("../database/models/employee");
const Performance = require("../database/models/performance");
const Feedback = require("../database/models/feedback");
const get = require("lodash/get");

module.exports = {
  Query: {
    feedbacks: async (_) => {
      try {
        const feedbacks = await Feedback.find().sort({ _id: -1 });
        return feedbacks;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  Mutation: {
    createFeedback: async (_, { input }) => {
      try {
        const feedback = new Feedback({ ...input });
        const result = await feedback.save();

        const performance = await Performance.findById(input.performance);
        console.log(performance);

        performance.feedbacks.push(result.id);
        await performance.save();

        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  Feedback: {
    performance: async (parent) => {
      const performance = await Performance.findById(parent.performance);
      return performance;
    },
  },
};
