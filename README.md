# FIFA World Cup 2026 Analytics Dashboard

A full-stack analytics dashboard built using **React**, **Node.js**, **Express.js**, **Python**, **Pandas**, **NumPy**, **Matplotlib**, and **Tailwind CSS** to analyze the **FIFA World Cup 2026** tournament.

The project combines modern web development with Python-based data analytics to transform raw tournament data into meaningful insights. Users can explore match results, team performances, tournament statistics, attendance trends, host cities, and stadium information through an interactive dashboard.

---

# Project Overview

The FIFA World Cup 2026 introduces a new tournament format featuring:

- 48 Participating Teams
- 3 Host Nations
- 16 Host Cities
- 104 Scheduled Matches
- Expanded Tournament Format

This project performs data cleaning, exploratory data analysis (EDA), statistical analysis, and visualization using Python while providing an interactive React-based dashboard for data exploration.

---

# Features

## Dashboard

- Tournament Overview
- Total Matches
- Total Goals
- Tournament Statistics
- Quick Insights

## Match Analysis

- Match Schedule
- Match Results
- Goals Scored
- Highest Scoring Matches
- Biggest Victories
- Match Outcome Distribution

## Team Analysis

- Wins, Draws & Losses
- Goals Scored
- Goals Conceded
- Goal Difference
- Win Percentage
- Team Comparison

## Tournament Statistics

- Goals by Tournament Stage
- Matches by Stage
- Average Goals per Match
- Goal Distribution
- Attendance Analysis

## Stadium & Host City Analysis

- Stadium Information
- Host Cities
- Matches Hosted
- Attendance by Stadium
- Attendance by City

## Automated Insights

- Highest Scoring Team
- Best Defensive Team
- Most Entertaining Match
- Highest Attendance Match
- Lowest Attendance Match
- Tournament Summary Statistics

---

# Visualizations

The dashboard includes multiple visualizations such as:

- Bar Charts
- Horizontal Bar Charts
- Line Charts
- Pie Charts
- Histograms
- Scatter Plots
- Box Plots
- Statistical Tables

---

# Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Axios
- Recharts

### Backend

- Node.js
- Express.js

### Analytics Engine

- Python
- Pandas
- NumPy
- Matplotlib

---

# Project Structure

```text
FIFA-WorldCup-2026-Analytics/
│
├── frontend/                      # React + Tailwind Dashboard
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/                       # Express.js REST API
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── analytics/                     # Python Analytics Engine
│   ├── data/
│   │   ├── raw/
│   │   └── processed/
│   │
│   ├── notebooks/
│   │   ├── 01_Data_Loading.ipynb
│   │   ├── 02_Data_Cleaning.ipynb
│   │   ├── 03_Exploratory_Data_Analysis.ipynb
│   │   ├── 04_Statistical_Analysis.ipynb
│   │   ├── 05_Data_Visualization.ipynb
│   │   └── 06_Insights.ipynb
│   │
│   ├── src/
│   │   ├── loader.py
│   │   ├── cleaning.py
│   │   ├── preprocessing.py
│   │   ├── analysis.py
│   │   ├── statistics.py
│   │   ├── visualization.py
│   │   ├── insights.py
│   │   ├── api.py
│   │   └── utils.py
│   │
│   ├── charts/
│   │
│   ├── requirements.txt
│   └── app.py
│
├── .gitignore
├── LICENSE
└── README.md
```

---

# Dataset

The project analyzes FIFA World Cup 2026 tournament datasets containing:

- Match Schedule
- Match Results
- Teams
- Tournament Stages
- Stadiums
- Host Cities
- Referees
- Attendance
- Goals
- Match Statistics

> **Note:** The dashboard analyzes the available tournament dataset. Additional player-level analysis can be incorporated when a complete player statistics dataset becomes available.

---

# Installation

Clone the repository

```bash
git clone https://github.com/your-username/FIFA-WorldCup-2026-Analytics.git
cd FIFA-WorldCup-2026-Analytics
```

Install project dependencies

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install

# Analytics
cd ../analytics
pip install -r requirements.txt
```

Start the frontend, backend, and analytics service in separate terminals.

---

# Future Improvements

- Live Match Data Integration
- Interactive Team Comparison
- Interactive Player Comparison
- Tournament Prediction using Machine Learning
- Export Reports (PDF/PNG)
- Advanced Statistical Analysis
- Performance Metrics
- Responsive Dashboard
- Dark Mode

---

# Screenshots

Screenshots and dashboard previews will be added after project completion.

---

# Learning Outcomes

This project demonstrates practical experience in:

- Python Programming
- Data Cleaning
- Exploratory Data Analysis (EDA)
- Statistical Analysis
- Data Visualization
- REST API Development
- React.js
- Express.js
- Full-Stack Development
- Dashboard Design
- Git & GitHub Workflow

---

# Author

**Prathamesh Palekar**

If you found this project useful, consider giving it a ⭐ on GitHub.
