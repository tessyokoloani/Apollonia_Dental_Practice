const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    trainer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee", // Reference to the Employee collection (trainer)
      required: true,
    },
    attendees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee", // Reference to Employee collection (attendees)
      },
    ],
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department", // Reference to the Department collection
      required: true,
    },
  },
  { timestamps: true }
);

const Training = mongoose.model("Training", trainingSchema);
module.exports = Training;
