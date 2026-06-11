import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Dashboard from "./pages/dashboard"
import Explainer from "./pages/explainer"
import Quiz from "./pages/quiz"
import DoubtSolver from "./pages/doubtsolver"
import Roadmap from "./pages/roadmap"
import History from "./pages/history"
import Landing from "./pages/landing"
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
   <div className={darkMode ? "" : "light"} style={{ 
  minHeight: "100vh", 
  background: darkMode ? "#0d1b2a" : "#f0f4f8"
}}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/login" element={<Login darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/signup" element={<Signup darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/dashboard" element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/explainer" element={<Explainer darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/quiz" element={<Quiz darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/doubt" element={<DoubtSolver darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/roadmap" element={<Roadmap darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/history" element={<History darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App