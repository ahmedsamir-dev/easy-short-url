const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("config");

const database = config.get("mongoURL");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("I am connected to DB"))
  .catch((err) => console.log("error here in db in server \n", err));

const URL = require("./models/urlModel");

app.use("/api/shorten", require("./routes/apis/shorten"));
app.use("/", require("./routes/index"));

app.listen(port, () => console.log(`BOOM! Server is running on port ${port}`));
