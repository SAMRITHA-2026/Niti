import { Button } from "@/components/ui/button"
import { Pill, Clock, CheckCircle2 } from "lucide-react"

const medications = [
  {
    id: 1,
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    time: "8:00 AM",
    taken: true,
  },
  {
    id: 2,
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    time: "12:00 PM",
    taken: false,
  },
  {
    id: 3,
    name: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once daily",
    time: "8:00 PM",
    taken: false,
  },
]

export function MedicationReminders() {
  return (
    <div className="space-y-4">
      {medications.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[200px] text-center">
          <Pill className="h-10 w-10 text-muted-foreground mb-2" />
          <h3 className="text-lg font-medium">No Medications</h3>
          <p className="text-sm text-muted-foreground mt-1">Add your medications to receive reminders.</p>
          <Button className="mt-4">Add Medication</Button>
        </div>
      ) : (
        <div className="space-y-3">
          {medications.map((medication) => (
            <div key={medication.id} className="flex items-center justify-between border rounded-lg p-3">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <Pill className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">{medication.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {medication.dosage} - {medication.frequency}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs">{medication.time}</span>
                  </div>
                </div>
              </div>
              <Button
                variant={medication.taken ? "outline" : "default"}
                size="sm"
                className={medication.taken ? "text-green-600" : ""}
              >
                {medication.taken ? (
                  <>
                    <CheckCircle2 className="mr-1 h-4 w-4" />
                    Taken
                  </>
                ) : (
                  "Mark as Taken"
                )}
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

