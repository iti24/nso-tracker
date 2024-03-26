const express = require("express");
const router = express.Router();
const { addUser, getUsers } = require("../controllers/users");

// Define routes for adding a user and retrieving all users
router.post("/", addUser);
router.get("/", getUsers);

module.exports = router;
