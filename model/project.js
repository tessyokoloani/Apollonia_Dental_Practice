const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee", // Reference to the Employee collection (project manager)
      required: true,
    },
    teamMembers: [
      //This is an array of employees
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee", // Reference to Employee collection (project team members)
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema); // Export the Project model
