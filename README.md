# 🧠 DocMind

**DocMind** is an AI-powered document chat application that allows users to upload documents and ask questions based on their uploaded content.

It uses **LLMs, Embeddings, Vector Search, and RAG (Retrieval-Augmented Generation)** to understand documents and generate context-aware answers.

DocMind supports multiple LLM providers, allowing users to configure and use **Google Gemini, OpenAI, and Anthropic Claude** for AI-powered document conversations.

---

## 🚀 Features

* 📄 Upload documents
* ✂️ Document text extraction and chunking
* 🧠 Generate embeddings for document chunks
* 🔎 Semantic search using vector database
* 💬 Chat with uploaded documents
* 🤖 Multi-LLM support
* 🔵 Google Gemini
* 🟢 OpenAI
* 🟣 Anthropic Claude
* 📚 RAG-based question answering
* 🔐 User authentication
* 🔑 Secure API key management
* ⚡ Background document processing
* 🗂️ Manage uploaded resources
* 🔄 Configurable LLM provider and models
* 📊 API documentation with Swagger

---

## 🏗️ Architecture

```text
                         ┌─────────────────┐
                         │      User       │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   DocMind UI    │
                         │     (React)     │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   Backend API   │
                         │ Node.js/Express │
                         └────────┬────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
                    ▼                           ▼
             ┌─────────────┐             ┌─────────────┐
             │  Document   │             │    Chat     │
             │   Upload    │             │    API      │
             └──────┬──────┘             └──────┬──────┘
                    │                           │
                    ▼                           ▼
             ┌─────────────┐             ┌─────────────┐
             │   Chunking  │             │   Retrieve  │
             └──────┬──────┘             │  Documents  │
                    │                    └──────┬──────┘
                    ▼                           │
             ┌─────────────┐                   │
             │ Embeddings  │                   │
             └──────┬──────┘                   │
                    │                           │
                    ▼                           ▼
                    └──────────────► Qdrant ◄──┘
                                       │
                                       ▼
                              ┌─────────────────┐
                              │   LLM Service   │
                              └────────┬────────┘
                                       │
                    ┌──────────────────┼──────────────────┐
                    │                  │                  │
                    ▼                  ▼                  ▼
             ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
             │   Gemini    │   │   OpenAI    │   │  Anthropic  │
             │     LLM     │   │     LLM     │   │    Claude   │
             └──────┬──────┘   └──────┬──────┘   └──────┬──────┘
                    │                  │                  │
                    └──────────────────┼──────────────────┘
                                       │
                                       ▼
                              AI Generated Answer
```

---

## 🤖 Supported LLM Providers

DocMind is designed with a provider-based architecture so that different LLM providers can be integrated without changing the core chat and RAG logic.

### Google Gemini

Used for:

* Chat completion
* Document-based question answering
* Embeddings

### OpenAI

Used for:

* Chat completion
* Document-based question answering
* Embeddings

### Anthropic Claude

Used for:

* Chat completion
* Document-based question answering

The active provider and model can be configured through the application settings.

```text
                    LLM Service
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
       Gemini          OpenAI        Anthropic
          │              │              │
          └──────────────┼──────────────┘
                         ▼
                  Generated Response
```

---

## 🔄 RAG Pipeline

DocMind follows a Retrieval-Augmented Generation pipeline.

```text
Document Upload
      ↓
Text Extraction
      ↓
Text Chunking
      ↓
Embedding Generation
      ↓
Store Vectors in Qdrant
      ↓
User Question
      ↓
Question Embedding
      ↓
Similarity Search
      ↓
Retrieve Relevant Chunks
      ↓
Build Context
      ↓
LLM Provider
      ↓
Gemini / OpenAI / Anthropic
      ↓
Generate Answer
```

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Vite
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js
* TypeScript
* TypeORM
* REST API

### Database

* PostgreSQL

### AI / LLM

* Google Gemini
* OpenAI
* Anthropic Claude

### RAG / Vector Search

* Embeddings
* Qdrant Vector Database
* Semantic Search
* Retrieval-Augmented Generation (RAG)
* Text Chunking

### Infrastructure & Tools

* JWT Authentication
* Redis
* BullMQ
* Docker
* Swagger
* Winston Logger

