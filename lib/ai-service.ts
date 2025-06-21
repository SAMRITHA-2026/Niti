import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function analyzeSymptoms(symptoms: string) {
  try {
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: `Analyze the following symptoms and provide a preliminary diagnosis with possible conditions, their likelihood, and recommended actions. Format the response in a structured way that can be easily parsed.
      
      Symptoms: ${symptoms}`,
      system:
        "You are an AI medical assistant trained to analyze symptoms and provide preliminary diagnoses. You are not a replacement for professional medical advice.",
    })

    return {
      success: true,
      data: text,
    }
  } catch (error) {
    console.error("Error analyzing symptoms:", error)
    return {
      success: false,
      error: "Failed to analyze symptoms. Please try again.",
    }
  }
}

export async function generateHealthInsights(healthData: any) {
  try {
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: `Analyze the following health data and provide personalized insights and recommendations. Format the response in a structured way that can be easily parsed.
      
      Health Data: ${JSON.stringify(healthData)}`,
      system:
        "You are an AI health assistant trained to analyze health data and provide personalized insights and recommendations.",
    })

    return {
      success: true,
      data: text,
    }
  } catch (error) {
    console.error("Error generating health insights:", error)
    return {
      success: false,
      error: "Failed to generate health insights. Please try again.",
    }
  }
}

