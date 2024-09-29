const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      enum: ["male", "famale", "other", "rather not say"],
    },
    contactNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    medicalHistory: {
      type: String,
    },
    assignedDoctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee", // Reference to the Employee collection (doctor or caretaker)
      required: true,
    },
    assignedMedicalStaff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    patientStatus: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);