---

## 📂 Project Structure

```text
DocMind/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   │   ├── llm/
│   │   │   │   ├── GeminiService
│   │   │   │   ├── OpenAIService
│   │   │   │   └── AnthropicService
│   │   │   ├── ChatService
│   │   │   ├── EmbeddingService
│   │   │   └── ResourceService
│   │   │
│   │   ├── entities/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── utils/
│   │
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

---

## ⚙️ How It Works

### 1. Upload Document

The user uploads a document through the DocMind interface.

The backend receives the file and starts the document processing pipeline.

### 2. Text Extraction

The uploaded document is converted into readable text.

### 3. Chunking

Large documents are divided into smaller text chunks.

This makes the content easier to process, embed, and retrieve efficiently.

### 4. Embeddings

Each chunk is converted into a numerical vector representation using the configured embedding model.

### 5. Vector Storage

The generated embeddings and their metadata are stored in **Qdrant**.

### 6. User Question

The user asks a question related to the uploaded document.

### 7. Retrieval

The question is converted into an embedding and searched against Qdrant.

The most relevant document chunks are retrieved.

### 8. Context Building

The retrieved chunks are combined with the user's question to create the context for the LLM.

### 9. LLM Generation

The request is sent to the configured active LLM provider:

```text
Gemini
   OR
OpenAI
   OR
Anthropic
```

The selected provider generates the final answer based on the retrieved document context.

---

## 🔀 Multi-Provider Architecture

DocMind separates the LLM integration from the main chat and RAG logic.

```text
                    ChatService
                         │
                         ▼
                    LLMService
                         │
                    Provider Factory
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
       Gemini          OpenAI        Anthropic
       Service         Service         Service
          │              │              │
          ▼              ▼              ▼
      Gemini API      OpenAI API    Claude API
```

This architecture makes it easier to add additional LLM providers in the future without rewriting the core application logic.

---

## 🔐 Authentication & Security

DocMind uses token-based authentication.

```text
Login
  ↓
JWT Token
  ↓
Authenticated Request
  ↓
Backend Validation
  ↓
Protected API
```

API keys for configured LLM providers are securely handled by the backend rather than being exposed directly to the frontend.

---

## 🗄️ Data Flow

```text
User
 │
 ▼
React Frontend
 │
 ▼
REST API
 │
 ├── PostgreSQL
 │      └── Users / Channels / Resources / Chats
 │
 ├── Qdrant
 │      └── Document Embeddings
 │
 ├── Redis
 │      └── Queue Management
 │
 └── LLM Providers
        │
        ├── Gemini
        ├── OpenAI
        └── Anthropic
```

---

## 🐳 Infrastructure

DocMind can use Docker for infrastructure services.

```text
Docker
 ├── PostgreSQL
 ├── Qdrant
 └── Redis
```

These services provide persistent storage, vector search, and background job processing.

---

## 🎯 Main Goal

The main goal of DocMind is to provide a flexible AI document assistant that can work with multiple LLM providers while keeping the document retrieval and RAG pipeline independent from the selected model provider.

Users can upload documents, ask questions, retrieve relevant information, and receive AI-generated answers using their configured LLM provider.

---

## 🧠 Concepts Used

This project helped me understand and implement:

* REST API development
* Authentication and authorization
* File processing
* Text extraction
* Text chunking
* Embeddings
* Vector databases
* Semantic search
* RAG architecture
* LLM integration
* Multi-provider LLM architecture
* Provider abstraction
* Prompt engineering
* Background job processing
* Redis and BullMQ
* PostgreSQL
* TypeORM
* Docker
* API documentation
* Secure API key handling

---

## 🚀 Future Improvements

* Streaming AI responses
* Advanced document parsing
* Conversation memory
* Advanced RAG techniques
* Hybrid search
* Reranking
* Knowledge Graph integration
* Agentic document workflows
* Additional LLM providers
* Production deployment
* Monitoring and observability
* Evaluation and RAG quality metrics

---

## 👨‍💻 Author

**Vignesh M**

Junior Software Developer | Backend & AI Developer

GitHub: `vickymvignesh56-arch`

---

## ⭐ Project

If you find this project useful, consider giving it a ⭐ on GitHub.
