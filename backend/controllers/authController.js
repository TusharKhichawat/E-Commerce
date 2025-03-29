const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { JWT_SECRET } = require("../config/config");

// Mock Database (Replace with actual DB logic)
const users = [];

const register = async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });

    res.json({ msg: "User registered successfully!" });
};

const login = async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).json({ msg: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ msg: "Invalid username or password" });
    }

    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });
};

module.exports = { register, login };
