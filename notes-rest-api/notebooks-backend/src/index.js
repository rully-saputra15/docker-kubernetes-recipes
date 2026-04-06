const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { notebookRouter } = require('./routes');

const port = process.env.PORT;
const app = express();
app.use(bodyParser.json());

app.use("/api/notebooks", notebookRouter);

console.log("Connecting to DB", process.env.DB_URL);
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("connected to DB");
    app.listen(port, () => {
      console.log(`Notebooks server Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Something went wrong!");
    console.error(err);
  });
