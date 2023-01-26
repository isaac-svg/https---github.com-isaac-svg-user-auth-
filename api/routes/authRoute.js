const express = require("express");
const {
  registration,
  login,
  profile,
  logout,
} = require("../controllers/authController");
const router = express.Router();

router.route("/register").post(registration);

router.route("/login").post(login);

router.route("/profile").get(profile);
router.route("/logout").post(logout);

module.exports = router;
