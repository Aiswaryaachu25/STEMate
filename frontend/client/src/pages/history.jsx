import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import ReactMarkdown from "react-markdown"

function History({ darkMode, setDarkMode }) {
  const [chats, setChats] = useState([])
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    if (!user) navigate("/login")
    fetchHistory()
  }, [])

  const fetchHistory = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/history/${user.username}`)
      setChats(res.data.chats)
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/history/${id}`)
      setChats(chats.filter(c => c._id !== id))
      if (selected?._id === id) setSelected(null)
    } catch (err) {
      console.log(err)
    }
  }

  const getEmoji = (type) => {
    if (type === "explainer") return "📖"
    if (type === "doubt") return "🤔"
    return "📚"
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
        <h2 style={{ marginBottom: "24px", color: "var(--text)" }}>📚 Chat History</h2>
        {loading ? (
          <p style={{ color: "var(--subtext)" }}>Loading...</p>
        ) : chats.length === 0 ? (
          <div className="card" style={{ textAlign: "center" }}>
            <p style={{ color: "var(--subtext)", fontSize: "16px" }}>No saved chats yet!</p>
            <p style={{ color: "var(--subtext)", fontSize: "14px", marginTop: "8px" }}>Go to AI Tutor or Doubt Solver and save a chat 😄</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "20px" }}>
            {/* Chat List */}
            <div>
              {chats.map((chat) => (
                <div key={chat._id}
                  onClick={() => setSelected(chat)}
                  style={{
                    background: selected?._id === chat._id ? "var(--accent)" : "var(--card)",
                    color: selected?._id === chat._id ? "#0a0f1e" : "var(--text)",
                    padding: "16px",
                    borderRadius: "10px",
                    marginBottom: "10px",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}>
                  <div style={{ fontSize: "20px", marginBottom: "6px" }}>{getEmoji(chat.type)}</div>
                  <h4 style={{ fontSize: "14px", marginBottom: "4px" }}>{chat.topic}</h4>
                  <p style={{ fontSize: "12px", opacity: 0.7 }}>{chat.subject} • {chat.grade}</p>
                  <p style={{ fontSize: "11px", opacity: 0.6, marginTop: "4px" }}>
                    {new Date(chat.date).toLocaleDateString()}
                  </p>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDelete(chat._id) }}
                    style={{
                      marginTop: "8px",
                      background: "transparent",
                      border: "1px solid #ff6b6b",
                      color: "#ff6b6b",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "12px"
                    }}>
                    🗑 Delete
                  </button>
                </div>
              ))}
            </div>
            {/* Chat Detail */}
            <div>
              {selected ? (
                <div className="card">
                  <h3 style={{ color: "var(--accent)", marginBottom: "16px" }}>
                    {getEmoji(selected.type)} {selected.topic}
                  </h3>
                  <p style={{ color: "var(--subtext)", fontSize: "13px", marginBottom: "20px" }}>
                    {selected.subject} • {selected.grade} • {new Date(selected.date).toLocaleDateString()}
                  </p>
                  <div style={{ maxHeight: "500px", overflowY: "auto" }}>
                    {selected.messages.map((msg, i) => (
                      <div key={i} style={{
                        marginBottom: "16px",
                        display: "flex",
                        justifyContent: msg.role === "user" ? "flex-end" : "flex-start"
                      }}>
                        <div style={{
                          background: msg.role === "user" ? "var(--accent)" : "var(--input-bg)",
                          color: msg.role === "user" ? "#0a0f1e" : "var(--text)",
                          padding: "12px 16px",
                          borderRadius: "12px",
                          maxWidth: "75%",
                          fontSize: "14px",
                          lineHeight: "1.6"
                        }}>
                          {msg.role === "user" ? msg.content : <ReactMarkdown>{msg.content}</ReactMarkdown>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="card" style={{ textAlign: "center" }}>
                  <p style={{ color: "var(--subtext)" }}>Select a chat to view 👈</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default History