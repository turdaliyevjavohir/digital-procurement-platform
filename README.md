📌 Project Overview

This project is a Digital Procurement Platform for Agriculture & Food Production, developed using a microservices architecture and modern DevOps practices.
The platform connects farmers, suppliers, and buyers through independent services and is designed for scalability, reliability, and continuous delivery.

The DevOps implementation focuses on containerisation, Kubernetes deployment, monitoring, CI/CD, and GitOps.

🧱 Architecture Overview

The platform consists of the following microservices:

farmer-service – manages farmers and product listings

order-service – handles order processing

payment-service – manages payments

Each service is designed to be independently deployable and scalable.

🛠️ Technologies Used
Application

Node.js (Express)

REST APIs

DevOps & Infrastructure

Docker

Kubernetes (Docker Desktop)

Helm

Prometheus

Grafana

GitHub Actions (CI)

Argo CD (CD / GitOps)

📦 Containerisation

Each microservice is containerised using Docker.
A Docker image is built for the farmer-service and used for Kubernetes deployment.

Example:

docker build -t farmer-service:1.0 ./farmer-service

☸️ Kubernetes Deployment

The application is deployed to a local Kubernetes cluster using:

Deployment

Service

A custom Helm chart (farmer-chart) is used to package and deploy the service in a reusable and configurable way.

Example:

helm install farmer-app ./farmer-chart

📊 Monitoring & Observability
Prometheus & Grafana

Monitoring is implemented using Prometheus and Grafana, installed via Helm (kube-prometheus-stack).

Prometheus collects system and application metrics

Grafana visualises metrics using dashboards and queries

Custom Application Metrics

Custom metrics are exposed using the Prometheus Node.js client:

/metrics endpoint

Example metric: http_requests_total

These metrics are queried using PromQL in Grafana.

🔎 Metrics Scraping

Prometheus scrapes application metrics using a ServiceMonitor, enabling automatic service discovery without manual configuration changes.

🔁 CI/CD Pipeline
Continuous Integration (CI)

CI is implemented using GitHub Actions:

Triggered on every push to the main branch

Automatically builds the Docker image

Ensures code and Dockerfile validity

Continuous Deployment (CD) – GitOps

Argo CD is used for Continuous Deployment following a GitOps approach:

Kubernetes manifests and Helm charts are stored in GitHub

Argo CD continuously synchronises the cluster state with the repository

Deployment updates occur automatically after Git changes

▶️ Running & Testing the Application
Port-forward the service
kubectl port-forward svc/farmer-app 3000:3000

Access the application
http://localhost:3000

Access metrics
http://localhost:3000/metrics