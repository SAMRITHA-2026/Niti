"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  AlarmClock,
  Trash2,
  PlusCircle,
  BellRing,
  CheckCircle2,
  RefreshCcw,
  Info
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"

interface Reminder {
  id: number
  message: string
  time: string
  taken: boolean
}

export default function RemindersPage() {
  const [reminders, setReminders] = useState<Reminder[]>([])
  const [message, setMessage] = useState("")
  const [time, setTime] = useState("")
  const [notification, setNotification] = useState<string | null>(null)

  const addReminder = () => {
    if (!message || !time) return
    const newReminder: Reminder = {
      id: Date.now(),
      message,
      time,
      taken: false
    }
    setReminders(prev => [...prev, newReminder])
    setMessage("")
    setTime("")
    setNotification("Reminder added successfully!")
    setTimeout(() => setNotification(null), 3000)
  }

  const deleteReminder = (id: number) => {
    setReminders(prev => prev.filter(r => r.id !== id))
    setNotification("Reminder deleted.")
    setTimeout(() => setNotification(null), 3000)
  }

  const markAsTaken = (id: number) => {
    setReminders(prev => prev.map(r => r.id === id ? { ...r, taken: true } : r))
    setNotification("Marked as taken.")
    setTimeout(() => setNotification(null), 3000)
  }

  const resetReminder = (id: number) => {
    setReminders(prev => prev.map(r => r.id === id ? { ...r, taken: false } : r))
    setNotification("Reminder reset.")
    setTimeout(() => setNotification(null), 3000)
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-100/40 to-blue-300/50 backdrop-blur-lg p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-sky-800 flex items-center justify-center gap-2">
            <AlarmClock className="w-7 h-7" /> Medication Reminders
          </h1>
          <p className="text-sky-700 mt-2 text-lg">
            Set, track, and manage your medications with AI-backed accuracy.
          </p>
        </motion.div>

        {notification && (
          <motion.div
            className="mb-4 bg-blue-100 border border-blue-400 text-blue-800 px-4 py-2 rounded shadow-md flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Info className="w-5 h-5" /> {notification}
          </motion.div>
        )}

        <Card className="mb-8 bg-white/50 backdrop-blur border border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-sky-700">Create Reminder</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Enter the medicine details and time to be notified.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="message">Reminder Message</Label>
              <Input
                id="message"
                placeholder="e.g., Take Vitamin D"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                value={time}
                onChange={e => setTime(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={addReminder}
              className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-md"
            >
              <PlusCircle className="w-4 h-4" /> Add Reminder
            </Button>
          </CardFooter>
        </Card>

        <div className="space-y-4">
          {reminders.length === 0 && (
            <motion.div
              className="text-center text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <BellRing className="mx-auto mb-2 w-6 h-6 text-sky-500" />
              <p>No reminders yet. Add one to begin!</p>
            </motion.div>
          )}

          {reminders.map(r => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className={`bg-white/50 backdrop-blur border ${
                  r.taken ? "border-green-400" : "border-sky-200"
                } shadow-md`}
              >
                <CardHeader className="flex justify-between items-center">
                  <div>
                    <CardTitle className={`text-lg ${r.taken ? "text-green-600" : "text-sky-700"}`}>
                      {r.message}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Time: {format(new Date(`2024-01-01T${r.time}`), "hh:mm a")}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {!r.taken ? (
                      <Button size="icon" variant="ghost" onClick={() => markAsTaken(r.id)}>
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      </Button>
                    ) : (
                      <Button size="icon" variant="ghost" onClick={() => resetReminder(r.id)}>
                        <RefreshCcw className="w-5 h-5 text-blue-600" />
                      </Button>
                    )}
                    <Button size="icon" variant="ghost" onClick={() => deleteReminder(r.id)}>
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}