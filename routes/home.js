const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html", (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error loading index.html");
    }
  });
});

module.exports = router;
