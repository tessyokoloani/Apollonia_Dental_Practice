const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Department = require("../model/department");
const Employee = require("../model/employee");
const Contact_Us = require("../model/contactUs");

router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    if (employees) {
      console.log("Success");
      res.status(200).json({ employees });
    }
  } catch (error) {
    console.log(error.message);
    res.status(200).json({ message: error.message });
  }
});

// post to employee
router.post("/employee", async (req, res) => {
  try {
    const { first_name, last_name, email, phone_number, department, position } =
      req.body;
    const userDepartment = await Department.findOne({
      department_name: department,
    });
    if (!userDepartment) {
      return res.status(400).json({ msg: "Department not found" });
    }

    const newEmployee = new Employee({
      first_name,
      last_name,
      email,
      phone_number,
      department_name: userDepartment.department_name,
      position,
    });
    await newEmployee.save();
    if (!newEmployee.save()) {
      return res.status(400).send({ msg: "Employee not created" });
    } else {
      res.status(201).json({
        newEmployee,
        msg: "New Employee successfully added to database",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// edit employee
router.patch("/employee", async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      department_name,
      position,
    } = req.body;
    const employee = await Employee.findOne({
      email: email,
    });
    if (!employee) {
      return res.status(400).json({ msg: "Department not found" });
    }
    const updatedEmployee = await Employee.findOneAndUpdate(
      { email: employee.email },
      {
        first_name,
        last_name,
        phone_number,
        department_name,
        position,
      },
      { new: true }
    );
    if (!updatedEmployee) {
      return res.status(400).json({ message: "Employee not found" });
    }
    res
      .status(200)
      .json({ updatedEmployee, message: "Employee successfully updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

router.delete("/employee", async (req, res) => {
  try {
    const employee = await Employee.findOneAndDelete({ email: req.body.email });
    if (!employee) {
      return res.status(400).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// post to department
router.post("/department", async (req, res) => {
  try {
    const department = new Department(req.body);
    await department.save();
    res
      .status(201)
      .json({ department, message: "New department successfully created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// router.get;
router.get("/department", async (req, res) => {
  try {
    const departments = await Department.find();
    if (!departments) {
      return res.status(400).json({ message: "No departments found" });
    }
    res.status(200).json(departments);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}),
  // router.patch();
  router.patch("/department", async (req, res) => {
    try {
      const { existing_name, department_name, department_code } = req.body;
      const department = await Department.findOne({
        department_name: existing_name,
      });
      if (!department) {
        return res.status(400).json({ message: "Department not found" });
      }
      const updatedDepartment = await Department.findOneAndUpdate(
        { department_name: department.department_name },
        {
          department_name,
          department_code,
        },
        { new: true }
      );
      if (!updatedDepartment) {
        return res.status(400).json({ message: "Department not found" });
      }
      res.status(200).json({
        updatedDepartment,
        message: "Department successfully updated",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  });
// router.delete();
router.delete("/department", async (req, res) => {
  try {
    const department = await Department.findOneAndDelete({
      department_name: req.body.department_name,
    });
    if (!department) {
      return res.status(400).json({ message: "Department not found" });
    }
    res.status(200).json({ message: "Department deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// contact us form
router.post("/contactus", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact_Us({
      name,
      email,
      message,
    });
    await contact.save();
    if (!contact.save()) {
      return res.status(400).json({ message: "Failed to save contact" });
    }
    res.status(200).json({ message: "Message sent successfully" });
  } catch {
    console.log("Error 500 submitting contact form");
    res.status(500).json({ message: "Error submitting contact us form" });
  }
});

module.exports = router;
