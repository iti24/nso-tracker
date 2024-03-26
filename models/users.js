
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    FirstName: {
        type: String,
        require: true,
    },
    LastName: {
        type: String,
        require: true,
    },
    Email: {
        type: String,
        index: true,
    },
    Username:{
        type: String,
        index: true,
    },
    Password: {
        type: String,
        require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

