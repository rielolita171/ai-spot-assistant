# 📍 Local-First AI Assistant (AI Spot Tracker)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Architecture](https://img.shields.io/badge/architecture-Local--First%20%7C%20Hybrid-orange.svg)
![AI Stack](https://img.shields.io/badge/AI-Ollama%20%7C%20DeepSeek%20%7C%20Llava-success.svg)

A privacy-focused, hyper-local personal assistant and workspace tracker. This project utilizes a **100% free and self-hosted tech stack** to provide context-aware spot recommendations, utilizing your live GPS location, a private vector database of your personal notes, and local AI reasoning.

No cloud subscriptions. No credit cards. Your data stays on your devices.

## ✨ Core Features

- **Intelligent Discovery:** Vector search based on abstract descriptions (e.g., "cozy afternoon") using `nomic-embed-text` and ChromaDB.
- **Local Receipt Scanner:** Captures receipts and runs OCR locally using Ollama (`llava` vision model) to summarize spending.
- **Connectivity & Tech Vault:** Runs free JS-based speed tests and securely vaults WiFi passwords locally using Capacitor Preferences.
- **Private "Brain" (Self-Hosted):** Stores your personal memories and preferences on your own local server (Mini PC).
- **Offline Note Caching:** Saves observations locally on your phone (via SQLite) and auto-syncs them to your server when online.
- **Media Compression:** Compresses images via HTML5 Canvas before syncing to save your server's bandwidth.
- **NFC Tap-to-Share:** Seamlessly share cafe locations and AI reasoning with friends via NDEF deep links.

## 🏗️ System Architecture & Tech Stack

This project uses a **Distributed Hybrid Architecture**:

* **Frontend (Mobile/Web):** SvelteKit + Tailwind CSS wrapped in **Capacitor JS** for native Android compilation.
* **Backend (API Orchestrator):** **FastAPI** (Python) running on a local server (e.g., Mini PC), exposed securely via **Localtunnel** or **Tailscale**.
* **Vector Database:** **ChromaDB** for semantic search capabilities.
* **Relational Database:** **SQLite / PostgreSQL** for structured data (spots, receipts, wifi records).
* **AI Stack (100% Local):** **Ollama** running:
  - `nomic-embed-text` (Embeddings)
  - `llava` (Vision / OCR)
  - `deepseek-r1:7b` (Text Generation / Reasoning)

## 🗺️ Development Roadmap

This project is built in 5 phases:
1. **Foundation:** SvelteKit, Capacitor, Light/Dark mode, SQLite CRUD.
2. **Sensors & Connectivity:** Geolocation, Speedtest, WiFi Vault, Sorting logic.
3. **The Local AI Brain:** FastAPI, Ollama (`llava`), Image compression, Receipt OCR.
4. **Intelligent Discovery:** ChromaDB, Embedding scripts, Semantic Search UI.
5. **Social & Polish:** NFC NDEF sharing, Offline sync QA.

For detailed step-by-step tutorials for each phase, view the interactive blueprint hosted on GitHub Pages.

## 📱 NFC Implementation Notes
To use the NFC sharing feature, ensure you have NFC enabled on your Android device. The app utilizes `Foreground Dispatch` to push an NDEF URI payload formatted as `app://spot?id=[UUID]&name=[SpotName]`.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📜 License
This project is licensed under the MIT License.