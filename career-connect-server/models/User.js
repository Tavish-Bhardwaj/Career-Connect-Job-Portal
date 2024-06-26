// models/User.js
const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { collection: 'users' }); // Define the collection name here

// Hash password before saving the user


const User = mongoose.model('User', userSchema);

module.exports = User;
