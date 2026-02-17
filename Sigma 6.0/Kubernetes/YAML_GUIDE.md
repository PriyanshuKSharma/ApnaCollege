# YAML Guide for Kubernetes

## What is YAML?
YAML stands for **YAML Ain't Markup Language**.
It is a human-readable data format used to write configuration files.

## Why YAML is used in Kubernetes
Kubernetes uses YAML files (called **manifests**) to define resources like:
- Pods
- Deployments
- Services
- ConfigMaps
- Secrets
- Ingress

You describe the **desired state**, and Kubernetes tries to maintain that state.

## Purpose of YAML in K8s
- Declarative infrastructure/app configuration
- Version control friendly (store in Git)
- Easy repeatable deployments
- Better collaboration across teams

## Basic YAML Rules
- Use spaces for indentation (not tabs)
- Key-value format: `key: value`
- Lists use `-`
- Indentation level matters

Example:
```yaml
app:
  name: my-app
  ports:
    - 80
    - 443
```

## How to Write YAML (Step-by-Step)

Use this order while writing Kubernetes YAML:

1. `apiVersion`
2. `kind`
3. `metadata`
4. `spec`

Template:
```yaml
apiVersion: <group/version>
kind: <ResourceType>
metadata:
  name: <resource-name>
  labels:
    app: <label-name>
spec:
  # resource-specific fields here
```

### Writing Tips
- Keep indentation consistent (2 spaces commonly used).
- Every nested level should be properly aligned.
- Strings can be plain or quoted (`"value"`).
- Boolean values should be `true` / `false`.
- Numbers should not be quoted unless you need string type.

### Lists in YAML
```yaml
containers:
  - name: app
    image: nginx:latest
  - name: sidecar
    image: busybox
```

### Dictionary/Object in YAML
```yaml
metadata:
  name: my-app
  labels:
    app: my-app
    env: dev
```

### Full Small Example (Pod)
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
    - name: nginx
      image: nginx:latest
      ports:
        - containerPort: 80
```

## Kubernetes YAML Main Fields

Most Kubernetes manifests contain:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: app
          image: nginx:latest
          ports:
            - containerPort: 80
```

Field meaning:
- `apiVersion`: Kubernetes API group/version
- `kind`: Resource type
- `metadata`: Name, labels, namespace info
- `spec`: Desired configuration

## How YAML is used

Create/update resource:
```bash
kubectl apply -f deployment.yaml
```

Delete resource:
```bash
kubectl delete -f deployment.yaml
```

View as YAML:
```bash
kubectl get deployment my-app -o yaml
```

## Multi-Document YAML
You can define multiple resources in one file using `---`.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  ENV: "prod"
---
apiVersion: v1
kind: Service
metadata:
  name: app-service
spec:
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 3000
```

## Common Mistakes
- Wrong indentation
- Using tabs instead of spaces
- Wrong `apiVersion` for resource type
- Label selector mismatch (`Service` selector not matching Pod labels)
- Typo in field names

## Best Practices
- Keep one resource per file (or logically grouped)
- Use meaningful file names (`deployment.yaml`, `service.yaml`)
- Store manifests in Git
- Use labels consistently
- Validate before applying:

```bash
kubectl apply --dry-run=client -f file.yaml
```

## Quick Summary
- YAML is the main configuration language for Kubernetes.
- It defines what should run in the cluster.
- `kubectl apply -f` reads YAML and creates/updates resources.
