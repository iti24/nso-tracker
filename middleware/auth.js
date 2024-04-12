const User = require("../models/users");
const Admin = require("../models/admin");

const jwt = require("jsonwebtoken");
const config = require("../config");


const requireAuth = async (req, res, next) => {
  try {
    console.log("header", req.headers);
    const token = req.headers.authorization;
    console.log("token", token);

    // Check if the token exists
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Verify the token
    const decodedToken = await jwt.verify(token,  config.jwtSecret);
    console.log("decoded", decodedToken);

    // Find the user by ID from the decoded token
    let users;
    if (decodedToken.userRole === "user") {
      console.log("inside middle ware, decoded token", decodedToken);
      users = await User.findById(decodedToken.userId);
    } else if (decodedToken.userRole === "admin") {
      users = await Admin.findById(decodedToken.userId);
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
    console.log("user", users);

    if (!users) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Attach the user to the request object
    req.user = users;
    next(); // Continue to the next middleware/route handler
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Unauthorized" });
  }
};
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    // User is an admin
    next();
  } else {
    res.status(403).json({ message: "Unauthorized. Admin access required." });
  }
};
module.exports = { requireAuth, isAdmin };
