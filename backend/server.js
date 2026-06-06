require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connection = require("./config/db")
const authRoutes = require("./routes/auth")
const aiRoutes = require("./routes/ai")
const historyRoutes = require("./routes/history")


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/ai", aiRoutes)
app.use("/api/history", historyRoutes)

// Test route
app.get("/", (req, res) => {
    res.send("STEMate API is running!")
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})