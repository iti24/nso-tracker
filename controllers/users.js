const User = require('../models/users');

const addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User details saved successfully" });
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

module.exports = {
  addUser,
  getUsers
};
