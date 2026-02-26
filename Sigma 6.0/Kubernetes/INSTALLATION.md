# Kubernetes Tools Installation Guide

This guide provides step-by-step instructions for installing Kubernetes tools on Linux, macOS, and Windows.

## Tools Overview

- **kubectl**: Kubernetes command-line tool for interacting with clusters
- **minikube**: Local Kubernetes cluster for development
- **kubens**: kubectl plugin for easy namespace switching
- **Kubernetes**: The container orchestration platform itself

## Prerequisites

### System Requirements
- **CPU**: 2+ cores recommended
- **RAM**: 4GB+ recommended (8GB+ for better performance)
- **Storage**: 20GB+ free disk space
- **Virtualization**: Enabled in BIOS (for minikube)

---

## Linux Installation

### 1. Install kubectl

#### Option A: Using curl (Recommended)
```bash
# Download the latest release
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

# Make it executable
chmod +x kubectl

# Move to PATH
sudo mv kubectl /usr/local/bin/

# Verify installation
kubectl version --client
```

#### Option B: Using Package Manager

**Ubuntu/Debian:**
```bash
# Update package index
sudo apt update

# Install kubectl
sudo apt install -y kubectl

# Verify
kubectl version --client
```

**CentOS/RHEL/Fedora:**
```bash
# For CentOS/RHEL
cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-\$basearch
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
EOF

sudo yum install -y kubectl

# For Fedora
# sudo dnf install -y kubectl
```

### 2. Install minikube

```bash
# Download minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64

# Make it executable
sudo chmod +x minikube-linux-amd64

# Move to PATH
sudo mv minikube-linux-amd64 /usr/local/bin/minikube

# Verify installation
minikube version
```

### 3. Install kubens (kubectl plugin)

```bash
# Download kubens
curl -LO https://github.com/ahmetb/kubectx/releases/latest/download/kubens-linux-x86_64.tar.gz

# Extract
tar -zxvf kubens-linux-x86_64.tar.gz

# Move to PATH
sudo mv kubens /usr/local/bin/

# Verify
kubens --version
```

### 4. Install Docker (Required for minikube)

```bash
# Update system
sudo apt update

# Install required packages
sudo apt install -y apt-transport-https ca-certificates curl gnupg lsb-release

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Add user to docker group (optional, allows running docker without sudo)
sudo usermod -aG docker $USER

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker

# Verify
docker --version
```

### 5. Start minikube

```bash
# Start minikube with Docker driver
minikube start --driver=docker

# Or use virtualbox/kvm2 if available
# minikube start --driver=virtualbox
# minikube start --driver=kvm2

# Check status
minikube status

# Get cluster info
kubectl cluster-info
```

---

## macOS Installation

### 1. Install kubectl

#### Option A: Using Homebrew (Recommended)
```bash
# Install Homebrew if not already installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install kubectl
brew install kubectl

# Verify
kubectl version --client
```

#### Option B: Using curl
```bash
# Download kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"

# Make executable
chmod +x kubectl

# Move to PATH
sudo mv kubectl /usr/local/bin/

# Verify
kubectl version --client
```

### 2. Install minikube

#### Option A: Using Homebrew (Recommended)
```bash
brew install minikube

# Verify
minikube version
```

#### Option B: Using curl
```bash
# Download minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64

# Make executable
sudo chmod +x minikube-darwin-amd64

# Move to PATH
sudo mv minikube-darwin-amd64 /usr/local/bin/minikube

# Verify
minikube version
```

### 3. Install Docker Desktop

1. Download Docker Desktop for Mac from: https://www.docker.com/products/docker-desktop
2. Install the .dmg file
3. Start Docker Desktop from Applications
4. Verify installation:
```bash
docker --version
```

### 4. Install kubens

#### Option A: Using Homebrew
```bash
brew install kubectx

# Verify (kubens is included with kubectx)
kubens --version
```

#### Option B: Using curl
```bash
# Download kubens
curl -LO https://github.com/ahmetb/kubectx/releases/latest/download/kubens-darwin-x86_64.tar.gz

# Extract
tar -zxvf kubens-darwin-x86_64.tar.gz

# Move to PATH
sudo mv kubens /usr/local/bin/

# Verify
kubens --version
```

### 5. Start minikube

```bash
# Start minikube with Docker driver
minikube start --driver=docker

# Check status
minikube status

# Get cluster info
kubectl cluster-info
```

---

## Windows Installation

### 1. Install kubectl

#### Option A: Using Chocolatey (Recommended)
```powershell
# Install Chocolatey if not already installed
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

# Install kubectl
choco install kubernetes-cli

# Verify
kubectl version --client
```

