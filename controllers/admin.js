const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config");

// Signup logic
const signup = async (req, res) => {
  console.log("signup");
  try {
    const { username, email, password, role} = req.body;
    console.log(req.body);

    // Check if the username already exists
    const existingUser = await Admin.findOne({ username });
    console.log(existingUser);

    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const existingemail = await Admin.findOne({ email });
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
    const newAdmin = new Admin({
      username: username,
      email: email,
      password: hashedPassword,
      role: role,
      
    });
    await newAdmin.save();
    // const token = jwt.sign({ userId: newAdmin._id,userRole:user.role }, config.jwtSecret, {
    //   expiresIn: "1h", // Token expires in 1 hour (adjust as needed)
    // });

    res.status(200).json({ newAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { emailuserId, password } = req.body;
    console.log("emailuserId", emailuserId, "password", password);
    const admin = await  Admin.find({
      $or: [
        { username: { $regex: emailuserId, $options: "i" } },
        { email: { $regex: emailuserId, $options: "i" } },
      ],
    });
    console.log("admin",admin);

    if (!admin) {
      return res.status(403).json({ message: "Invalid Credentials" });
    }

    const matchedPassword = await bcrypt.compare(password, admin[0].password);

    console.log("matchedPassword", matchedPassword);
    if (!matchedPassword) {
      return res.status(401).json({ error: "Invalid credential" });
    }
    const token = jwt.sign({ userId: admin[0]._id,userRole:admin[0].role }, config.jwtSecret, {
      expiresIn: "1h", // Token expires in 1 hour (adjust as needed)
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { signup, login };
