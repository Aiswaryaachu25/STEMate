import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import ReactMarkdown from "react-markdown"

function Quiz({ darkMode, setDarkMode }) {
  const [topic, setTopic] = useState("")
  const [subject, setSubject] = useState("Science")
  const [grade, setGrade] = useState("8th")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleQuiz = async () => {
    if (!topic) return
    setLoading(true)
    try {
      const res = await axios.post("http://localhost:5000/api/ai/quiz", { topic, subject, grade })
      setResult(res.data.result)
    } catch (err) {
      setResult("Error generating quiz. Please try again.")
    }
    setLoading(false)
  }

  return (
    <div>
      <nav>
        <h1>🎓 STEMate</h1>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button className="btn btn-outline" onClick={() => navigate("/dashboard")}>← Dashboard</button>
        </div>
      </nav>
      <div className="container">
        <h2 style={{ marginBottom: "24px" ,color: "var(--text)" }}>📝 Quiz Generator</h2>
        <div className="card">
          <label>Subject</label>
          <select value={subject} onChange={e => setSubject(e.target.value)}>
            <option>Science</option>
            <option>Technology</option>
            <option>Engineering</option>
            <option>Mathematics</option>
          </select>
          <label>Grade</label>
          <select value={grade} onChange={e => setGrade(e.target.value)}>
            <option>6th</option>
            <option>7th</option>
            <option>8th</option>
            <option>9th</option>
            <option>10th</option>
            <option>11th</option>
            <option>12th</option>
          </select>
          <label>Topic</label>
          <input
            type="text"
            placeholder="e.g. Gravity, Algebra, Circuits..."
            value={topic}
            onChange={e => setTopic(e.target.value)}
          />
          <button className="btn btn-green" style={{ width: "100%", padding: "13px" }} onClick={handleQuiz}>
            {loading ? "Generating..." : "Generate Quiz"}
          </button>
        </div>
        {result && (
          <div className="result-box">
            <ReactMarkdown>{result}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  )
}

export default Quiz