const User = require('../models/users');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config");


const addUser = async (req, res) => {
  try {
    // Destructure the required fields from the request body
    const { firstName, lastName, email, username, password } = req.body;

    // Check if all required fields are present
    if (!firstName || !lastName || !email || !username || !password) {
      return res.status(400).json({ error: "Please provide all required fields" });
    }

    // Create a new user instance
    const user = new User({
      firstName,
      lastName,
      email,
      username,
      password
    });

    // Save the user to the database
    await user.save();

    // Return the created user as JSON response
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getUsers = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; // Current page number (default to 1)
      const perPage = parseInt(req.query.perPage) || 10;
      const skip = (page - 1) * perPage;
      const users = await User.find().skip(skip).limit(perPage);
  
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  const signup = async (req, res) => {
    console.log("signup");
    try {
      const { firstName,lastName, email,username, password } = req.body;
      console.log(req.body);
  
      // Check if the username already exists
      const existingUser = await User.findOne({ username });
      console.log(existingUser);
  
      if (existingUser) {
        return res.status(400).json({ error: "Username already exists" });
      }
  
      const existingemail = await User.findOne({ email });
      console.log(existingemail);
      if (existingemail) {
        return res.status(400).json({ error: "email already exists" });
      }
  
      // Hash the password
      const saltRounds = 10;
      console.log(saltRounds);
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      console.log(hashedPassword);
  
      // Create a new user
      const newUser = new User({
        firstName:firstName,
        lastName:lastName,
        username: username,
        email: email,
        password: hashedPassword,
        
      });
      await newUser.save();
      
  
      res.status(200).json({ newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  const login = async (req, res) => {
    try {
      const { emailuserId, password } = req.body;
      console.log("emailuserId", emailuserId, "password", password);
      const user = await User.find({
        $or: [
          { username: { $regex: emailuserId, $options: "i" } },
          { email: { $regex: emailuserId, $options: "i" } },
        ],
      });
      console.log(user);
  
      if (!user) {
        return res.status(403).json({ message: "Invalid Credentials" });
      }
  
      const matchedPassword = await bcrypt.compare(password, user[0].password );
  
      console.log("matchedPassword", matchedPassword);
      if (!matchedPassword) {
        return res.status(401).json({ error: "Invalid credential" });
      }
      const token = jwt.sign({ userId: user[0]._id,userRole:user[0].role }, config.jwtSecret, {
        expiresIn: "1h", // Token expires in 1 hour (adjust as needed)
      });
  
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

module.exports = {
  addUser,
  getUsers,
  signup,
  login
};

