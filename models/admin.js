const mongoose = require("mongoose");


const adminSchema = new mongoose.Schema({

    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, default: "admin" },
  },
  { timestamps: true });

const adminmodel = mongoose.model("adminModel", adminSchema);
module.exports = adminmodel;



