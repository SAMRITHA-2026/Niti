"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { day: "Mon", heartRate: 72, bloodPressureSys: 120, bloodPressureDia: 80, bloodGlucose: 95 },
  { day: "Tue", heartRate: 75, bloodPressureSys: 122, bloodPressureDia: 82, bloodGlucose: 98 },
  { day: "Wed", heartRate: 71, bloodPressureSys: 118, bloodPressureDia: 79, bloodGlucose: 94 },
  { day: "Thu", heartRate: 73, bloodPressureSys: 121, bloodPressureDia: 81, bloodGlucose: 97 },
  { day: "Fri", heartRate: 70, bloodPressureSys: 119, bloodPressureDia: 80, bloodGlucose: 96 },
  { day: "Sat", heartRate: 74, bloodPressureSys: 123, bloodPressureDia: 83, bloodGlucose: 99 },
  { day: "Sun", heartRate: 76, bloodPressureSys: 125, bloodPressureDia: 84, bloodGlucose: 101 },
]

export function HealthMetricsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="heartRate" stroke="#8884d8" name="Heart Rate (BPM)" />
          <Line type="monotone" dataKey="bloodPressureSys" stroke="#82ca9d" name="Systolic BP (mmHg)" />
          <Line type="monotone" dataKey="bloodGlucose" stroke="#ffc658" name="Blood Glucose (mg/dL)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

