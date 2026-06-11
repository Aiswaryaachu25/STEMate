import React from "react"
import { useNavigate } from "react-router-dom"

const symbols = ["∑", "π", "∞", "√", "∫", "Δ", "⚗", "🔬", "🧬", "💡", "⚡", "🔭", "⚙️", "🧪", "∂", "θ", "λ", "μ", "Ω", "∇"]

function Landing({ darkMode, setDarkMode }) {
  const navigate = useNavigate()

  return (
    <div>
      {/* Floating Symbols */}
      <div className="symbols">
        {symbols.map((s, i) => (
          <div key={i} className="symbol" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${10 + Math.random() * 20}s`,
            fontSize: `${16 + Math.random() * 24}px`
          }}>
            {s}
          </div>
        ))}
      </div>

      <nav>
        <h1>🎓 STEMate</h1>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button className="btn btn-outline" onClick={() => navigate("/login")}>Login</button>
          <button className="btn btn-green" onClick={() => navigate("/signup")}>Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ textAlign: "center", padding: "100px 20px 60px", position: "relative", zIndex: 1 }}>
        
        <h1 style={{ fontSize: "52px", color: "var(--text)", marginBottom: "20px", lineHeight: "1.2" }}>
          Your Personal <span style={{ color: "var(--accent)" }}>AI Tutor</span><br />for STEM Subjects
        </h1>
        <p style={{ fontSize: "18px", color: "var(--subtext)", marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px", lineHeight: "1.7" }}>
          Get personalized explanations, solve doubts, generate quizzes and create study roadmaps — all powered by AI and adapted to your grade level.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <button className="btn btn-green" style={{ padding: "16px 36px", fontSize: "16px" }} onClick={() => navigate("/signup")}>
            Start Learning Free 🚀
          </button>
          <button className="btn btn-outline" style={{ padding: "16px 36px", fontSize: "16px" }} onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", justifyContent: "center", gap: "60px", padding: "40px", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
        {[
          { number: "4", label: "STEM Subjects" },
          { number: "7", label: "Grade Levels" },
          { number: "4", label: "AI Features" },
          { number: "∞", label: "Questions Answered" },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "40px", fontWeight: "bold", color: "var(--accent)" }}>{s.number}</div>
            <div style={{ color: "var(--subtext)", fontSize: "14px" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div style={{ padding: "60px 40px", maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <h2 style={{ textAlign: "center", fontSize: "36px", marginBottom: "12px", color: "var(--text)" }}>
          Everything you need to <span style={{ color: "var(--accent)" }}>ace STEM</span>
        </h2>
        <p style={{ textAlign: "center", color: "var(--subtext)", marginBottom: "48px", fontSize: "16px" }}>
          Powered by advanced AI, personalized for your grade level
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "24px" }}>
          {[
            { emoji: "📖", title: "AI Tutor", desc: "Clear explanations tailored to your grade with interactive follow-up chat" },
            { emoji: "📝", title: "Quiz Generator", desc: "AI-generated MCQ quizzes based on your topic and grade level" },
            { emoji: "🤔", title: "Doubt Solver", desc: "Ask any doubt and get instant answers in a friendly chat" },
            { emoji: "🗺️", title: "Study Roadmap", desc: "Personalized 4-week study plan for any STEM topic" },
            { emoji: "📚", title: "Chat History", desc: "Save and revisit your previous AI conversations" },
            { emoji: "🌙", title: "Dark/Light Mode", desc: "Study comfortably in any environment" },
          ].map((f, i) => (
            <div key={i} className="card" style={{ textAlign: "center", transition: "transform 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>{f.emoji}</div>
              <h3 style={{ color: "var(--accent)", marginBottom: "10px", fontSize: "16px" }}>{f.title}</h3>
              <p style={{ color: "var(--subtext)", fontSize: "13px", lineHeight: "1.7" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div style={{ padding: "60px 40px", background: "var(--card-solid)", marginTop: "40px", position: "relative", zIndex: 1 }}>
        <h2 style={{ textAlign: "center", fontSize: "36px", marginBottom: "12px", color: "var(--text)" }}>
          How it <span style={{ color: "var(--accent)" }}>works</span>
        </h2>
        <p style={{ textAlign: "center", color: "var(--subtext)", marginBottom: "48px", fontSize: "16px" }}>
          Get started in 4 simple steps
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", maxWidth: "900px", margin: "0 auto" }}>
          {[
            { step: "1", title: "Sign Up Free", desc: "Create your account in seconds — no credit card needed" },
            { step: "2", title: "Pick a Feature", desc: "Choose AI Tutor, Quiz, Doubt Solver or Roadmap" },
            { step: "3", title: "Select Your Grade", desc: "Tell STEMate your grade for personalized content" },
            { step: "4", title: "Start Learning!", desc: "Get instant AI-powered help for any STEM topic" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center", width: "180px" }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "50%",
                background: "var(--accent)", color: "white",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px", fontWeight: "bold", margin: "0 auto 16px",
                boxShadow: "0 4px 20px rgba(255,107,53,0.4)"
              }}>{s.step}</div>
              <h4 style={{ color: "var(--text)", marginBottom: "8px", fontSize: "15px" }}>{s.title}</h4>
              <p style={{ color: "var(--subtext)", fontSize: "13px", lineHeight: "1.6" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", padding: "80px 20px", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: "40px", color: "var(--text)", marginBottom: "16px" }}>
          Ready to learn <span style={{ color: "var(--accent)" }}>smarter?</span>
        </h2>
        <p style={{ color: "var(--subtext)", marginBottom: "36px", fontSize: "16px" }}>
          Join students who are already using STEMate to ace their studies!
        </p>
        <button className="btn btn-green" style={{ padding: "16px 48px", fontSize: "18px" }} onClick={() => navigate("/signup")}>
          Get Started Free 🚀
        </button>
      </div>

      {/* Footer */}
      <div style={{ background: "var(--card-solid)", padding: "24px 40px", textAlign: "center", borderTop: "1px solid var(--border)", position: "relative", zIndex: 1 }}>
        <p style={{ color: "var(--subtext)", fontSize: "13px" }}>
          🎓 STEMate | AI x STEM Education |
        </p>
      </div>
    </div>
  )
}

export default Landing