"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"
import {
  Brain,
  Loader2,
  MessageSquare,
  FileText,
  AlertTriangle,
  Thermometer,
  HeartPulse,
  Wind
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { DiagnosisResult } from "@/components/diagnosis-result"
import { SymptomChecker } from "@/components/symptom-checker"

export default function DiagnosisPage() {
  const [loading, setLoading] = useState(false)
  const [symptoms, setSymptoms] = useState("")
  const [diagnosisComplete, setDiagnosisComplete] = useState(false)

  const handleDiagnosis = () => {
    if (!symptoms.trim()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setDiagnosisComplete(true)
    }, 3000)
  }

  const resetDiagnosis = () => {
    setSymptoms("")
    setDiagnosisComplete(false)
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading=" AI-Assisted Diagnosis"
        text="Describe your symptoms and let AI assist in giving a preliminary diagnosis."
      >
        <Button variant="outline" className="ml-auto hover:bg-gradient-to-r from-sky-300 to-purple-300 text-white shadow-md">
          <FileText className="mr-2 h-4 w-4" />
          View History
        </Button>
        <Button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg hover:scale-105 transition-transform">
          <MessageSquare className="mr-2 h-4 w-4" />
          Consult Doctor
        </Button>
      </DashboardHeader>

      <div className="grid gap-6 md:grid-cols-7 mt-4">
        <Card className="md:col-span-4 bg-white/30 backdrop-blur-lg border border-blue-200 shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-indigo-600 text-lg">
              <Brain className="h-5 w-5" />
              Symptom Analysis
            </CardTitle>
            <CardDescription>Provide a detailed description for better insights</CardDescription>
          </CardHeader>
          <CardContent>
            {!diagnosisComplete ? (
              <>
                <Textarea
                  placeholder="e.g., Persistent headache, slight fever for 3 days, fatigue..."
                  className="min-h-[200px] rounded-md border border-blue-300 bg-white/40 backdrop-blur-md shadow-inner focus:ring-2 focus:ring-indigo-400"
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                />
                <div className="mt-2 text-sm text-muted-foreground space-y-1">
                  <p className="font-medium">Tips for better diagnosis:</p>
                  <ul className="list-disc pl-5">
                    <li>When did it start?</li>
                    <li>Medical history?</li>
                    <li>Severity and frequency</li>
                    <li>Worsening or relieving factors</li>
                  </ul>
                </div>
              </>
            ) : (
              <DiagnosisResult />
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {!diagnosisComplete ? (
              <Button
                onClick={handleDiagnosis}
                disabled={loading || !symptoms.trim()}
                className="ml-auto bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:opacity-90"
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? "Analyzing..." : "Analyze Symptoms"}
              </Button>
            ) : (
              <>
                <Button variant="outline" onClick={resetDiagnosis} className="hover:bg-gray-100 dark:hover:bg-zinc-800">
                  New Analysis
                </Button>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Consult Doctor
                </Button>
              </>
            )}
          </CardFooter>
        </Card>

        <div className="md:col-span-3 space-y-4">
          <Card className="bg-white/30 backdrop-blur-lg border border-blue-100">
            <CardHeader>
              <CardTitle className="text-sm text-indigo-700">How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Enter your symptoms in detail</li>
                <li>AI processes and compares with clinical data</li>
                <li>Receive a preliminary result</li>
                <li>Get follow-up suggestions</li>
              </ol>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                <p className="text-xs text-yellow-700">
                  This tool does not replace medical advice. Always consult a certified doctor.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/30 backdrop-blur-lg border border-blue-100">
            <CardHeader>
              <CardTitle className="text-sm text-indigo-700">Common Symptoms</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="general">
                <TabsList className="grid w-full grid-cols-3 bg-white/30 backdrop-blur-sm border border-blue-200 p-1 rounded-lg text-sm">
                  <TabsTrigger value="general" className="rounded-md data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    <Thermometer className="mr-1 h-4 w-4" />
                    General
                  </TabsTrigger>
                  <TabsTrigger value="pain" className="rounded-md data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    <HeartPulse className="mr-1 h-4 w-4" />
                    Pain
                  </TabsTrigger>
                  <TabsTrigger value="respiratory" className="rounded-md data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    <Wind className="mr-1 h-4 w-4" />
                    Respiratory
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="general" className="mt-2">
                  <SymptomChecker symptoms={["Fever", "Fatigue", "Nausea", "Dizziness", "Weight loss", "Appetite changes"]} />
                </TabsContent>
                <TabsContent value="pain" className="mt-2">
                  <SymptomChecker symptoms={["Headache", "Chest pain", "Abdominal pain", "Joint pain", "Back pain", "Muscle aches"]} />
                </TabsContent>
                <TabsContent value="respiratory" className="mt-2">
                  <SymptomChecker symptoms={["Cough", "Shortness of breath", "Sore throat", "Runny nose", "Congestion", "Wheezing"]} />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}
