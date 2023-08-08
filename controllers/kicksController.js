const express = require("express");
const kicks = express.Router();
const {
  getAllKicks,
  getKicks,
  newKicks,
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
  const allKicks = await getAllKicks();
  if (allKicks[0]) {
    res.status(200).json(allKicks);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// // SHOW
kicks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const kicks = await getKicks(id);
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
  const updatedKicks = await updateKicks(id, req.body);
  res.status(200).json(updatedKicks);
});


// DELETE
kicks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedKicks = await deleteKicks(id);
  if (deletedkicks.id) {
    res.status(200).json(deletedKicks);
  } else {
    res.status(404).json("No kicks found my guy.");
  }
});

module.exports = kicks;