# 🌾 Digital Procurement Platform for Agriculture & Food Production

## 📌 Project Overview
This project is a **Digital Procurement Platform for Agriculture & Food Production** developed using a **microservices architecture** and modern **DevOps practices**.

The platform enables farmers, suppliers, and buyers to interact through independent services and is designed to support **scalability, reliability, and continuous delivery**.

The DevOps implementation demonstrates how cloud-native technologies can be applied to modernise agricultural digital platforms.

---

## 🧱 System Architecture
The platform follows a **microservices-based architecture**. Each service is independently deployable and scalable.

### Microservices
- **farmer-service** – manages farmers and agricultural product listings  
- **order-service** – handles order creation and processing  
- **payment-service** – manages payment-related operations  

---

## 🛠️ Technologies Used

### Application Layer
- Node.js (Express)
- RESTful APIs

### DevOps & Infrastructure
- Docker
- Kubernetes (Docker Desktop)
- Helm
- Prometheus
- Grafana
- GitHub Actions (CI)
- Argo CD (CD / GitOps)
- Git & GitHub

---

## 📦 Containerisation
Each microservice is containerised using **Docker**, ensuring consistency across development and deployment environments.

### Example Docker Build
```bash
docker build -t farmer-service:1.0 ./farmer-service
```



☸️ Kubernetes Deployment
The application is deployed to a local Kubernetes cluster using standard Kubernetes resources:

Deployment – manages application pods

Service – exposes the application internally

A custom Helm chart (farmer-chart) is used to package and manage the deployment in a reusable and configurable manner.

Helm Deployment
helm install farmer-app ./farmer-chart
Helm simplifies deployment by templating Kubernetes manifests and enabling versioned releases.

📊 Monitoring & Observability
Prometheus & Grafana
Monitoring is implemented using Prometheus and Grafana, installed via Helm.

Prometheus collects system and application metrics

Grafana visualises metrics through dashboards and queries

Custom Application Metrics
The application exposes metrics using the Prometheus Node.js client.

Metrics endpoint: /metrics

Example metric:

http_requests_total

Metrics are queried and analysed using PromQL within Grafana.

🔎 Metrics Collection
Prometheus automatically discovers and scrapes application metrics using Kubernetes service discovery, enabling reliable and automated monitoring without manual configuration.

🔁 CI/CD Pipeline
Continuous Integration (CI)
CI is implemented using GitHub Actions:

Triggered on every push to the main branch

Automatically builds Docker images

Validates application and container configuration

Continuous Deployment (CD) – GitOps
Argo CD is used to implement Continuous Deployment using a GitOps approach:

Kubernetes manifests and Helm charts are stored in GitHub

Argo CD continuously synchronises the Kubernetes cluster state with the repository

Any changes pushed to GitHub are automatically reflected in the cluster

▶️ Running & Testing the Application
Port-forward the Service
kubectl port-forward svc/farmer-app 3000:3000
Access the Application
http://localhost:3000
Access Metrics
http://localhost:3000/metrics