// globalRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User")
const bcrypt = require("bcrypt");
const saltRounds = 10; // Number of salt rounds for bcrypt
//validator
const { body, validationResult } = require("express-validator");


//all users
router.get("/", async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({users:users});
    } catch (error) {
      res.status(500).json({ error: "error fetching users" });
    }
});
//register

router.post(
  "/register",
    [
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format'),
    body("name").notEmpty().withMessage("name is required"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 2 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ status: "error", errors: errors.array() });
      }
      const { email, password,name } = req.body;
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      // Create a new user object with the hashed password
      const userData = {name,email,password: hashedPassword};
      const user = new User(userData);
      // Save the user to the database
      await user.save();

      res.status(200).json({ status: "success", msg: "Registered!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", msg: "Error registering user" });
    }
  }
);
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Verify password
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });

      res.json({ token });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: error });
    }
});

module.exports = router;
