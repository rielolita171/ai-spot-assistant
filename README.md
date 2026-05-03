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

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Python 3.11+
- Android Studio (For compiling the Capacitor app to an `.apk`)
- [Ollama](https://ollama.ai/) installed on your local server/Mini PC.

### 1. Backend Setup (Mini PC Server)

Clone the repository and set up your Python environment:
```bash
git clone [https://github.com/yourusername/local-ai-assistant.git](https://github.com/yourusername/local-ai-assistant.git)
cd local-ai-assistant/backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Pull the required AI models via Ollama:
```bash
ollama pull deepseek-r1:7b
ollama pull llava
ollama pull nomic-embed-text
```

Start the FastAPI server:
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

*(Optional)* Expose your local server securely using Localtunnel to allow your phone to connect from anywhere:
```bash
npx localtunnel --port 8000
```

### 2. Frontend Setup (Capacitor App)

Navigate to the frontend directory:
```bash
cd ../frontend
npm install
```

Configure your API endpoint. Create a `src/config.js` or `.env` file and point it to your local server IP or your Localtunnel URL:
```javascript
export const API_URL = "[https://your-localtunnel-url.loca.lt/api](https://your-localtunnel-url.loca.lt/api)";
```

Build the web application and sync it to the Android wrapper:
```bash
npm run build
npx cap add android
npx cap sync
```

To build the app to your physical Android device:
```bash
npx cap open android
# This will open Android Studio, where you can press "Run" to install the APK.
```

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