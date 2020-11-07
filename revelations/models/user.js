// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
// const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true},
  email: { type: String, required: true },
  password: String,
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
