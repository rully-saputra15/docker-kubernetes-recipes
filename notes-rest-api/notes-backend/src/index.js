const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { noteRouter } = require("./router");

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use("/api/notes", noteRouter);

console.log("Connecting to DB", process.env.DB_URL);
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("connected to DB");
    app.listen(port, () => {
      console.log(`Notes server Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Something went wrong!");
    console.error(err);
  });
