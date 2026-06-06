const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const User = require("../models/user")

// Signup
router.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body
        const existing = await User.findOne({ email })
        if (existing) return res.status(400).json({ message: "Email already exists" })
        const hashed = await bcrypt.hash(password, 10)
        const user = await User.create({ username, email, password: hashed })
        res.status(201).json({ message: "Account created", user: { username: user.username, email: user.email } })
    } catch (err) {
        res.status(500).json({ message: "Server error" })
    }
})

// Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ message: "No account found" })
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ message: "Wrong password" })
        res.status(200).json({ message: "Login successful", user: { username: user.username, email: user.email } })
    } catch (err) {
        res.status(500).json({ message: "Server error" })
    }
})

module.exports = router