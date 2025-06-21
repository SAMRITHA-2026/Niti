import { Button } from "@/components/ui/button"
import { Calendar, Clock, Video, MessageSquare } from "lucide-react"

const appointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    date: "March 15, 2025",
    time: "10:00 AM",
    type: "video",
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "Family Medicine",
    date: "March 22, 2025",
    time: "2:30 PM",
    type: "in-person",
  },
  {
    id: 3,
    doctor: "Dr. Emily Rodriguez",
    specialty: "Neurologist",
    date: "April 5, 2025",
    time: "11:15 AM",
    type: "chat",
  },
]

export function UpcomingAppointments() {
  return (
    <div className="space-y-4">
      {appointments.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[200px] text-center">
          <Calendar className="h-10 w-10 text-muted-foreground mb-2" />
          <h3 className="text-lg font-medium">No Upcoming Appointments</h3>
          <p className="text-sm text-muted-foreground mt-1">Schedule an appointment with your healthcare provider.</p>
          <Button className="mt-4">Schedule Now</Button>
        </div>
      ) : (
        <div className="space-y-3">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between border rounded-lg p-3">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  {appointment.type === "video" ? (
                    <Video className="h-5 w-5 text-primary" />
                  ) : appointment.type === "chat" ? (
                    <MessageSquare className="h-5 w-5 text-primary" />
                  ) : (
                    <Calendar className="h-5 w-5 text-primary" />
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-medium">{appointment.doctor}</h4>
                  <p className="text-xs text-muted-foreground">{appointment.specialty}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs">{appointment.date}</span>
                    <Clock className="h-3 w-3 text-muted-foreground ml-1" />
                    <span className="text-xs">{appointment.time}</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                {appointment.type === "video" ? "Join Call" : appointment.type === "chat" ? "Start Chat" : "Details"}
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

