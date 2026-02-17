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

## `kubectl get` Commands (Most Used)

```bash
kubectl get nodes
```
List all nodes and their status.

```bash
kubectl get pods
kubectl get pods -A
kubectl get pods -o wide
```
List Pods (current namespace / all namespaces / detailed output with node + IP).

```bash
kubectl get deployments
kubectl get replicaSets
kubectl get statefulsets
```
List workload resources.

```bash
kubectl get svc
kubectl get ingress
```
List networking resources (services and ingress rules).

```bash
kubectl get configmap
kubectl get secrets
```
List configuration and secret objects.

```bash
kubectl get pv
kubectl get pvc
```
List persistent volumes and claims.

```bash
kubectl get all
```
Quick view of common resources in the current namespace.

```bash
kubectl get pods -n kube-system
```
List resources in a specific namespace.

```bash
kubectl get pods --show-labels
```
Show labels attached to each Pod.

```bash
kubectl get pod <pod-name> -o yaml
kubectl get pod <pod-name> -o json
```
Export full resource definition in YAML/JSON.

```bash
kubectl get events --sort-by=.metadata.creationTimestamp
```
Show cluster events in chronological order.

```bash
kubectl get pods --field-selector=status.phase=Running
```
Filter Pods by field (example: only running Pods).

## `kubectl create` Commands (Most Used)

```bash
kubectl create namespace dev
```
Create a new namespace.

```bash
kubectl create deployment nginx-deploy --image=nginx:latest
```
Create a deployment from command line.

```bash
kubectl create service clusterip my-svc --tcp=80:80
```
Create a ClusterIP service.

```bash
kubectl create service nodeport my-svc --tcp=80:80
```
Create a NodePort service.

```bash
kubectl create configmap app-config --from-literal=APP_ENV=prod
```
Create ConfigMap from key-value pair.

```bash
kubectl create secret generic app-secret --from-literal=DB_PASSWORD=pass123
```
Create Secret from key-value pair.

```bash
kubectl create -f deployment.yaml
```
Create resources from YAML file.

## `kubectl edit` Commands

```bash
kubectl edit deployment nginx-deploy
```
Open and edit deployment live in default editor.

```bash
kubectl edit svc my-svc
```
Edit a service resource directly.

```bash
kubectl edit configmap app-config
```
Edit ConfigMap values.

```bash
kubectl edit secret app-secret
```
Edit Secret (base64 values).

```bash
kubectl edit pod <pod-name>
```
Edit Pod spec (limited fields are mutable).

Tip:
- For safer change tracking in real projects, prefer editing YAML in Git and using `kubectl apply -f`.

## `kubectl set` Commands

`kubectl set` is used to update specific fields of existing resources quickly from CLI.

```bash
kubectl set image deployment/nginx-deploy nginx=nginx:1.26
```
Update container image in deployment (commonly used for rolling updates).

```bash
kubectl set image deployment/myapp app=myrepo/myapp:v2
```
Change app container image to a new version tag.

```bash
kubectl set resources deployment/myapp -c app --limits=cpu=500m,memory=512Mi --requests=cpu=200m,memory=256Mi
```
Set CPU/memory requests and limits for a container.

```bash
kubectl set env deployment/myapp ENV=prod LOG_LEVEL=info
```
Set environment variables in deployment Pod template.

```bash
kubectl set env deployment/myapp --from=configmap/app-config
```
Load environment variables from a ConfigMap.

```bash
kubectl set env deployment/myapp --from=secret/app-secret
```
Load environment variables from a Secret.

```bash
kubectl set env deployment/myapp ENV-
```
Remove an environment variable (`ENV`) from deployment.

Why used:
- Fast updates without manually editing YAML
- Useful for image rollout, env changes, and resource tuning
- Works well for quick operational fixes

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

---

## `kubectl logs` Commands (Detailed)

```bash
kubectl logs <pod-name>
```
Shows logs of the default container in a Pod.

```bash
kubectl logs -f <pod-name>
```
Stream logs live (`-f` = follow).

```bash
kubectl logs <pod-name> -n <namespace>
```
Show logs from a Pod in a specific namespace.

```bash
kubectl logs <pod-name> -c <container-name>
```
Show logs of a specific container (useful for multi-container Pods).

```bash
kubectl logs --since=10m <pod-name>
```
Show logs from last 10 minutes.

```bash
kubectl logs --tail=100 <pod-name>
```
Show last 100 log lines only.

```bash
kubectl logs -l app=myapp --all-containers=true
```
Show logs from multiple Pods using label selector.

Why used:
- Debug application errors
- Check startup failures/crash reasons
- Monitor live behavior during deployment

## `kubectl exec` Commands (Detailed)

```bash
kubectl exec -it <pod-name> -- /bin/sh
```
Open interactive shell inside container.

```bash
kubectl exec -it <pod-name> -c <container-name> -- /bin/sh
```
Open shell in a specific container of a multi-container Pod.

```bash
kubectl exec <pod-name> -- ls /app
```
Run one command inside a container without interactive shell.

```bash
kubectl exec <pod-name> -- env
```
Check environment variables inside running container.

```bash
kubectl exec <pod-name> -- cat /etc/hosts
```
Inspect container network host mapping/file content.

Why used:
- Verify files/config inside container
- Run debug commands quickly
- Validate env vars, process state, runtime behavior

Important:
- `kubectl logs` = observe output
- `kubectl exec` = run commands inside container

## `kubectl delete` Commands (Detailed)

`kubectl delete` is used to remove Kubernetes resources.

```bash
kubectl delete pod <pod-name>
```
Delete a Pod (if managed by Deployment/ReplicaSet, it may be recreated).

```bash
kubectl delete deployment <deployment-name>
```
Delete a deployment and its managed ReplicaSets/Pods.

```bash
kubectl delete service <service-name>
```
Delete a service.

```bash
kubectl delete configmap <configmap-name>
kubectl delete secret <secret-name>
```
Delete config or secret resources.

```bash
kubectl delete pvc <pvc-name>
kubectl delete pv <pv-name>
```
Delete storage claim/volume (careful: may affect data access).

```bash
kubectl delete -f <file.yaml>
```
Delete all resources defined in a YAML file.

```bash
kubectl delete pod -l app=myapp
```
Delete resources using label selector.

```bash
kubectl delete all --all -n <namespace>
```
Delete common workload resources in a namespace.

```bash
kubectl delete namespace <namespace-name>
```
Delete whole namespace and all resources inside it.

```bash
kubectl delete pod <pod-name> --grace-period=0 --force
```
Force delete a stuck Pod immediately (use only when necessary).

Safety tips:
- Use `kubectl get ...` first to confirm target.
- Prefer deleting by YAML in Git-based workflows.
- Avoid broad deletes like `--all` unless intentional.
