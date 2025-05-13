<h1 align="center">Crowdera Hack4RealGood Hackathon</h1>

<p align="center">
  <img src="Crowdera_logo.jpg" alt="Crowdera Logo" width="500"/>
</p>

**EventsHub** is an AI-powered full-stack web platform built during the Crowdera Hack4RealGood Hackathon. It enables users to create, manage, register for, and participate in both physical and virtual events — including galas, concerts, marathons, and livestreams — with features like ticketing, check-ins, chat, and AI-enhanced experiences.

## Features

- Event creation with categories, location/link, banners, and scheduling
- Attendee registration and QR code ticket generation
- QR-based check-in system and check-in dashboard
- Live broadcast integration with YouTube Live and virtual chat
- Firebase authentication with multiple login options (email, Google, magic link)
- AI-powered features:
  - Event description generator
  - User profiling with clustering
  - TF-IDF based event recommendation
  - NGO/artist background research tool
  - Chat summarization using LangChain and Gemini

##  Tech Stack

### Frontend
- Next.js (TypeScript)
- TailwindCSS
- Redux Toolkit
- Firebase Auth
- QR Code Generator (`qrcode.react`)
- Live chat using Firebase Realtime DB

### Backend
- Node.js + Express.js
- MongoDB Atlas
- REST APIs for events, registration, tickets, check-ins, and analytics
- Firebase token validation and middleware

### AI Microservices
- FastAPI (Python)
- LangChain + Gemini + OpenRouter APIs
- Google Custom Search API
- Hosted at: https://eventhub-ai.onrender.com/docs

## Deployment

- **Frontend**: Vercel – https://eventhub2.vercel.app/
- **Backend**: Render
- **AI Services**: Render + Swagger
- **Database**: MongoDB Atlas
- **Auth**: Firebase

## Project Structure

```
EventsHub/
├── eventhub-frontend-main/    # Next.js frontend
├── eventhub-backend-main/     # Express.js backend
├── eventhub-ai-main/          # FastAPI AI services
```

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/rishi02102017/EventsHub.git
cd EventsHub
```

---

### 2. Frontend

```bash
cd eventhub-frontend-main
npm install
```

#### Sample `.env` for Frontend
```
NEXT_PUBLIC_API_BASE_URL=https://your-backend-url.com
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-firebase-measurement-id
NEXT_PUBLIC_API_AI_BASE_URL=https://your-ai-api-url.com
```

To start:
```bash
npm run dev
```

---

### 3. Backend

```bash
cd ../eventhub-backend-main
npm install
```

#### Sample `.env` for Backend
```
MONGO_URI=your-mongodb-uri
```

To start:
```bash
node server.js
```

---

### 4. AI Microservices

```bash
cd ../eventhub-ai-main
pip install -r requirements.txt
```

To start:
```bash
uvicorn main:app --reload
```

Access: http://localhost:8000/docs

---

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgement

Built with ❤️ by the EventsHub Team during the Crowdera Hack4RealGood Hackathon 2024.
