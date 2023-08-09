const express = require("express");
const kicks = express.Router();
const {
  getAllKicks,
  getKick,
  createKick,
  deleteKick,
  updateKick,
} = require("../queries/kicks");

// const {
// //   checkBoolean,
//   checkName,
//   checkKicks,
// } = require("../validations/checkKicks.js");

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
  const kick = await getKick(id);
  if (kick) {
    res.json(kick);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
kicks.post("/", async (req, res) => {
  try {
    const kicks = await createKick(req.body);
    res.json(kicks);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// UPDATE
kicks.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedKick = await updateKick(id, req.body);
  res.status(200).json(updatedKick);

});


// DELETE
kicks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedKick = await deleteKick(id);
  if (deletedKick.id) {
    res.status(200).json(deletedKick);

  } else {
    res.status(404).json("No kicks found my guy.");
  }
});

module.exports = kicks;