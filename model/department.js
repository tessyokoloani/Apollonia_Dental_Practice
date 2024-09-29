const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({
  department_name: {
    type: String,
    required: true,
  },
  department_code: {
    type: String,
    required: true,
    unique: true,
  },
  department_head: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee", // Reference to Employee (department head)
  },
});

module.exports = mongoose.model("Department", DepartmentSchema);
