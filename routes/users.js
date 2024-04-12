const express = require("express");
const router = express.Router();
const { addUser, getUsers,signup,login } = require("../controllers/users");
const { requireAuth, isAdmin} = require("../middleware/auth");


// Define routes for adding a user and retrieving all users
router.post("/",requireAuth, isAdmin, addUser);
router.get("/",requireAuth, isAdmin, getUsers);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
