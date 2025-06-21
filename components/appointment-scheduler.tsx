"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Video, User } from "lucide-react"

export function AppointmentScheduler() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [appointmentType, setAppointmentType] = useState("video")
  const [specialist, setSpecialist] = useState("")
  const [timeSlot, setTimeSlot] = useState("")

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
  ]

  const specialists = ["Cardiologist", "Dermatologist", "Family Medicine", "Neurologist", "Orthopedist", "Pediatrician"]

  return (
    <div className="space-y-4">
      <Tabs defaultValue="appointment" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="appointment">New Appointment</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>

        <TabsContent value="appointment" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium mb-2">1. Select Date</h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="border rounded-md"
                disabled={(date) => {
                  // Disable weekends and past dates
                  const day = date.getDay()
                  const today = new Date()
                  today.setHours(0, 0, 0, 0)
                  return date < today || day === 0 || day === 6
                }}
              />
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">2. Appointment Type</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={appointmentType === "video" ? "default" : "outline"}
                    className="justify-start"
                    onClick={() => setAppointmentType("video")}
                  >
                    <Video className="mr-2 h-4 w-4" />
                    Video Call
                  </Button>
                  <Button
                    variant={appointmentType === "in-person" ? "default" : "outline"}
                    className="justify-start"
                    onClick={() => setAppointmentType("in-person")}
                  >
                    <User className="mr-2 h-4 w-4" />
                    In-Person
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">3. Select Specialist</h3>
                <Select value={specialist} onValueChange={setSpecialist}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select specialist" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialists.map((spec) => (
                      <SelectItem key={spec} value={spec}>
                        {spec}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">4. Select Time</h3>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot}
                      variant={timeSlot === slot ? "default" : "outline"}
                      size="sm"
                      className="flex items-center justify-center"
                      onClick={() => setTimeSlot(slot)}
                    >
                      <Clock className="mr-1 h-3 w-3" />
                      {slot}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Appointment Summary</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {date ? date.toLocaleDateString() : "No date selected"} {timeSlot ? `at ${timeSlot}` : ""}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {specialist ? specialist : "No specialist selected"} -{" "}
                    {appointmentType === "video" ? "Video Call" : "In-Person"}
                  </p>
                </div>
                <Button disabled={!date || !specialist || !timeSlot}>Schedule Appointment</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming">
          <div className="flex flex-col items-center justify-center h-[300px] text-center">
            <Clock className="h-10 w-10 text-muted-foreground mb-2" />
            <h3 className="text-lg font-medium">No Upcoming Appointments</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-md">
              You don't have any upcoming appointments scheduled. Use the New Appointment tab to schedule one.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

