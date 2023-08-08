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
  
  module.exports = {
    getAllKicks,
    createKick,
    getKick,
  };