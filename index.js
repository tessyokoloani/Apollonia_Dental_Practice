const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

require("dotenv").config();
const mongoose = require("mongoose");
const api_route = require("./routes/api");
const home_route = require("./routes/home");
const connectDB = require("./config/database/database");
const port = process.env.PORT || 4567;

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", api_route);
app.use("/", home_route);

app.get("/employee", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/editDeleteStaff.html"), (err) => {
    if (err) {
      console.log(err.message);
      return res.send(
        `<h2>Something catastrophic happened.<br><br> Go back to <a href="/">Home</a></h2>`
      );
    }
  });
});

app.get("/department", (req, res) => {
  res.sendFile(__dirname + "/public/addEditDelDept.html", (err) => {
    if (err) {
      console.log(err.message);
      res.send(
        `<h2>Something catastrophic happened.<br><br> Go back to <a href="/">Home</a></h2>`
      );
    }
  });
});

// start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
