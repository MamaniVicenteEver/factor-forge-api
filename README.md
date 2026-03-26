# Factor-Forge AI | Architectural Blueprint Generator

<div align="center">
  <img width="45%" alt="Architecture Blueprint" src="https://github.com/user-attachments/assets/1c58dc1d-a306-4bb0-97ef-f7f2076ffafe" />
  <img width="45%" alt="AI Documentation" src="https://github.com/user-attachments/assets/1f163793-dadd-485a-a984-914d738ecca6" />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/DeepSeek_AI-007BFF?logo=openai&logoColor=white" alt="DeepSeek" />
  <img src="https://img.shields.io/badge/Hexagonal_Architecture-FF6600?logo=architecture&logoColor=white" alt="Hexagonal" />
  <img src="https://img.shields.io/badge/12--Factor_App-222222?logo=docker&logoColor=white" alt="12 Factor" />
  <img src="https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white" alt="Jest" />
</div>

A high-performance engineering microservice designed to automate the creation of architectural documentation. By leveraging **DeepSeek-V3** large language models, Factor-Forge AI transforms conceptual ideas into rigorous, 12-Factor compliant Markdown reports.

## Overview

This project is a sophisticated backend implementation that bridges the gap between conceptual software design and cloud-native standards. It is engineered following **Hexagonal Architecture** (Ports and Adapters) to ensure complete decoupling between business logic and external infrastructure like AI providers or web frameworks.

The system enforces a strict separation of concerns, proving that even small microservices can achieve enterprise-grade scalability and maintainability.

## Key Features

- **AI-Powered Blueprinting**: Intelligent analysis of software ideas to generate specific recommendations for each of the 12 factors.
- **Hexagonal Core**: Pure domain logic isolated from external technical details, facilitating testing and provider swapping (e.g., Gemini to DeepSeek).
- **Cloud-Native DNA**: Native implementation of 8+ factors including Stateless Processes, Port Binding, and Graceful Shutdowns.
- **Zero-Emoji Professionalism**: Documentation output optimized for high-level engineering environments.
- **Built-in Observability**: Structured JSON logging via Pino for real-time event streaming and monitoring.

## Technology Stack

### Core Engine
- **Runtime**: Node.js (v20+ / v22 LTS)
- **Framework**: Express.js (High-performance routing)
- **Intelligence**: DeepSeek AI (Advanced LLM Inference)

### Engineering & DevOps
- **Architecture**: Hexagonal (Domain / Application / Infrastructure)
- **Monitoring**: Pino (Structured Logging)
- **Documentation**: Swagger / OpenAPI 3.0
- **Environment**: Dotenv (Factor III compliance)

http://googleusercontent.com/image_content/185



## System Architecture

The repository enforces a strict hierarchical separation to protect the domain:

- **`src/domain/`**: Pure business rules and entities. No dependencies on external libraries.
- **`src/application/`**: Use cases and orchestration logic. It acts as a bridge between the core and the world.
- **`src/infrastructure/`**: Technical implementation details. Hosts the DeepSeek client, Express controllers, and configuration layers.

## 12-Factor App Compliance Matrix

| Factor | Evidence | Engineering Commentary |
|---------|------------|------|
| **I: Codebase** | Git + .gitignore | Single codebase tracked in revision control for all deployments. |
| **II: Dependencies** | `package.json` | Explicitly declared and isolated dependencies. No reliance on system-wide packages. |
| **III: Config** | `env.js` + `.env` | Strict separation of config from code. Injected via environment variables. |
| **VI: Processes** | Stateless Controllers | Zero-persistence architecture. Each request is independent and idempotent. |
| **VII: Port binding** | Autonomous Server | Self-contained HTTP services. No dependency on external web servers. |
| **IX: Disposability** | Graceful Shutdown | Fast startup and clean shutdown via SIGTERM/SIGINT handlers. |
| **XI: Logs** | Pino Stdout | Logs treated as event streams. Native structured logging for cloud-native sinks. |

## Repository Structure

```text
.
├── src/
│   ├── domain/                # Entities and Repository Interfaces
│   ├── application/           # Use cases (GenerateBlueprint)
│   └── infrastructure/        # Controllers, AI Clients, Routes, Config
├── tests/                     # Integration and Unit testing suite
├── index.js                   # Entry point with Graceful Shutdown logic
├── .env.example               # Configuration template
├── .gitignore                 # Dependency and secret isolation
└── README.md                  # Project documentation
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- DeepSeek API Key

### Local Development

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd factor-forge-api
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Add your DEEPSEEK_API_KEY to .env
   ```

3. **Execution**
   ```bash
   # Development with native Watch Mode
   npm run dev

   # Production Build
   npm start
   ```

## API Endpoints

### Health Monitoring
```bash
curl -X GET http://localhost:3000/health -i
```

### AI Blueprint Generation
```bash
curl -X POST http://localhost:3000/v1/blueprint \
     -H "Content-Type: application/json" \
     -d '{"idea": "Real-time streaming platform for university lectures"}'
```

---

**Developed by**: Ever | Jala University  
**Project**: Factor-Forge AI  
**Year**: 2026 | *Construye hoy lo que mañana recordarás.*
