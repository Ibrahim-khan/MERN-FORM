const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./Models/User');

// Initialize app
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to database
require('./db/connection');

// Home page route
app.get("/", async(req,res) => {
    res.send("Welcome to home page");
})

app.get('/getUsers', async(req, res) => {
    try {
        const users = await User.find({}, '_id name email phone password');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: "Error fetching users", error});
    }
});


// create user
app.post("/", async(req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({message: "Error saving user", error});
    }
});



// start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});