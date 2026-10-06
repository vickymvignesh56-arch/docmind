# 🧠 DocMind

**DocMind** is an AI-powered document chat application that allows users to upload documents and ask questions based on their uploaded content.

It uses **LLM, Embeddings, Vector Search, and RAG (Retrieval-Augmented Generation)** to understand documents and generate context-aware answers.

---

## 🚀 Features

* 📄 Upload documents
* ✂️ Document text extraction and chunking
* 🧠 Generate embeddings for document chunks
* 🔎 Semantic search using vector database
* 💬 Chat with uploaded documents
* 🤖 AI-powered answers using Gemini
* 📚 RAG-based question answering
* 🔐 User authentication
* ⚡ Fast and scalable API architecture
* 🗂️ Manage uploaded resources

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
                └───────┬─────────┘
                        │
             ┌──────────┴──────────┐
             │                     │
             ▼                     ▼
      ┌─────────────┐       ┌─────────────┐
      │  Document   │       │    Chat     │
      │   Upload    │       │    API      │
      └──────┬──────┘       └──────┬──────┘
             │                     │
             ▼                     ▼
      ┌─────────────┐       ┌─────────────┐
      │   Chunking  │       │   Retrieve  │
      └──────┬──────┘       │  Documents  │
             │              └──────┬──────┘
             ▼                     │
      ┌─────────────┐              │
      │ Embeddings  │              │
      └──────┬──────┘              │
             │                     │
             ▼                     ▼
             └──────────► Qdrant ◄─┘
                           │
                           ▼
                    ┌─────────────┐
                    │    Gemini   │
                    │     LLM     │
                    └──────┬──────┘
                           │
                           ▼
                    AI Generated Answer
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
Send Context + Question to Gemini
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

### AI / RAG

* Google Gemini
* Embeddings
* Qdrant Vector Database
* Retrieval-Augmented Generation (RAG)

### Other Technologies

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

The backend receives the file and processes its content.

### 2. Text Extraction

The uploaded document is converted into readable text.

### 3. Chunking

Large documents are divided into smaller text chunks.

This makes the content easier to embed and retrieve efficiently.

### 4. Embeddings

Each chunk is converted into a numerical vector representation using an embedding model.

### 5. Vector Storage

The generated embeddings and their related metadata are stored in **Qdrant**.

### 6. User Question

The user asks a question related to the uploaded document.

### 7. Retrieval

The question is converted into an embedding and searched against Qdrant.

The most relevant document chunks are retrieved.

### 8. Gemini Generation

The retrieved context and user's question are sent to Gemini.

Gemini generates the final answer based on the retrieved document context.

---

## 🔐 Authentication

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

Protected resources can only be accessed by authenticated users.

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
 └── Gemini
        └── Embedding / AI Response
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

This makes the development environment easier to configure and reproduce.

---

## 📡 API Overview

### Authentication

```http
POST /api/auth/login
POST /api/auth/register
```

### Resources

```http
POST   /api/channels/:channelId/resources
GET    /api/channels/:channelId/resources
DELETE /api/channels/:channelId/resources/:resourceId
```

### Chat

```http
POST /api/channels/:channelId/chat
```

### User Profile

```http
POST /api/user-profile/change-password
```

---

## 🎯 Main Goal

The main goal of DocMind is to provide a simple interface for interacting with documents using modern AI technologies.

Instead of manually searching through large documents, users can simply ask questions and receive answers based on the relevant document content.

---

## 🧠 Concepts Used

This project helped me understand and implement:

* REST API development
* Authentication and authorization
* File processing
* Text chunking
* Embeddings
* Vector databases
* Semantic search
* RAG architecture
* LLM integration
* Prompt engineering
* Background job processing
* Redis and BullMQ
* PostgreSQL
* TypeORM
* Docker
* API documentation

---

## 🚀 Future Improvements

* Multi-model LLM support
* Streaming AI responses
* Better document parsing
* Conversation memory
* Advanced RAG techniques
* Hybrid search
* Reranking
* Knowledge Graph integration
* Agentic document workflows
* Production deployment
* Monitoring and observability

---

## 👨‍💻 Author

**Vignesh M**

Junior Software Developer | Backend & AI Developer

GitHub: `vickymvignesh56-arch`

---

## ⭐ Project

If you find this project useful, consider giving it a ⭐ on GitHub.
