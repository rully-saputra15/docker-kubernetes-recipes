const express = require("express");
const { KeyValue } = require("../models/keyValue");

const keyValueRouter = express.Router();

keyValueRouter.post("/", async (req, res) => {
  const { key, value } = req.body;

  try {
    const existingKey = await KeyValue.findOne({ key });
    if (existingKey) {
      return res.status(400).json({
        error: "Key already existed",
      });
    }

    const keyValue = new KeyValue({ key, value });
    await keyValue.save();
    return res.status(20).json({
      message: "key value pair stored",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

keyValueRouter.get("/:key", async (req, res) => {
  try {
    const { key } = req.params;
    const keyValue = await KeyValue.findOne({key})
    return res.status(200).json({
        key,
        message: keyValue.value
    })
  } catch (err) {
    console.error("error get", err)
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
  return res.send("getting key-value pair");
});

keyValueRouter.put("/:key", (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
  return res.send("updating key-value pair");
});

keyValueRouter.delete("/:key", (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
  return res.send("deleting key-value pair");
});

module.exports = {
  keyValueRouter,
};
