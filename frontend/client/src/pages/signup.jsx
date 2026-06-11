import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

function Signup({ darkMode, setDarkMode }) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSignup = async () => {
    if (!username || !email || !password) {
      setError("Please fill all fields!")
      return
    }
    try {
      await axios.post("http://localhost:5000/api/auth/signup", { username, email, password })
      navigate("/login")
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed")
    }
  }

  return (
    <div className="center">
      <div style={{ position: "fixed", top: "16px", right: "20px" }}>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
      <div className="card" style={{ width: "400px" }}>
        <div style={{ textAlign: "center", fontSize: "40px", marginBottom: "10px" }}>🎓</div>
        <h1 style={{ textAlign: "center", marginBottom: "6px" }}>STEMate</h1>
        <p style={{ textAlign: "center", color: "var(--subtext)", marginBottom: "28px", fontSize: "14px" }}>Create your account</p>
        {error && <p className="error">{error}</p>}
        <label>Username</label>
        <input type="text" placeholder="Your name" value={username} onChange={e => setUsername(e.target.value)} />
        <label>Email</label>
        <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-green" style={{ width: "100%", padding: "13px" }} onClick={handleSignup}>Register</button>
        <p style={{ textAlign: "center", marginTop: "18px", fontSize: "14px", color: "var(--subtext)" }}>
          Already have an account? <Link to="/login" style={{ color: "var(--accent)" }}>login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup