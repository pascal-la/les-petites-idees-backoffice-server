const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userModel);

module.exports = User;
