# 🎓 STEMate — AI-Powered STEM Study Assistant

> Your personal AI tutor for every STEM subject, every grade, every doubt.

Built for **DSH Hacks V1** | Theme: **AI x STEM Education**

## 💡 Problem

Students struggle with STEM subjects because textbooks are boring, YouTube videos are generic, private tutors are expensive, and one-size-fits-all education ignores different grade levels.

## ✅ Solution

STEMate is an AI-powered web app that acts as a personal STEM tutor for every student. It adapts to their grade level and subject, making learning interactive, personalized and accessible to everyone for free.

## 🚀 Features

- 📖 **AI Tutor** — Grade-based topic explanations with follow-up chat
- 📝 **Quiz Generator** — AI-generated MCQ quizzes by topic and grade
- 🤔 **Doubt Solver** — Interactive chat to solve any STEM doubt
- 🗺️ **Study Roadmap** — Personalized 4-week study plan
- 📚 **Chat History** — Save, view and delete previous conversations
- 🌙 **Dark/Light Mode** — Comfortable studying in any environment

## 🛠️ Tech Stack

- **Frontend** — React.js, React Router, Axios, React Markdown
- **Backend** — Node.js, Express.js
- **Database** — MongoDB, Mongoose
- **AI** — Groq API with LLaMA 3.3 70B
- **Auth** — bcrypt

## ⚙️ Setup

### 1. Clone the repo

```
git clone https://github.com/yourusername/stemate.git
cd stemate
```

### 2. Backend setup

```
cd server
npm install
```

Create server/.env file:

```
PORT=5000
DB_URL=mongodb://localhost:27017/stemate
GROQ_API_KEY=your_groq_api_key_here
```

Run backend:

```
node app.js
```

### 3. Frontend setup

```
cd client
npm install
npm start
```

### 4. Open browser

```
http://localhost:3000
```

## 🔑 Get Free Groq API Key

1. Go to https://console.groq.com
2. Sign up for free
3. Click API Keys and create a key
4. Paste it in server/.env

## 📁 Project Structure

```
stemate/
├── client/
│   └── src/
│       ├── pages/
│       │   ├── landing.jsx
│       │   ├── login.jsx
│       │   ├── signup.jsx
│       │   ├── dashboard.jsx
│       │   ├── explainer.jsx
│       │   ├── quiz.jsx
│       │   ├── doubtsolver.jsx
│       │   ├── roadmap.jsx
│       │   └── history.jsx
│       ├── App.jsx
│       └── App.css
└── backend/
    ├── config/db.js
    ├── models/
    │   ├── user.js
    │   └── history.js
    ├── routes/
    │   ├── auth.js
    │   ├── ai.js
    │   └── history.js
    └── app.js
```

## 🎯 Impact

STEMate makes quality STEM education accessible to every student regardless of their location or financial background.

## 🔮 Future Plans

- Mobile app version
- Teacher dashboard
- More languages support
- Offline mode
- Gamification with badges and streaks


Built for DSH Hacks V1 — AI x STEM Education