#### Option B: Manual Download
1. Download kubectl.exe from: https://dl.k8s.io/release/v1.28.0/bin/windows/amd64/kubectl.exe
2. Add the directory containing kubectl.exe to your PATH
3. Open PowerShell and verify:
```powershell
kubectl version --client
```

### 2. Install minikube

#### Option A: Using Chocolatey (Recommended)
```powershell
choco install minikube

# Verify
minikube version
```

#### Option B: Manual Download
1. Download minikube-windows-amd64.exe from: https://storage.googleapis.com/minikube/releases/latest/minikube-windows-amd64.exe
2. Rename to minikube.exe
3. Add to your PATH
4. Open PowerShell and verify:
```powershell
minikube version
```

### 3. Install Docker Desktop

1. Download Docker Desktop for Windows from: https://www.docker.com/products/docker-desktop
2. Install the .exe file
3. Start Docker Desktop
4. Verify installation:
```powershell
docker --version
```

### 4. Install kubens

#### Option A: Using Chocolatey
```powershell
choco install kubectx

# Verify
kubens --version
```

#### Option B: Manual Download
1. Download kubens-windows-amd64.tar.gz from: https://github.com/ahmetb/kubectx/releases/latest
2. Extract the tar.gz file
3. Add kubens.exe to your PATH
4. Verify:
```powershell
kubens --version
```

### 5. Enable Virtualization

1. Check if virtualization is enabled in BIOS
2. For Windows 10/11 Pro: Enable Hyper-V
   - Open PowerShell as Administrator
   - Run: `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All`
   - Restart computer

### 6. Start minikube

```powershell
# Start minikube with Docker driver
minikube start --driver=docker

# Or use hyperv driver if Docker is not available
# minikube start --driver=hyperv

# Check status
minikube status

# Get cluster info
kubectl cluster-info
```

---

## Post-Installation Verification

### 1. Verify All Tools
```bash
# Check kubectl
kubectl version --client

# Check minikube
minikube version

# Check kubens
kubens --version

# Check Docker
docker --version
```

### 2. Test minikube Cluster
```bash
# Start cluster
minikube start

# Check cluster status
minikube status

# Get cluster info
kubectl cluster-info

# List nodes
kubectl get nodes

# List namespaces
kubectl get namespaces

# Deploy a test application
kubectl create deployment hello-minikube --image=k8s.gcr.io/echoserver:1.4
kubectl expose deployment hello-minikube --type=NodePort --port=8080

# Get service URL
minikube service hello-minikube --url

# Clean up
kubectl delete service hello-minikube
kubectl delete deployment hello-minikube
```

### 3. Test kubens Plugin
```bash
# List namespaces
kubens

# Switch to kube-system namespace
kubens kube-system

# Switch back to default
kubens default

# Show current namespace
kubens -c
```

---

## Troubleshooting

### Common Issues

#### 1. minikube start fails
```bash
# Check virtualization
minikube diagnose

# Try different driver
minikube start --driver=virtualbox  # Linux
minikube start --driver=hyperv      # Windows
minikube start --driver=hyperkit    # macOS

# Clean start
minikube delete --all
minikube start
```

#### 2. kubectl connection refused
```bash
# Check cluster status
minikube status

# Restart cluster
minikube stop
minikube start

# Check kubeconfig
kubectl config current-context
```

#### 3. Docker permission issues (Linux)
```bash
# Add user to docker group
sudo usermod -aG docker $USER

# Restart session or run:
newgrp docker
```

#### 4. Hyper-V issues (Windows)
```powershell
# Check Hyper-V status
Get-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-All

# Enable Hyper-V
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

#### 5. macOS security issues
```bash
# Allow system extensions for virtualization
# Go to System Preferences > Security & Privacy > General
# Allow software from "Oracle" or virtualization provider
```

### Getting Help
- **kubectl**: `kubectl --help` or `kubectl <command> --help`
- **minikube**: `minikube --help` or check https://minikube.sigs.k8s.io/docs/
- **kubens**: `kubens --help`
- **Community**: Kubernetes Slack, Stack Overflow, GitHub issues

---

## Next Steps

1. **Learn kubectl commands**: Check `COMMANDS.md` for detailed command reference
2. **Deploy your first app**: Follow the Quick Practice Workflow in `COMMANDS.md`
3. **Explore Kubernetes concepts**: Read `README.md` for architecture and components
4. **Practice with YAML**: Check `YAML_GUIDE.md` for resource definitions

Happy Kuberneting! 🚀</content>
<parameter name="filePath">/home/virtualuser/ApnaCollege/Sigma 6.0/Kubernetes/INSTALLATION.md