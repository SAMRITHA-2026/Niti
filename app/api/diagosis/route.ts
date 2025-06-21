import { NextResponse } from "next/server"
import { analyzeSymptoms } from "@/lib/ai-service"

export async function POST(request: Request) {
  try {
    const { symptoms } = await request.json()

    if (!symptoms || typeof symptoms !== "string") {
      return NextResponse.json({ error: "Symptoms are required and must be a string" }, { status: 400 })
    }

    const result = await analyzeSymptoms(symptoms)

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 })
    }

    return NextResponse.json({ data: result.data })
  } catch (error) {
    console.error("Error in diagnosis API:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}

