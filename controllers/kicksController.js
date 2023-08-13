/*
Here we are creating a Node.js application and using the Express.js framework to create API routes for managing a collection of kicks(sneakers). The code defines routes for retrieving all kicks, retrieving a single kick by its ID, creating a new kick, updating an existing kick, and deleting a kick. The routes use various functions from the imported modules for database queries and input validation.
*/

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
// Route to retrieve all kicks
kicks.get("/", async (req, res) => {
  const allKicks = await getAllKicks();
  if (allKicks[0]) {
    res.status(200).json(allKicks);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
// Route to retrieve a specific kick by its ID
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
// Route to create a new kick
kicks.post("/", checkName, checkKicks, async (req, res) => {
  try {
    const kicks = await createKick(req.body);
    res.json(kicks);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// UPDATE

// Route to update an existing kick by its ID
kicks.put("/:id", checkName, checkKicks, async (req, res) => {
  const { id } = req.params;
  const updatedKick = await updateKick(id, req.body);
  res.status(200).json(updatedKick);

});

// DELETE
// Route to delete a kick by its ID
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

