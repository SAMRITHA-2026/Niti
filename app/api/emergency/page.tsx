"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { AlertCircle, Bell, PhoneCall, MapPin, ShieldAlert, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card"

interface EmergencyContact {
  id: number
  name: string
  relation: string
  phone: string
  location: string
}

export default function EmergencyAlertsPage() {
  const [contacts, setContacts] = useState<EmergencyContact[]>([])
  const [alertSent, setAlertSent] = useState(false)
  const [location, setLocation] = useState("")

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords
        setLocation(`Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`)
      },
      () => {
        setLocation("Unable to access location")
      }
    )

    // Load sample contacts
    setContacts([
      { id: 1, name: "Dr. Ravi Kumar", relation: "Primary Doctor", phone: "9876543210", location: "Chennai" },
      { id: 2, name: "Ananya Patel", relation: "Daughter", phone: "9123456789", location: "Bangalore" },
    ])
  }, [])

  const triggerEmergencyAlert = () => {
    setAlertSent(true)
    setTimeout(() => setAlertSent(false), 5000)
    alert("Emergency alert has been sent to all contacts!")
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-100 to-blue-200 text-blue-900 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
            <AlertCircle className="w-7 h-7 text-sky-700 animate-pulse" /> Emergency Alerts
          </h1>
          <p className="mt-2 text-lg text-blue-800">
            Detect emergencies and alert your contacts instantly with real-time location sharing.
          </p>
        </motion.div>

        <Card className="mb-8 bg-white/50 backdrop-blur-lg border border-sky-200 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sky-700">
              <ShieldAlert className="w-5 h-5" /> Current Location
            </CardTitle>
            <CardDescription>This location is automatically shared during an emergency.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-blue-900 font-medium">{location}</p>
          </CardContent>
          <CardFooter className="justify-end">
            <Button
              onClick={triggerEmergencyAlert}
              className="flex items-center gap-2 bg-gradient-to-r from-sky-600 to-sky-800 text-white hover:scale-105 shadow-md"
            >
              <Bell className="w-5 h-5" /> Trigger Emergency Alert
            </Button>
          </CardFooter>
        </Card>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
            <PhoneCall className="w-5 h-5" /> Emergency Contacts
          </h2>
          {contacts.map(contact => (
            <Card key={contact.id} className="bg-white/50 backdrop-blur border border-blue-100 hover:shadow-md transition">
              <CardHeader className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-base text-sky-700">{contact.name}</CardTitle>
                  <CardDescription className="text-sm text-blue-800">
                    {contact.relation} - {contact.phone} - {contact.location}
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" className="hover:bg-sky-100">
                  <PhoneCall className="w-4 h-4 text-sky-600 mr-2" /> Call Now
                </Button>
              </CardHeader>
            </Card>
          ))}
        </motion.div>

        {/* Health Safety Insights Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10"
        >
          <Card className="bg-white/50 backdrop-blur border-l-4 border-blue-500 p-4 shadow-md">
            <CardHeader className="flex items-center gap-2">
              <Info className="text-blue-600 w-5 h-5" />
              <CardTitle className="text-blue-800 text-lg">💡 Safety Insight</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-900">
                Ensure your emergency contacts are up to date and location access is enabled on your device. For chronic health conditions, keep your physician informed about wearable data and set up automated alerts.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {alertSent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed bottom-4 right-4 bg-sky-100 border border-sky-300 p-4 rounded-md shadow-lg flex items-center gap-2 text-sky-800"
          >
            <Bell className="w-5 h-5 animate-bounce" /> Emergency alert sent!
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
