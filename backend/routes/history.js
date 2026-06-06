const express = require("express")
const router = express.Router()
const History = require("../models/history")

// Save chat
router.post("/save", async (req, res) => {
    try {
        const { userId, type, subject, grade, topic, messages } = req.body
        await History.create({ userId, type, subject, grade, topic, messages })
        res.json({ message: "Saved!" })
    } catch (err) {
        res.status(500).json({ message: "Error saving" })
    }
})

// Get all chats for a user
router.get("/:userId", async (req, res) => {
    try {
        const chats = await History.find({ userId: req.params.userId }).sort({ date: -1 })
        res.json({ chats })
    } catch (err) {
        res.status(500).json({ message: "Error fetching" })
    }
})

// Delete a chat
router.delete("/:id", async (req, res) => {
    try {
        await History.findByIdAndDelete(req.params.id)
        res.json({ message: "Deleted!" })
    } catch (err) {
        res.status(500).json({ message: "Error deleting" })
    }
})

module.exports = router