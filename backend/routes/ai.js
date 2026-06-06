const express = require("express")
const router = express.Router()
const Groq = require("groq-sdk")

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

// AI Topic Explainer
router.post("/explain", async (req, res) => {
    try {
        const { topic, subject, grade } = req.body
        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [{
                role: "user",
                content: `Explain "${topic}" from ${subject} for a ${grade} standard student. Use simple examples suitable for their level.`
            }]
        })
        res.json({ result: completion.choices[0].message.content })
    } catch (err) {
        res.status(500).json({ message: "AI error" })
    }
})

// AI Quiz Generator
router.post("/quiz", async (req, res) => {
    try {
        const { topic, subject, grade } = req.body
        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [{
                role: "user",
                content: `Generate 5 multiple choice questions about "${topic}" from ${subject} for a ${grade} standard student.
                Format each question exactly like this:
                Q: question here
                A) option1
                B) option2
                C) option3
                D) option4
                Answer: A`
            }]
        })
        res.json({ result: completion.choices[0].message.content })
    } catch (err) {
        res.status(500).json({ message: "AI error" })
    }
})

// AI Doubt Solver
router.post("/doubt", async (req, res) => {
    try {
        const { doubt, subject, grade } = req.body
        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [{
                role: "user",
                content: `A ${grade} standard student has this doubt in ${subject}: "${doubt}". Answer it clearly and simply.`
            }]
        })
        res.json({ result: completion.choices[0].message.content })
    } catch (err) {
        res.status(500).json({ message: "AI error" })
    }
})

// AI Study Roadmap
router.post("/roadmap", async (req, res) => {
    try {
        const { subject, grade, topic } = req.body
        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [{
                role: "user",
                content: `Create a 4 week study roadmap for a ${grade} standard student who wants to learn "${topic}" in ${subject}. Break it down week by week with specific topics and goals suitable for their grade level.`
            }]
        })
        res.json({ result: completion.choices[0].message.content })
    } catch (err) {
        res.status(500).json({ message: "AI error" })
    }
})

// AI Chat
router.post("/chat", async (req, res) => {
    try {
        const { messages } = req.body
        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: messages
        })
        res.json({ result: completion.choices[0].message.content })
    } catch (err) {
        res.status(500).json({ message: "AI error" })
    }
})

module.exports = router