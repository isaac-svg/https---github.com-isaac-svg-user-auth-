const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: {
      type: String,
      unique: [true, "Email already taken"],
      required: [true, "Please provide an email"],
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      min: 4,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
