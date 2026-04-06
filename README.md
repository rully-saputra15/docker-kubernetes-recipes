# Docker & Kubernetes Recipes

A hands-on learning repo with practical examples for Docker and Kubernetes. Each folder is a self-contained recipe focused on one concept.

---

## Docker Recipes

| Folder | What you learn |
|--------|---------------|
| `nginx/` | Containerize a basic nginx web server |
| `build-context/` | How Docker build context works and why it matters |
| `cmd-entrypoint/` | Difference between `CMD` and `ENTRYPOINT` |
| `multistage-builds/` | Reduce image size using multi-stage builds |
| `optimizing-images/` | Layer ordering, dependency caching, and image size tips |
| `env-var/` | Pass environment variables into a container |
| `containerize-express-app/` | Dockerize a Node.js/Express app |
| `containarizer-react-vite/` | Dockerize a React/Vite frontend app (dev + prod) |
| `color-api/` | A simple color API used across many Kubernetes examples |
| `traffic-generator/` | A shell-based traffic generator container |

---

## Kubernetes Recipes

### Core Concepts

| Folder | What you learn |
|--------|---------------|
| `object-management/` | Imperative vs declarative object management |
| `namespaces/` | Isolate workloads with Kubernetes namespaces |
| `labels-selectors/` | Organize and query resources with labels and selectors |

### Workloads

| Folder | What you learn |
|--------|---------------|
| `deployments/` | Deploy and manage stateless apps with Deployments |
| `replica-sets/` | Maintain pod replicas with ReplicaSets |
| `stateful-sets/` | Run stateful workloads with StatefulSets |
| `health-probes/` | Configure liveness and readiness probes |
| `pod-security-standards/` | Apply pod security policies (privileged, baseline, restricted) |

### Configuration & Secrets

| Folder | What you learn |
|--------|---------------|
| `config-maps/` | Inject configuration into pods using ConfigMaps |
| `secrets/` | Store and consume sensitive data with Secrets |
| `env-var/` | Expose config and secrets as environment variables |

### Networking & Services

| Folder | What you learn |
|--------|---------------|
| `services/` | ClusterIP, NodePort, and ExternalName service types |
| `headless-service/` | Use headless services for direct pod DNS discovery |
| `network-policies/` | Control pod-to-pod traffic with NetworkPolicies |

### Storage

| Folder | What you learn |
|--------|---------------|
| `storage-persistence/` | PersistentVolumes, PersistentVolumeClaims, and dynamic provisioning |
| `stateful-sets/` | Pair StatefulSets with persistent volume claims |

### Access Control

| Folder | What you learn |
|--------|---------------|
| `rbac/` | Role-Based Access Control — Roles, ClusterRoles, and bindings |
| `resource-quotas/` | Limit resource usage per namespace |

### Multi-Service & Advanced

| Folder | What you learn |
|--------|---------------|
| `compose/` | Multi-container apps with Docker Compose |
| `notes-rest-api/` | Full-stack app with compose overrides and a reverse proxy |
| `proj-mongodb/` | Deploy MongoDB as a StatefulSet with secrets and a color API |
| `key-values-app/` | Key-value store app wired to a database |
| `kustomize/` | Manage environment-specific configs with Kustomize |

---

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) 24+
- [kubectl](https://kubernetes.io/docs/tasks/tools/) configured against a running cluster (e.g. [minikube](https://minikube.sigs.k8s.io/docs/), [kind](https://kind.sigs.k8s.io/), or any cloud provider)
- [Node.js](https://nodejs.org/) + [pnpm](https://pnpm.io/) — for recipes with a JS app

---

## How to use this repo

1. Pick a topic from the tables above.
2. `cd` into that folder.
3. Read any `README.md` inside the folder (if present), or inspect the `Dockerfile` / `.yaml` files directly.
4. Apply manifests with `kubectl apply -f .` or build images with `docker build`.
