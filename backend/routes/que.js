const express = require('express');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/authmiddleware');

const router = express.Router();

const users = [
    { id: 1, username: "testuser", password: "password123" }
];

// **Login Route**
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: "Login successful!", token });
});
router.get('/questions', verifyToken, (req, res) => {
    const questions = [
        { id: 1, question: "What is Node.js?" },
        { id: 2, question: "What is JWT?" },
        { id: 3, question: "How does token authentication work?" }
    ];
    res.json({ questions });
});
module.exports = router;
