// const express = require("express");
// const kicks = express.Router();
// const kicksArray = require("../queries/kicks.js");

const db = require("../db/dbConfig.js");

const getAllKicks = async () => {
    try {
      const allKicks = await db.any("SELECT * FROM kicks");
      return allKicks;
    } catch (error) {
      return error;
    }
  };

const getKick = async (id) => {
    try {
      const oneKick = await db.one("SELECT * FROM kicks WHERE id=$1", id);
      return oneKick;
    } catch (error) {
      return error;
    }
  };

// CREATE
const createKick = async (kick) => {
  try {
    const newKick = await db.one(
      "INSERT INTO kicks (name, brand, price, release_date) VALUES($1, $2, $3, $4) RETURNING *",
      [kick.name, kick.brand, kick.price, kick.release_date]
    );
    return newKick;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteKick = async (id) => {
    try {
      const deletedKick = await db.one(
        "DELETE FROM kicks WHERE id = $1 RETURNING *",
        id
      );
      return deletedKick;
    } catch (error) {
      return error;
    }
  };

//UPDATE
const updateKick = async (id, kick) => {
    try {
      const updatedKick = await db.one(
        "UPDATE kicks SET name=$1, brand=$2, price=$3, release_date=$4 where id=$5 RETURNING *",
        [kick.name, kick.brand, kick.price, kick.release_date, id]
      );
      return updatedKick;
    } catch (error) {
      return error;
    }
  };
  
  module.exports = {
    getAllKicks,
    createKick,
    getKick,
    deleteKick,
    updateKick,
  };