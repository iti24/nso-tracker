const express = require('express');
const mongoose = require('mongoose');
const PasswordChecker = require('./passwordChecker');

const app = express();

// MongoDB connection setup
mongoose.connect('mongodb_UrI', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());

// Routes
app.post('/check-password', (req, res) => {
    const password = req.body.password;
    const passwordChecker = new PasswordChecker();
    const { valid, message } = passwordChecker.checkPassword(password);
    res.json({ valid, message });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
