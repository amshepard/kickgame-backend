const express = require("express");
const kicks = express.Router();
const {
  getAllkicks,
  getkicks,
  newkicks,
  deleteKicks,
  updateKicks,
} = require("../queries/kicks");

const {
//   checkBoolean,
  checkName,
  checkKicks,
} = require("../validations/checkKicks.js");

// INDEX
kicks.get("/", async (req, res) => {
  const allkicks = await getAllKicks();
  if (allkicks[0]) {
    res.status(200).json(allkicks);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// // SHOW
kicks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const kicks = await getkicks(id);
  if (kicks.time) {
    res.json(kicks);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
kicks.post("/", checkName, checkKicks, async (req, res) => {
  try {
    const kicks = await newkicks(req.body);
    res.json(kicks);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// UPDATE
kicks.put("/:id", checkName, checkKicks, async (req, res) => {
  const { id } = req.params;
  const updatedkicks = await updateKicks(id, req.body);
  res.status(200).json(updatedkicks);
});


// DELETE
kicks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedkicks = await deleteKicks(id);
  if (deletedkicks.id) {
    res.status(200).json(deletedkicks);
  } else {
    res.status(404).json("No kicks found my guy.");
  }
});

module.exports = kicks;
