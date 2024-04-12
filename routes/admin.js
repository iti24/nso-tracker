const express = require("express");
const router = express.Router();
const { signup,login } = require("../controllers/admin");

// Define routes for adding a admin 

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
