
# 🧠 HealthAI – AI-Powered Healthcare Platform

**HealthAI** is an intelligent healthcare platform that uses modern AI and full-stack technologies to offer proactive health management, early diagnosis, secure consultations, and smart emergency handling.

![image](https://github.com/user-attachments/assets/c9de5ba8-6a75-4943-add5-f253923b22b2)
![image](https://github.com/user-attachments/assets/29f37dd4-74b4-4687-a76e-48e9cfebd7e7)
![image](https://github.com/user-attachments/assets/705e6185-fc9a-4d33-9f5d-18fe0e10a6fc)


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

![image](https://github.com/user-attachments/assets/ec7b673d-5a1b-4944-bb45-17141b1dabd3)


### 🧠 2. **AI-Assisted Diagnosis**
- Users input symptoms (e.g. “fatigue, fever”)
- OpenAI-powered engine analyzes input and suggests probable diagnosis
- Confidence scores with clinical recommendations
- Easy reset & follow-up prompt system

![image](https://github.com/user-attachments/assets/b5e7fea5-340e-4dc8-8bbb-5500d83d57df)

### 💬 3. **Doctor Consultations**
- Doctor search and filter
- Secure chat interface (extendable with WebSocket)
- Video call setup (ready for integration)
- Booking appointments with calendar UI

![image](https://github.com/user-attachments/assets/4df9c31a-3755-47b0-a468-a6186e8ff560)

Sample Prompt:

![image](https://github.com/user-attachments/assets/8a7e473a-123d-4403-8fad-75a9cb513dfe)


![image](https://github.com/user-attachments/assets/5803f06f-4953-4c73-975f-b1e0aa1e15bd)

### 🗂️ 4. **Health Record Management**
- Upload medical documents (PDFs, images under 5MB)
- Secure preview and delete
- View metadata like file type, size, etc.
- Extensible for cloud-based storage APIs

![image](https://github.com/user-attachments/assets/6ad7bef0-ee32-441d-8f22-a87f64cdf827)

### 🚨 5. **Emergency Alert System**
- One-click alert triggers via button
- Fetches user geolocation (HTML5 API)
- Contacts stored and alerts simulated via UI
- Animated confirmation and feedback (Framer Motion)

![image](https://github.com/user-attachments/assets/ea6623e6-a3ae-4ebd-86ba-fb0472bd831f)

---

## 🧠 AI Integration

- 🧠 **Diagnosis Assistance**: Built with `OpenAI GPT` via Vercel AI SDK
- 💡 Optional Enhancements:
  - Use `Hugging Face summarization model` for record summarization
  - Predict risk level using `TensorFlow.js` models (ready for plug-in)
![image](https://github.com/user-attachments/assets/8ad905d0-511a-4e6b-8645-16e2bde92f1e)


## 💊 Medication Reminder
- A smart reminder system that allows users to schedule and track medication timings.
- Includes real-time alerts, status tracking (taken/missed), and reset options for ongoing routines.

![image](https://github.com/user-attachments/assets/e5c884cc-5a83-4d2f-8cdf-7f1dede5e9b3)


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
## 🏗 Architecture Diagram

The application follows a modular, full-stack architecture:

![ChatGPT Image Jun 21, 2025, 10_02_16 AM](https://github.com/user-attachments/assets/25a83c14-99ce-4090-b8e1-06041cfdc3a3)


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

- [🔗 GitHub Repo]([https://github.com/yourname/health-ai](https://github.com/SAMRITHA-2026/Niti-Al-Graduate-Developer---HealthAI))
- 
## 📽️ Demo Video

🎥 [Click here to watch the demo video](https://github.com/SAMRITHA-2026/Niti-Al-Graduate-Developer---HealthAI/raw/main/demo-video.mp4)


---

## 📌 Notes for Niti AI Review Team

- ⏱️ Development time: ~36 hours
- 🔍 Focused on realistic health challenges
- 💡 Emphasis on modularity, AI integration, and clean UI/UX

Thank you for the opportunity! 🙏
