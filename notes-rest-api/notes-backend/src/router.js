const express = require("express");
const mongoose = require("mongoose");
const { Note } = require("./models");

const noteRouter = express.Router();

const notebooksApiURL = process.env.NOTEBOOKS_API_URL

noteRouter.post("/", async (req, res) => {
  try {
    const { title, content, notebookId } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        error: "title, content are required",
      });
    }

   if (notebookId) {
     try {
      const res = await fetch(`${notebooksApiURL}/${notebookId}`)
      if(!res.ok) {
        throw new Error(res.status)
      }
    } catch(err) {
      console.error(`Error Fetching Notebook: ${err}`)
    }
   }

    const note = new Note({ title, content, notebookId });
    await note.save();

    res.status(201).json({
      data: note,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

noteRouter.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json({
      data: notes,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

noteRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: `Notebook ${id} is not found`,
      });
    }

    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({
        message: `Note with ${id} is not found`,
      });
    }

    res.status(200).json({
      data: note,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

noteRouter.put("/:id", async (req, res) => {
  try {
    const { title, content } = req.body;
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

    const notebook = await Note.findByIdAndUpdate(
      id,
      { title, content },
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

noteRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: `Notebook ${id} is not found`,
      });
    }

    const note = await Note.findByIdAndDelete(id);

    if (!note) {
      return res.status(404).json({
        message: `${id} is not found`,
      });
    }

    return res.status(204).json({
      data: note,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = {
  noteRouter,
};
