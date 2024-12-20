const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ibrahim2013khan:ibrahimKhan2013@cluster0.8jk8f.mongodb.net/form-data', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Database connected successfully"))
.catch(() => console.error("Database connection failed:", error));