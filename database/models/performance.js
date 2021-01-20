const mongoose = require("mongoose");

const performanceSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Performance", performanceSchema);
