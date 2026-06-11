import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import axios from "axios"

function Explainer({ darkMode, setDarkMode }) {
  const [topic, setTopic] = useState("")
  const [subject, setSubject] = useState("Science")
  const [grade, setGrade] = useState("8th")
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [chatStarted, setChatStarted] = useState(false)
  const navigate = useNavigate()

  const handleExplain = async () => {
    if (!topic) return
    setLoading(true)
    const userMessage = `Explain "${topic}" from ${subject} for a ${grade} standard student.`
    const newMessages = [{ role: "user", content: userMessage }]
    try {
      const res = await axios.post("http://localhost:5000/api/ai/chat", { messages: newMessages })
      setMessages([...newMessages, { role: "assistant", content: res.data.result }])
      setChatStarted(true)
    } catch (err) {
      alert("Error. Please try again.")
    }
    setLoading(false)
  }

  const handleChat = async () => {
    if (!input) return
    setLoading(true)
    const newMessages = [...messages, { role: "user", content: input }]
    setMessages(newMessages)
    setInput("")
    try {
      const res = await axios.post("http://localhost:5000/api/ai/chat", { messages: newMessages })
      setMessages([...newMessages, { role: "assistant", content: res.data.result }])
    } catch (err) {
      alert("Error. Please try again.")
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
        <h2 style={{ marginBottom: "24px",color: "var(--text)" }}>📖 AI Tutor</h2>
        {!chatStarted ? (
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
              placeholder="e.g. Gravity, Photosynthesis, Pythagoras..."
              value={topic}
              onChange={e => setTopic(e.target.value)}
            />
            <button className="btn btn-green" style={{ width: "100%", padding: "13px" }} onClick={handleExplain}>
              {loading ? "Explaining..." : "Start Learning"}
            </button>
          </div>
        ) : (
          <div>
            <div style={{ background: "var(--card)", borderRadius: "12px", padding: "20px", marginBottom: "16px", maxHeight: "500px", overflowY: "auto" }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ marginBottom: "16px", display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                  <div style={{
                    background: msg.role === "user" ? "#f59e0b" : "var(--input-bg)",
                    color: msg.role === "user" ? "#0a0f1e" : "var(--text)",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    maxWidth: "75%",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    whiteSpace: "pre-wrap"
                  }}>
                    {msg.role === "user" ? msg.content : <ReactMarkdown>{msg.content}</ReactMarkdown>}
                  </div>
                </div>
              ))}
              {loading && <p style={{ color: "var(--subtext)", fontSize: "13px" }}>AI is thinking...</p>}
            <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
  <button className="btn btn-green" onClick={async () => {
    const user = JSON.parse(localStorage.getItem("user"))
    await axios.post("http://localhost:5000/api/history/save", {
      userId: user.username,
      type: "explainer",
      subject,
      grade,
      topic,
      messages
    })
    alert("Chat saved!")
  }}>💾 Save Chat</button>
  <button className="btn btn-outline" onClick={() => { setMessages([]); setChatStarted(false); setTopic("") }}>
    Start New Topic
  </button>
</div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                placeholder="Ask a follow up question..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleChat()}
                style={{ marginBottom: "0" }}
              />
              <button className="btn btn-green" onClick={handleChat} style={{ whiteSpace: "nowrap" }}>Send</button>
            </div>
            <button className="btn btn-outline" style={{ marginTop: "12px" }} onClick={() => { setMessages([]); setChatStarted(false); setTopic("") }}>
              Start New Topic
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Explainer