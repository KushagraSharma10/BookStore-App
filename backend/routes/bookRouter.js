const express = require("express");
const router = express.Router();
const bookModel = require("../models/bookModel");

router.post("/", async (req, res) => {
  try {
    const { title, publicationYear, author } = req.body;

    if (!title || !publicationYear || !author) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    const newBook = await bookModel.create({
      title,
      publicationYear,
      author,
    });

    res.json(newBook);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message }); // Return the error in the response
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await bookModel.find();
    res.json({
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    // Correctly query by _id
    const book = await bookModel.findOne({ _id: req.params.id });

    // If the book is found, return it as a JSON response
    res.json(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await bookModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );

    if (!result) return res.status(404).json({ msg: "Book not found" });

    res.json({ msg: "Book updated successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await bookModel.findOneAndDelete({ _id: req.params.id });

    if (!result) return res.status(404).json({ msg: "Book not found" });

    res.json({ msg: "Book Deleted successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
