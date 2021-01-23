const mongoose = require("mongoose");

const performanceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
    },
    teamPlayer: {
      type: String,
      required: false,
    },
    communication: {
      type: String,
      required: false,
    },
    comment: {
      type: String,
      required: false,
    },
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    evaluator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    feedbacks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Feedback",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Performance", performanceSchema);
