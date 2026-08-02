# FIFA World Cup 2026 Analytics Dashboard

A full-stack analytics dashboard built using **React**, **Node.js**, **Express.js**, **Python**, **Pandas**, **NumPy**, **Matplotlib**, **Recharts**, and **Tailwind CSS** to analyze the **FIFA World Cup 2026** tournament.

The project combines Python-based data preprocessing with a modern React dashboard, allowing users to explore tournament statistics, match analytics, and team performance through interactive visualizations.

---

## Features

### Dashboard Overview

- Total Matches
- Total Goals
- Total Attendance
- Average Goals per Match

### Tournament Analytics

- Goals by Round
- Match Result Distribution
- Home vs Away Goals

### Team Analytics

- Top Scoring Teams
- Most Wins
- Most Losses
- Goal Difference
- Average Possession

### Match Analytics

- Matches by Round
- Attendance by Round
- Top Attendance Matches
- Top Goal Matches

---

## Dashboard Preview

> Dashboard screenshots will be added here.

---

## Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Axios
- Recharts
- React Router

### Backend

- Node.js
- Express.js
- REST APIs

### Data Analytics

- Python
- Pandas
- NumPy
- Matplotlib

---

## Project Architecture

```text
FIFA-World-Cup-2026-Analytics-Dashboard
│
├── Frontend
│   ├── src
│   │   ├── components
│   │   ├── charts
│   │   ├── hooks
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   └── package.json
│
├── Backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── utils
│   │   └── app.js
│   ├── server.js
│   └── package.json
│
├── Analytics
│   ├── notebooks
│   ├── charts
│   └── matches_cleaned.csv
│
├── README.md
└── .gitignore
```

---

## REST API Endpoints

### Statistics

```
GET /api/stats/dashboard
GET /api/stats/goals-round
GET /api/stats/results
GET /api/stats/home-away-goals
GET /api/stats/matches-round
GET /api/stats/attendance-round
GET /api/stats/top-attendance
GET /api/stats/top-goals
```

### Teams

```
GET /api/teams
GET /api/teams/:team
GET /api/teams/top-scoring
GET /api/teams/wins
GET /api/teams/losses
GET /api/teams/goal-difference
GET /api/teams/possession
```

---

## Dataset

The dashboard analyzes FIFA World Cup 2026 tournament data including:

- Match Results
- Teams
- Tournament Rounds
- Attendance
- Stadiums
- Host Cities
- Referees
- Goals
- Match Statistics

The dataset was cleaned and preprocessed using Python before being consumed by the backend APIs.

---

## Installation

Clone the repository

```bash
git clone https://github.com/your-username/FIFA-World-Cup-2026-Analytics-Dashboard.git
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

### Backend

```bash
cd Backend
npm install
npm run dev
```

---

## Future Improvements

- Interactive Team Comparison
- Search & Filter Matches
- Dark Mode
- Export Dashboard Reports
- Live Match Data Integration
- Player Statistics Dashboard
- Predictive Analytics using Machine Learning

---

## Skills Demonstrated

- Full Stack Development
- REST API Development
- React.js
- Express.js
- Data Cleaning
- Exploratory Data Analysis (EDA)
- Data Visualization
- Dashboard Design
- Git & GitHub

---
