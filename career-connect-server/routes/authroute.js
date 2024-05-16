// // routes/authRoutes.js
// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// require('dotenv').config();

// const router = express.Router();

// // Register route
// router.post('/register', async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         // Create new user
//         const user = new User({ name, email, password });
//         await user.save();

//         // Create token
//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         res.status(201).json({ token });
//     } catch (error) {
//         console.error('Error registering user:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// // Login route
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Check if user exists
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         // Validate password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         // Create token
//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
// console.log(token);
//         res.json({ token });
//     } catch (error) {
//         console.error('Error logging in:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// module.exports = router;
