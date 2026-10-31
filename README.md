# Campus404 – Gamified Coding Learning Platform

**Learn. Practice. Build. Level Up.**

Campus404 is a gamified coding learning platform designed to help engineering students learn programming through structured lessons, hands-on coding challenges, practical exercises, and progress tracking.

The platform aims to make programming education more interactive, engaging, and accessible by combining learning resources with practical coding experiences and gamification.

---

## 🎯 Project Objective

The main objective of Campus404 is to provide students with a centralized platform where they can:

* Learn programming concepts step by step.
* Practice coding through interactive challenges.
* Improve programming and problem-solving skills.
* Track their learning progress.
* Earn experience points (XP) and rewards.
* Develop confidence through practical coding exercises.

## ✨ Key Features

### 1. Structured Learning

* Organized programming curriculum.
* Beginner-friendly learning approach.
* Python learning content and lessons.

### 2. Coding Practice

* Programming exercises and challenges.
* Code submission and evaluation.
* Automated test-based assessment.

### 3. Progress Tracking

* Track learning activities.
* Monitor coding progress.
* Maintain student learning records.

### 4. Gamification

* Experience points (XP).
* Rewards for learning activities.
* Progress-based learning experience.

### 5. Coding Evaluation System

* Separate Judge API and worker architecture.
* Processes coding submissions.
* Evaluates submitted code using test cases.

## 🛠️ Technology Stack

| Component           | Technology           |
| ------------------- | -------------------- |
| Frontend            | React                |
| Backend API         | Python FastAPI       |
| Database            | MySQL                |
| Caching / Queue     | Redis                |
| Code Evaluation     | Judge API and Worker |
| Containerization    | Docker               |
| Database Management | phpMyAdmin           |
| Version Control     | Git and GitHub       |

## 🏗️ Project Architecture

Campus404 is organized into multiple components:

* **client/** – Frontend application.
* **api/** – Main backend API and application logic.
* **judge/** – Code evaluation API and worker.
* **docs/** – Project documentation.
* **infra/** – Infrastructure and deployment configuration.

### Docker Services

The development environment includes services for:

* React Client
* FastAPI Backend
* MySQL Database
* Redis
* Judge API
* Judge Worker
* Gateway
* phpMyAdmin

## ⚙️ Getting Started

### Prerequisites

Install the following software before running the project:

* Git
* Docker Desktop
* Node.js and npm
* Python

### 1. Clone the Repository

```bash
git clone https://github.com/akshathrai/campus404_code.git
```

### 2. Navigate to the Project

```bash
cd campus404_code
```

### 3. Configure Environment Variables

Configure the required environment variables using the project's environment configuration and example files.

### 4. Start the Project

Use the Docker Compose configuration available in the project root to start the services.

```bash
docker compose up --build
```

**Note:** Service configuration and environment variables may need to be completed before the application starts successfully.

## 📈 Development Progress

Campus404 is under active development.

Current project work includes:

* Frontend application development.
* Backend API development using FastAPI.
* Database models and migrations.
* Programming curriculum and Python seed data.
* Coding submission processing.
* Progress tracking and XP functionality.
* Separate Judge API and worker.
* Automated testing.
* Docker-based development environment.

## 🚀 Future Enhancements

Planned improvements include:

* More programming languages and learning paths.
* Additional coding challenges and difficulty levels.
* Expanded student progress dashboards.
* More gamification features and achievements.
* Improved mobile accessibility.
* Additional learning resources and practical projects.

## 🎓 Project Information

**Project Name:** Campus404
**Project Type:** Software Engineering Project
**Domain:** Education Technology / EdTech
**Target Audience:** Engineering Students

## 👨‍💻 Development

Developed as a student software engineering project.

**GitHub Repository:**
https://github.com/akshathrai/campus404_code

---

⭐ If you find this project interesting, consider giving the repository a star!
