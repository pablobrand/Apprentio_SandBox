const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//const users = require("./routes/apis/users");
//const profile = require("./routes/apis/profile");
//const posts = require("./routes/apis/posts");
const app = express();

//DB Config
const db = require("./config/keys").mongoURI;

//bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("Successfully Connected to pablo's Sandbox MongoDB!"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("hello pablo, again!");
});

//routes
//app.use("/apis/users", users);
//app.use("/apis/profile", profile);
//app.use("/apis/posts", posts);

const port = process.env.PORT || 6565;

app.listen(port, () => console.log(`Server running in Port: ${port}`));
