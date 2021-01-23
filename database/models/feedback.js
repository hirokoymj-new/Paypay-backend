const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    performance: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Performance",
    },
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
