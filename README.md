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

☸️ Kubernetes Deployment

The application is deployed to a local Kubernetes cluster using:

Deployment

Service

A custom Helm chart (farmer-chart) is used to package and deploy the service.

helm install farmer-app ./farmer-chart

📊 Monitoring & Observability
Prometheus & Grafana

Monitoring is implemented using Prometheus and Grafana, installed via Helm.

Prometheus collects system and application metrics

Grafana visualises metrics using dashboards

Custom Metrics

Custom metrics are exposed via a /metrics endpoint using the Prometheus client.

Example metric:

http_requests_total

🔁 CI/CD Pipeline
Continuous Integration (CI)

Implemented using GitHub Actions

Triggered on every push

Builds Docker images automatically

Continuous Deployment (CD)

Implemented using Argo CD

Follows a GitOps approach

Cluster state is synchronised with GitHub

▶️ Running the Application
Port-forward service
kubectl port-forward svc/farmer-app 3000:3000

Access application
http://localhost:3000

Access metrics
http://localhost:3000/metrics