"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

interface SymptomCheckerProps {
  symptoms: string[]
}

export function SymptomChecker({ symptoms }: SymptomCheckerProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])

  const toggleSymptom = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom))
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom])
    }
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {symptoms.map((symptom) => (
          <div key={symptom} className="flex items-center space-x-2">
            <Checkbox
              id={`symptom-${symptom}`}
              checked={selectedSymptoms.includes(symptom)}
              onCheckedChange={() => toggleSymptom(symptom)}
            />
            <label
              htmlFor={`symptom-${symptom}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {symptom}
            </label>
          </div>
        ))}
      </div>

      {selectedSymptoms.length > 0 && (
        <Button size="sm" className="w-full mt-2">
          Analyze Selected Symptoms
        </Button>
      )}
    </div>
  )
}

