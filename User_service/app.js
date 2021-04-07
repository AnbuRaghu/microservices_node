
const express = require("express");
//
const app = express();


const bodyParser = require("body-parser");


const mongoose = require("mongoose");

const db = require("./config/dbConfig").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

const users = require("./api/users");


const port = process.env.PORT ||5001;
app.listen(port, () => {
  console.log(`application is working with port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello from express");
});

app.use("/api/users", users);


