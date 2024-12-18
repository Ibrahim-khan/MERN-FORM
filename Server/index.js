const express = require('express');
const app = express();
app.use(express.json());

require('./db/connection');
const Users = require('./Models/User');
const User = require('./Models/User');

app.post("/", async(req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
})


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});