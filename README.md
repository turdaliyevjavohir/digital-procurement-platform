# 🌾 Digital Procurement Platform for Agriculture & Food Production

## 📌 Project Overview
This project is a **Digital Procurement Platform for Agriculture & Food Production**, developed using a **microservices architecture** and modern **DevOps practices**.

The platform connects **farmers, suppliers, and buyers** through independent services and is designed for **scalability, reliability, and continuous delivery**.

The DevOps implementation focuses on **containerisation, Kubernetes deployment, monitoring, CI/CD, and GitOps**.

---

## 🧱 Architecture Overview
The platform consists of the following microservices:

- **farmer-service** – manages farmers and product listings  
- **order-service** – handles order processing  
- **payment-service** – manages payments  

Each service is designed to be **independently deployable and scalable**.

---

## 🛠️ Technologies Used

### 🔧 Application
- Node.js (Express)
- REST APIs

### ☁️ DevOps & Infrastructure
- Docker
- Kubernetes (Docker Desktop)
- Helm
- Prometheus
- Grafana
- GitHub Actions (CI)
- Argo CD (CD / GitOps)

---

## 📦 Containerisation
Each microservice is containerised using **Docker**.

Example:
```bash
docker build -t farmer-service:1.0 ./farmer-service