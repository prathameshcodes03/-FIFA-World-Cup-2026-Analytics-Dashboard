FIFA World Cup 2026 Analytics Dashboard

A full-stack analytics dashboard built using React, Node.js, Express.js, Python, Pandas, NumPy, Matplotlib, and Tailwind CSS to analyze the FIFA World Cup 2026 tournament.

The project combines modern web development with Python-based data analytics to transform raw tournament data into meaningful insights. It features an interactive dashboard for exploring match results, team performances, tournament statistics, attendance trends, and host city analysis.

⸻

Project Overview

The FIFA World Cup 2026 marks the beginning of a new tournament format featuring:

* 48 Participating Teams
* 3 Host Nations
* 16 Host Cities
* 104 Scheduled Matches
* Expanded Tournament Format

The project performs data cleaning, exploratory data analysis (EDA), statistical analysis, and visualization using Python, while providing an interactive user experience through a modern React-based dashboard.

⸻

Features

Dashboard

* Tournament Overview
* Overall Tournament Statistics
* Total Matches
* Total Goals
* Tournament Summary
* Quick Insights

⸻

Match Analysis

* Match Schedule
* Match Results
* Goals Scored
* Highest Scoring Matches
* Biggest Victories
* Match Outcome Distribution

⸻

Team Analysis

* Wins
* Draws
* Losses
* Goals Scored
* Goals Conceded
* Goal Difference
* Win Percentage
* Team Comparison

⸻

Tournament Statistics

* Goals by Tournament Stage
* Matches by Stage
* Average Goals per Match
* Goal Distribution
* Attendance Analysis

⸻

Stadium & Host City Analysis

* Stadium Information
* Host Cities
* Matches Hosted
* Attendance by Stadium
* Attendance by City

⸻

Automated Insights

The analytics engine automatically generates tournament insights including:

* Highest Scoring Team
* Best Defensive Team
* Most Entertaining Match
* Highest Attendance Match
* Lowest Attendance Match
* Tournament Summary Statistics

⸻

Data Analysis

The backend performs:

* Data Cleaning
* Data Preprocessing
* Exploratory Data Analysis (EDA)
* Statistical Analysis
* Trend Analysis
* Automated Insight Generation
* Data Visualization

⸻

Visualizations

The dashboard includes various visualizations such as:

* Bar Charts
* Horizontal Bar Charts
* Line Charts
* Pie Charts
* Histograms
* Scatter Plots
* Box Plots
* Statistical Tables

⸻

Tech Stack

Frontend

* React.js
* Tailwind CSS
* Axios
* Recharts

Backend

* Node.js
* Express.js

Analytics Engine

* Python
* Pandas
* NumPy
* Matplotlib

⸻

Project Structure

FIFA-WorldCup-2026-Analytics/
│
├── frontend/
│
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── StatCard.jsx
│   │   │   ├── ChartCard.jsx
│   │   │   └── Loader.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Matches.jsx
│   │   │   ├── Teams.jsx
│   │   │   ├── Stadiums.jsx
│   │   │   ├── Trends.jsx
│   │   │   └── Insights.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│
│   ├── server.js
│   ├── package.json
│   │
│   ├── routes/
│   ├── controllers/
│   └── api/
│
├── analytics/
│
│   ├── app.py
│   ├── requirements.txt
│   │
│   ├── data/
│   │   ├── raw/
│   │   └── processed/
│   │
│   ├── notebooks/
│   │
│   ├── src/
│   │   ├── loader.py
│   │   ├── preprocessing.py
│   │   ├── analysis.py
│   │   ├── statistics.py
│   │   ├── visualization.py
│   │   ├── insights.py
│   │   └── utils.py
│   │
│   └── charts/
│
├── screenshots/
│
├── README.md
├── LICENSE
└── .gitignore

⸻

Dataset

The project analyzes FIFA World Cup 2026 tournament datasets containing:

* Match Schedule
* Match Results
* Teams
* Tournament Stages
* Stadiums
* Host Cities
* Referees
* Attendance
* Goals
* Match Statistics

The dashboard analyzes the available tournament data. Additional player-level analytics can be incorporated when a complete player statistics dataset is available.

⸻

Installation

Clone the repository

git clone https://github.com/your-username/FIFA-WorldCup-2026-Analytics.git

Navigate to the project

cd FIFA-WorldCup-2026-Analytics

Install frontend dependencies

cd frontend
npm install

Install backend dependencies

cd ../backend
npm install

Install Python dependencies

cd ../analytics
pip install -r requirements.txt

Run the React application

npm run dev

Run the Node.js server

node server.js

Run the Python analytics service

python app.py

⸻

Future Improvements

* Live Match Data Integration
* Interactive Team Comparison
* Interactive Player Comparison
* Tournament Prediction using Machine Learning
* Export Dashboard Reports
* Advanced Statistical Analysis
* Performance Metrics
* Responsive Mobile Dashboard

⸻

Learning Outcomes

This project demonstrates practical experience in:

* Python Programming
* Pandas
* NumPy
* Matplotlib
* Data Cleaning
* Exploratory Data Analysis (EDA)
* Statistical Analysis
* REST API Development
* React.js
* Express.js
* Full Stack Development
* Dashboard Design
* Git & GitHub Workflow

