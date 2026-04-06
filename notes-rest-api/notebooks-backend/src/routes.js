const express = require("express");
const mongoose = require("mongoose");
const { Notebook } = require("./models");

const notebookRouter = express.Router();

notebookRouter.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res.status(400).json({
        error: "Name is required",
      });
    }

    const notebook = new Notebook({ name, description });
    await notebook.save();

    res.status(201).json({
      data: notebook,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

notebookRouter.get("/", async (req, res) => {
  try {
    const notebooks = await Notebook.find();
    res.status(200).json({
      message: notebooks,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

notebookRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: `Notebook ${id} is not found`,
      });
    }

    const notebook = await Notebook.findById(id);

    if (!notebook) {
      return res.status(404).json({
        message: `${id} is not found`,
      });
    }

    res.status(200).json({
      message: notebook,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

notebookRouter.put("/:id", async (req, res) => {
  try {
    const { name, description } = req.body;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: `Notebook ${id} is not found`,
      });
    }

    if (!name) {
      return res.status(400).json({
        error: "Name is required",
      });
    }

    const notebook = await Notebook.findByIdAndUpdate(
      id,
      { name, description },
      { new: true },
    );

    if (!notebook) {
      return res.status(404).json({
        message: `${id} is not found`,
      });
    }
    
    return res.status(200).json({
      data: notebook,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

notebookRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: `Notebook ${id} is not found`,
      });
    }

    const notebook = await Notebook.findByIdAndDelete(id);

    if (!notebook) {
      return res.status(404).json({
        message: `${id} is not found`,
      });
    }

   return res.status(200).json({
      data: notebook,
    });

  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = {
  notebookRouter,
};
