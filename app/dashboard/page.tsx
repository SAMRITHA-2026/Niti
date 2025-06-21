"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Activity,
  AlertTriangle,
  Calendar,
  Heart,
  Thermometer,
  Droplets,
  Smile,
  Brain,
  Syringe,
  Apple,
  Stethoscope
} from "lucide-react"

import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { HealthMetricsChart } from "@/components/health-metrics-chart"
import { UpcomingAppointments } from "@/components/upcoming-appointments"
import { MedicationReminders } from "@/components/medication-reminders"
import { HealthInsights } from "@/components/health-insights"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const overviewData = [
    { title: "Heart Rate", icon: <Heart className="h-5 w-5 text-rose-500" />, value: "72 BPM", note: "Normal range" },
    { title: "Blood Pressure", icon: <Activity className="h-5 w-5 text-indigo-500" />, value: "120/80", note: "Optimal" },
    { title: "Blood Glucose", icon: <Droplets className="h-5 w-5 text-blue-500" />, value: "95 mg/dL", note: "Normal fasting level" },
    { title: "Body Temperature", icon: <Thermometer className="h-5 w-5 text-yellow-500" />, value: "98.6°F", note: "Normal" }
  ]

  const lifestyleTips = [
    { icon: <Apple className="text-green-600" />, title: "Eat Healthy", desc: "Maintain a balanced diet rich in fruits and vegetables." },
    { icon: <Syringe className="text-red-600" />, title: "Vaccinations", desc: "Stay up to date with your shots." },
    { icon: <Smile className="text-yellow-500" />, title: "Mental Health", desc: "Practice mindfulness and manage stress." },
    { icon: <Stethoscope className="text-blue-600" />, title: "Regular Checkups", desc: "Visit your doctor regularly." }
  ]

  return (
    <DashboardShell>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-sky-100 to-blue-200 text-blue-900 px-4 py-6">
        <DashboardHeader heading=" AI-Powered Health Dashboard" text="Monitor vitals, get AI insights, and stay healthy with style ✨">
          <Button variant="outline" className="ml-auto hover:bg-white/40 backdrop-blur text-sky-900 border border-blue-300 shadow">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Appointment
          </Button>
          <Button className="bg-sky-600 hover:bg-sky-700 text-white shadow-md">
            <Activity className="mr-2 h-4 w-4" />
            Record Vitals
          </Button>
        </DashboardHeader>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {overviewData.map((item, idx) => (
            <Card key={idx} className="bg-white/60 backdrop-blur border border-blue-100 shadow-md hover:shadow-xl transition">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-blue-900">{item.title}</CardTitle>
                {item.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-800">{item.value}</div>
                <p className="text-xs text-muted-foreground">{item.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-4 mt-6" onValueChange={setActiveTab}>
          <TabsList className="bg-white/40 backdrop-blur border border-blue-300 rounded-xl shadow-md p-1">
            {["overview", "trends", "medications", "appointments", "insights", "lifestyle"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="rounded-lg text-sm font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-sky-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white px-4 py-2"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4 bg-white/50 backdrop-blur shadow-md">
                <CardHeader>
                  <CardTitle>📊 Health Metrics</CardTitle>
                  <CardDescription>Metrics over the last 7 days</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <HealthMetricsChart />
                </CardContent>
              </Card>

              <Card className="lg:col-span-3 bg-white/50 backdrop-blur shadow-md">
                <CardHeader>
                  <CardTitle>🗕️ Upcoming Appointments</CardTitle>
                  <CardDescription>Stay on track with visits</CardDescription>
                </CardHeader>
                <CardContent>
                  <UpcomingAppointments />
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-3 bg-white/50 backdrop-blur shadow-md">
                <CardHeader>
                  <CardTitle>💊 Medication Reminders</CardTitle>
                  <CardDescription>Don’t miss your doses</CardDescription>
                </CardHeader>
                <CardContent>
                  <MedicationReminders />
                </CardContent>
              </Card>

              <Card className="lg:col-span-4 bg-white/50 backdrop-blur shadow-md">
                <CardHeader>
                  <CardTitle> Health Insights</CardTitle>
                  <CardDescription>AI-powered advice</CardDescription>
                </CardHeader>
                <CardContent>
                  <HealthInsights />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {"trends,medications,appointments,insights,lifestyle".split(",").map((tab) => (
            <TabsContent key={tab} value={tab} className="space-y-4">
              <Card className="bg-white/50 backdrop-blur shadow-md">
                <CardHeader>
                  <CardTitle>
                    {tab === "trends"
                      ? "📈 Long-term Health Trends"
                      : tab === "medications"
                      ? "💊 Medication Management"
                      : tab === "appointments"
                      ? "🗖️ Appointment Calendar"
                      : tab === "insights"
                      ? "🧠 AI Health Insights"
                      : "🌿 Lifestyle Tips"}
                  </CardTitle>
                  <CardDescription>
                    {tab === "trends"
                      ? "View your health metrics over time"
                      : tab === "medications"
                      ? "Track and manage your medications"
                      : tab === "appointments"
                      ? "Manage your healthcare appointments"
                      : tab === "insights"
                      ? "Personalized recommendations"
                      : "Stay well with healthy habits"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {tab === "lifestyle" ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {lifestyleTips.map((tip, i) => (
                        <Card key={i} className="p-4 flex items-start gap-4 border-l-4 border-green-500 bg-green-50">
                          <div className="mt-1">{tip.icon}</div>
                          <div>
                            <p className="font-semibold text-green-800">{tip.title}</p>
                            <p className="text-sm text-green-700">{tip.desc}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="h-[300px] flex items-center justify-center border rounded-md">
                      <p className="text-muted-foreground">Coming soon</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <Card className="mt-6 border-l-4 border-orange-400 bg-orange-100 dark:bg-orange-950 shadow-md animate-pulse">
          <CardHeader className="flex flex-row items-center gap-2 py-2">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
            <CardTitle className="text-sm font-semibold text-orange-700 dark:text-orange-300">
              ⚠️ Health Alert
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-3 pt-0">
            <p className="text-sm text-orange-800 dark:text-orange-300">
              Your blood pressure has been slightly elevated this week. Consider scheduling a check-up with your physician.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}