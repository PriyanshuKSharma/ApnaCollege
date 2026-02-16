# Kubernetes Commands Cheat Sheet (With Information)

## Minikube Commands

### 1) Cluster Lifecycle
```bash
minikube start
```
Starts a local Kubernetes cluster.

```bash
minikube stop
```
Stops the running cluster without deleting it.

```bash
minikube delete
```
Deletes the cluster and its local state.

```bash
minikube status
```
Shows whether cluster, kubelet, and API server are running.

```bash
minikube pause
minikube unpause
```
Pauses/resumes Kubernetes resources for temporary freeze.

### 2) Cluster Access
```bash
minikube ip
```
Prints Minikube node IP address.

```bash
minikube ssh
```
SSH into the Minikube VM/node.

```bash
minikube dashboard
```
Opens Kubernetes dashboard in browser.

```bash
minikube kubectl -- get pods -A
```
Runs kubectl through Minikube’s bundled kubectl.

### 3) Service Access
```bash
minikube service <service-name>
```
Opens service in browser (NodePort based).

```bash
minikube service <service-name> --url
```
Prints service URL only.

```bash
minikube tunnel
```
Creates network route for `LoadBalancer` services on local machine.

### 4) Addons
```bash
minikube addons list
```
Shows all available addons and their status.

```bash
minikube addons enable ingress
minikube addons disable ingress
```
Enables/disables ingress controller addon.

### 5) Images and Cache
```bash
minikube image ls
```
Lists images available inside Minikube.

```bash
minikube image load myapp:latest
```
Loads local Docker image into Minikube.

```bash
minikube cache add nginx:latest
```
Caches image for faster future cluster starts.

### 6) Profiles and Config
```bash
minikube profile list
```
Lists Minikube profiles (multiple clusters).

```bash
minikube start -p demo
```
Starts a cluster with profile name `demo`.

```bash
minikube config set memory 4096
minikube config set cpus 2
```
Sets default VM resources for Minikube.

### 7) Logs and Troubleshooting
```bash
minikube logs
```
Shows cluster logs for debugging.

```bash
minikube update-check
```
Checks if a newer Minikube version is available.

```bash
minikube doctor
```
Runs diagnostics for common setup issues.

---

## kubectl Commands

### 1) Cluster and Nodes
```bash
kubectl cluster-info
```
Displays control plane and core service endpoints.

```bash
kubectl get nodes
```
Lists cluster nodes and their readiness.

```bash
kubectl get namespaces
```
Lists all namespaces.

### 2) Pods
```bash
kubectl get pods
kubectl get pods -A
kubectl get pods -o wide
```
Lists Pods (current namespace / all namespaces / detailed node-IP view).

```bash
kubectl describe pod <pod-name>
```
Detailed Pod info including events and errors.

```bash
kubectl logs <pod-name>
kubectl logs -f <pod-name>
```
Shows Pod logs once / live stream.

```bash
kubectl exec -it <pod-name> -- /bin/sh
```
Opens shell inside running container.

```bash
kubectl delete pod <pod-name>
```
Deletes Pod (controller may recreate it if managed).

### 3) Deployments and Rollouts
```bash
kubectl get deployments
```
Lists deployments.

```bash
kubectl describe deployment <name>
```
Shows deployment details and events.

```bash
kubectl scale deployment <name> --replicas=3
```
Scales deployment to desired replica count.

```bash
kubectl rollout status deployment/<name>
```
Checks rollout progress.

```bash
kubectl rollout undo deployment/<name>
```
Rolls back to previous deployment revision.

### 4) Services and Ingress
```bash
kubectl get svc
kubectl describe svc <service-name>
```
Lists/describes services and ports.

```bash
kubectl get ingress
kubectl describe ingress <ingress-name>
```
Lists/describes ingress rules.

### 5) ConfigMap, Secret, PV, PVC
```bash
kubectl get configmap
kubectl describe configmap <name>
```
Checks configuration data objects.

```bash
kubectl get secrets
kubectl describe secret <name>
```
Checks secrets metadata (values are not fully shown in plain text).

```bash
kubectl get pv
kubectl get pvc
kubectl describe pvc <name>
```
Views persistent volumes/claims and their binding state.

### 6) Apply and Delete Resources
```bash
kubectl apply -f <file.yaml>
```
Creates/updates resources from YAML.

```bash
kubectl delete -f <file.yaml>
```
Deletes resources defined in YAML.

```bash
kubectl get all
```
Quick view of common workload resources in namespace.

---

## Quick Practice Workflow
```bash
minikube start
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl get pods,svc
minikube service <service-name> --url
```

What this does:
1. Starts local cluster.
2. Deploys your app.
3. Exposes app with service.
4. Verifies resources.
5. Prints URL to access app.
