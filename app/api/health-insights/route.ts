import { NextResponse } from "next/server"
import { generateHealthInsights } from "@/lib/ai-service"

export async function POST(request: Request) {
  try {
    const { healthData } = await request.json()

    if (!healthData || typeof healthData !== "object") {
      return NextResponse.json({ error: "Health data is required and must be an object" }, { status: 400 })
    }

    const result = await generateHealthInsights(healthData)

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 })
    }

    return NextResponse.json({ data: result.data })
  } catch (error) {
    console.error("Error in health insights API:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}

