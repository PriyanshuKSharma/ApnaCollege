# Kubernetes and Microservices

## What is Kubernetes?
Kubernetes (K8s) is an open-source container orchestration platform.
It helps manage, deploy, scale, and monitor containerized applications automatically.

## Kubernetes at a Glance (Diagram)
```mermaid
flowchart TD
  U[Users] --> LB[Load Balancer / Ingress]
  LB --> SVC[Service]
  SVC --> P1[Pod 1]
  SVC --> P2[Pod 2]
  SVC --> P3[Pod 3]
  P1 --> C1[Container App]
  P2 --> C2[Container App]
  P3 --> C3[Container App]
  CP[Control Plane] --> SCH[Scheduler]
  CP --> CM[Controller Manager]
  SCH --> P1
  SCH --> P2
  SCH --> P3
```

## Why use Kubernetes?
- Automates deployment and scaling
- Self-healing (restarts failed containers)
- Load balances traffic across containers
- Supports rolling updates and rollbacks
- Works well in cloud and on-prem environments

## What are Microservices?
Microservices is an architecture style where an application is split into many small, independent services.
Each service handles one business function and can be developed, deployed, and scaled separately.

## Microservices Diagram
```mermaid
flowchart LR
  UI[Frontend / API Gateway] --> A[Auth Service]
  UI --> B[User Service]
  UI --> C[Order Service]
  UI --> D[Payment Service]
  A --> DBA[(Auth DB)]
  B --> DBU[(User DB)]
  C --> DBO[(Order DB)]
  D --> DBP[(Payment DB)]
```

## Monolith vs Microservices (Quick View)
| Monolith | Microservices |
| --- | --- |
| Single large application | Many small services |
| One codebase/deployment | Separate services/deployments |
| Harder to scale specific parts | Scale each service independently |
| Tightly coupled | Loosely coupled |

## How Kubernetes and Microservices work together
Kubernetes is commonly used to run microservices in containers.
It manages service discovery, scaling, health checks, and deployment lifecycle for each service.

## Kubernetes + Microservices (Combined Diagram)
```mermaid
flowchart TB
  Client[Client] --> Ingress[Ingress]
  Ingress --> AuthSvc[Auth Service]
  Ingress --> UserSvc[User Service]
  Ingress --> OrderSvc[Order Service]

  AuthSvc --> AuthPods[Auth Pods ReplicaSet]
  UserSvc --> UserPods[User Pods ReplicaSet]
  OrderSvc --> OrderPods[Order Pods ReplicaSet]

  AuthPods --> Node1[Worker Node 1]
  UserPods --> Node2[Worker Node 2]
  OrderPods --> Node3[Worker Node 3]
```
