import React, { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"

function Dashboard({ darkMode, setDarkMode }) {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    if (!user) navigate("/login")
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/")
  }

  const features = [
    { emoji: "📖", title: "AI Tutor", desc: "Learn any STEM topic with chat", path: "/explainer" },
    { emoji: "📝", title: "Quiz Generator", desc: "Test yourself with AI quizzes", path: "/quiz" },
    { emoji: "🤔", title: "Doubt Solver", desc: "Chat with AI to solve doubts", path: "/doubt" },
    { emoji: "🗺️", title: "Study Roadmap", desc: "Get a personalized study plan", path: "/roadmap" },
    { emoji: "📚", title: "Chat History", desc: "View your saved chats", path: "/history" },
]

  return (
    <div>
      <nav>
        <h1>🎓 STEMate</h1>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <span style={{ color: "#aaa", fontSize: "14px" }}>Hello, {user?.username}</span>
          <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button className="btn btn-outline" onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <div className="container">
        <h2 style={{ marginBottom: "8px", fontSize: "24px", color: "var(--text)" }}>
  Welcome back, {user?.username}! 💪</h2>
    <p style={{ color: "var(--subtext)", marginBottom: "32px", fontSize: "14px" }}>What would you like to learn today?</p>
       <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px" }}>
         {features.map((f, i) => (
  <Link to={f.path} key={i} style={{ textDecoration: "none" }}>
    <div className="card" style={{ textAlign: "center", cursor: "pointer", transition: "transform 0.2s" }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
      <div style={{ fontSize: "40px", marginBottom: "12px" }}>{f.emoji}</div>
      <h3 style={{ marginBottom: "8px", color: "var(--text)" }}>{f.title}</h3>
      <p style={{ color: "var(--subtext)", fontSize: "13px" }}>{f.desc}</p>
    </div>
  </Link>
))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard