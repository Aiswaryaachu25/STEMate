import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

function Login({ darkMode, setDarkMode }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter email and password!")
      return
    }
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password })
      localStorage.setItem("user", JSON.stringify(res.data.user))
      navigate("/dashboard")
    } catch (err) {
      setError(err.response?.data?.message || "Login failed")
    }
  }

  return (
    <div className="center">
      <div style={{ position: "fixed", top: "16px", right: "20px" }}>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
      <div className="card" style={{ width: "380px" }}>
        <div style={{ textAlign: "center", fontSize: "40px", marginBottom: "10px" }}>🎓</div>
        <h1 style={{ textAlign: "center", marginBottom: "6px" }}>STEMate</h1>
        <p style={{ textAlign: "center", color: "var(--subtext)", marginBottom: "28px", fontSize: "14px" }}>Welcome back!</p>
        {error && <p className="error">{error}</p>}
        <label>Email</label>
        <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-green" style={{ width: "100%", padding: "13px" }} onClick={handleLogin}>Login</button>
        <p style={{ textAlign: "center", marginTop: "18px", fontSize: "14px", color: "var(--subtext)" }}>
          No account? <Link to="/signup" style={{ color: "var(--accent)" }}>Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login