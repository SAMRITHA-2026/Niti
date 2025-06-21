"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Activity,
  Brain,
  Calendar,
  FileText,
  MessageSquare,
  Pill,
  Shield
} from "lucide-react"

const MotionDiv = dynamic(() =>
  import("framer-motion").then(mod => mod.motion.div),
  { ssr: false }
)

export default function Home() {
  const features = [
    {
      Icon: Activity,
      title: "Health Tracker",
      desc: "Live metrics and personalized wellness",
      content:
        "Stay on top of your vital signs and receive tailored wellness recommendations in a beautiful, intuitive interface.",
      link: "/dashboard"
    },
    {
      Icon: Brain,
      title: "Smart Symptom Checker",
      desc: "AI-powered early diagnostics",
      content:
        "Advanced AI models analyze symptoms with accuracy to guide you in taking the next right step toward care.",
      link: "/diagnosis"
    },
    {
      Icon: MessageSquare,
      title: "Virtual Consults",
      desc: "Video calls & chat with top doctors",
      content:
        "Speak with certified healthcare professionals anytime, from anywhere, through secure and seamless connections.",
      link: "/consultations"
    },
    {
      Icon: FileText,
      title: "My Medical Cloud",
      desc: "Secure, shareable health records",
      content:
        "Keep your medical history organized, safe, and accessible whenever you or your doctor need it.",
      link: "/api/records"
    },
    {
      Icon: Pill,
      title: "Smart Reminders",
      desc: "Never forget your meds again",
      content:
        "Get smart alerts and reminders for medication, refills, and health tasks — on time, every time.",
      link: "/api/reminders"
    },
    {
      Icon: Calendar,
      title: "Instant SOS Alerts",
      desc: "Real-time emergency response",
      content:
        "Automatic detection of emergencies and instant alerts to your emergency contacts and services.",
      link: "/api/emergency"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 via-sky-100 to-blue-200 text-blue-900">
      <header className="sticky top-0 z-50 w-full border-b bg-blue-100/80 backdrop-blur-md shadow-md">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Shield className="h-6 w-6 text-sky-500 animate-pulse" />
              <span className="hidden font-bold text-xl sm:inline-block text-sky-700">CareConnect</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/dashboard" className="hover:underline">Dashboard</Link>
              <Link href="/diagnosis" className="hover:underline">Diagnosis</Link>
              <Link href="/api/records" className="hover:underline">Records</Link>
              <Link href="/api/reminders" className="hover:underline">Reminders</Link>
              <Link href="/api/emergency" className="hover:underline">Emergency</Link>
              <Link href="/consultations" className="hover:underline">Consultations</Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline" className="bg-white/50 backdrop-blur border-sky-300 text-sky-700" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="bg-sky-600 hover:bg-sky-700 text-white shadow-md" asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 bg-gradient-to-br from-sky-100 to-blue-200">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <MotionDiv
                className="space-y-6 order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-md">
                  Your Smart Health Companion
                </h1>
                <p className="text-lg text-blue-800">
                  Track. Diagnose. Connect. Manage. All in one beautifully designed app.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-sky-600 text-white shadow-lg" asChild>
                    <a href="#features">Get Started</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-400 bg-white/50 backdrop-blur text-blue-700 hover:bg-white" asChild>
                    <a href="#features">Learn More</a>
                  </Button>
                </div>
              </MotionDiv>
              <MotionDiv
                className="mx-auto order-1 lg:order-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/image.png"
                  alt="Healthcare Preview"
                  className="rounded-2xl shadow-lg border border-blue-200 w-full max-w-xl"
                />
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">Core Highlights</h2>
              <p className="text-blue-800 max-w-2xl mx-auto mt-2">
                Discover what makes <strong>CareConnect</strong> your ideal digital health partner.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(({ Icon, title, desc, content, link }, i) => (
                <MotionDiv
                  key={i}
                  className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-blue-100 hover:scale-[1.02] transition-transform"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <CardHeader>
                    <Icon className="h-8 w-8 text-sky-600 mb-2" />
                    <CardTitle className="text-xl font-semibold">{title}</CardTitle>
                    <CardDescription className="text-blue-700">{desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-blue-900 text-sm mt-2">{content}</CardContent>
                  <CardFooter className="pt-4">
                    <Button variant="ghost" size="sm" className="text-sky-600 hover:underline" asChild>
                      <Link href={link}>Explore</Link>
                    </Button>
                  </CardFooter>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-blue-100 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-blue-700">© 2025 CareConnect. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-blue-700 hover:underline">Terms</Link>
            <Link href="/privacy" className="text-sm text-blue-700 hover:underline">Privacy</Link>
            <Link href="/contact" className="text-sm text-blue-700 hover:underline">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
