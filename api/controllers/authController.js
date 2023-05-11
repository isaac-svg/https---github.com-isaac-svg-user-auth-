const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.registration = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password) {
    return res.json({
      success: false,
      message: "please provide all credentials",
    });
  }
  try {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hasedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      password: hasedPassword,
    });
    jwt.sign(
      { id: user._id, username: user.username },
      process.env.SECRET,
      {},
      (err, token) => {
        if (err) throw err;
        res
          .cookie("token", token)
          .status(201)
          .json({ success: true, username: user.username, id: user._id });
      }
    );
  } catch (error) {
    res.json({ success: false, message: "user creation failed" });
  }
};
exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({
      success: false,
      message: "Please provide all credentials",
    });
  }
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({
        success: false,
        message: "Username or Password incorect",
      });
    }
    const isValidUser = await bcrypt.compare(password, user.password);
    if (!isValidUser) {
      return res.json({
        success: false,
        message: "Username or Password incorect",
      });
    }
    const token = req.cookies?.token;
    console.log(token);
    jwt.verify(token, process.env.SECRET, {}, (err, userData) => {
      if (err) throw err;

      res.cookie("token", token).json({
        success: true,
        message: "User is authorized",
        username: userData.username,
        id: userData.id,
      });
    });
  } catch (error) {
    res.json({ success: false, message: error.message, token });
  }
};

exports.logout = async (req, res) => {
  try {
    return res
      .cookie("token", "")
      .json({ success: true, message: "Logout sucessfull" });
  } catch (error) {
    return res.json({ success: false, message: "logout failed" });
  }
};

exports.profile = async (req, res) => {
  const { token } = req.cookies;

  try {
    const isVerifiedUser = jwt.verify(token, process.env.SECRET);
    const { id } = isVerifiedUser;
    const user = await User.findById(id);
    if (!user) {
      res.json({
        success: true,
        message: "User is not authorized",
        username: null,
        id: null,
      });
    }
    res.json({
      success: true,
      message: "User is authorized",
      username: user.username,
      id,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
