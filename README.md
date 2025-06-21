
# 🧠 HealthAI – AI-Powered Healthcare Platform

**HealthAI** is an intelligent healthcare platform that uses modern AI and full-stack technologies to offer proactive health management, early diagnosis, secure consultations, and smart emergency handling.

---

## 🔍 Project Overview

HealthAI is a modular and scalable AI-powered health assistant built with **Next.js 14**, **Vercel AI SDK**, **Tailwind CSS**, and **OpenAI GPT models**. It aims to provide a full-stack end-to-end experience with real-world use case coverage.

> This submission is built as part of the **Niti AI Graduate Developer Assignment**.

---

## 🧩 Core Modules & Features

### 📊 1. **Health Dashboard**
- Displays real-time vitals: 🫀 Heart rate, 💉 Glucose, 🔵 Blood pressure
- Charts to visualize trends (Recharts)
- Medication & appointment reminders
- AI-generated personalized insights

### 🧠 2. **AI-Assisted Diagnosis**
- Users input symptoms (e.g. “fatigue, fever”)
- OpenAI-powered engine analyzes input and suggests probable diagnosis
- Confidence scores with clinical recommendations
- Easy reset & follow-up prompt system

### 💬 3. **Doctor Consultations**
- Doctor search and filter
- Secure chat interface (extendable with WebSocket)
- Video call setup (ready for integration)
- Booking appointments with calendar UI

### 🗂️ 4. **Health Record Management**
- Upload medical documents (PDFs, images under 5MB)
- Secure preview and delete
- View metadata like file type, size, etc.
- Extensible for cloud-based storage APIs

### 🚨 5. **Emergency Alert System**
- One-click alert triggers via button
- Fetches user geolocation (HTML5 API)
- Contacts stored and alerts simulated via UI
- Animated confirmation and feedback (Framer Motion)

---

## 🧠 AI Integration

- 🧠 **Diagnosis Assistance**: Built with `OpenAI GPT` via Vercel AI SDK
- 💡 Optional Enhancements:
  - Use `Hugging Face summarization model` for record summarization
  - Predict risk level using `TensorFlow.js` models (ready for plug-in)

---

## 🖼️ Screenshots

> Include these in your repo via markdown:

```md
![Dashboard](./public/screens/dashboard.png)
![Diagnosis](./public/screens/diagnosis.png)
![Consultation](./public/screens/consultation.png)
![Records](./public/screens/records.png)
![Emergency](./public/screens/emergency.png)
```

---

## 🛠️ Tech Stack

| Tech         | Purpose                          |
|--------------|----------------------------------|
| Next.js 14   | Frontend + App Routing           |
| React        | UI components                    |
| Tailwind CSS | Styling                          |
| shadcn/ui    | Reusable UI components           |
| OpenAI       | Diagnosis generation             |
| Recharts     | Data visualizations              |
| Vercel SDK   | AI API abstraction layer         |
| TypeScript   | Safer development                |
| Node.js      | Runtime & environment            |

---

## 🧪 Bonus Features (Implemented/Extendable)
- ✅ Modular routing with App Router
- ✅ Responsive, modern UI with gradients and shadows
- ✅ Framer Motion animation
- 🧪 Ready for:
  - Authentication via `NextAuth.js`
  - WebSocket support (real-time updates)
  - Dockerfile/CI for deployment

---

## 📁 Folder Structure

```
├── app/
│   └── diagnosis, emergency, dashboard, records
├── components/
├── hooks/
├── styles/
├── public/
├── README.md
├── requirements.txt
├── tailwind.config.js
```

---

## 🚀 Setup & Installation

```bash
git clone https://github.com/your-repo/HealthAI
cd HealthAI
npm install
npm run dev
```

> Rename `.env.local.example` to `.env.local` and configure OpenAI API key.

---

## 📹 Demo & Submission

- [🔗 GitHub Repo](https://github.com/yourname/health-ai)
- [📽️ Demo Video](https://loom.com/demo-link)
- [📄 Intro Video](https://loom.com/intro-link)
- [🔴 Live Demo](https://healthai.vercel.app) (if deployed)

---

## 📌 Notes for Niti AI Review Team

- ⏱️ Development time: ~36 hours
- 🔍 Focused on realistic health challenges
- 💡 Emphasis on modularity, AI integration, and clean UI/UX

Thank you for the opportunity! 🙏
