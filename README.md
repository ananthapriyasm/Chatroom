# DevOps Pipeline — Node.js Chatroom Application

## Project Overview
This project demonstrates a complete DevOps pipeline for a Node.js Chatroom Application using Docker Compose, GitHub Actions, Prometheus, and Grafana.

The application was containerized and deployed using a multi-container setup with monitoring and CI/CD automation.

---

## Tools Used
- Docker Compose
- GitHub Actions
- Prometheus
- Grafana
- Git & GitHub
- Node.js

---

## Features
- Containerized Node.js application using Docker
- Multi-container management with Docker Compose
- Automated CI/CD pipeline using GitHub Actions
- Monitoring setup with Prometheus and Grafana
- Real-time CPU, memory, and uptime monitoring
- Reduced manual deployment effort through automation

---

## Project Workflow

1. Push code to GitHub
2. GitHub Actions workflow triggers automatically
3. Build Docker containers
4. Deploy application using Docker Compose
5. Monitor application using Prometheus & Grafana

---

## Docker Compose Setup

### Run Multi-Container Application

```bash
docker-compose up -d
```

### Stop Containers

```bash
docker-compose down
```

---

## CI/CD Pipeline

Workflow file location:

```bash
.github/workflows/main.yml
```

The pipeline automates:
- Code integration
- Docker build process
- Deployment steps
- Continuous delivery workflow

---

## Monitoring Setup

### Prometheus
Used for:
- CPU monitoring
- Memory monitoring
- Container uptime metrics

### Grafana
Used for:
- Dashboard visualization
- Real-time monitoring
- Performance tracking

---

## Project Structure

```bash
nodejs-chatroom-app/
│
├── docker-compose.yml
├── Dockerfile
├── .github/
│   └── workflows/
│       └── main.yml
├── prometheus/
├── grafana/
├── src/
└── README.md
```

---

## Challenges Solved
- Docker container networking
- CI/CD workflow debugging
- Prometheus configuration issues
- Grafana dashboard setup
- Multi-container orchestration

---

## Learning Outcomes
- Docker Compose orchestration
- CI/CD automation with GitHub Actions
- Monitoring and observability
- Containerized application deployment
- DevOps pipeline implementation

---

---

## Author
Anantha Priya
