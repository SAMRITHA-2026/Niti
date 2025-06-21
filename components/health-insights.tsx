import { Brain, TrendingUp, AlertTriangle } from "lucide-react"

const insights = [
  {
    id: 1,
    type: "improvement",
    title: "Heart Rate Improvement",
    description:
      "Your resting heart rate has improved by 5 BPM over the past month, indicating better cardiovascular health.",
    recommendation: "Continue your current exercise routine for optimal results.",
  },
  {
    id: 2,
    type: "alert",
    title: "Blood Pressure Trend",
    description: "Your blood pressure readings have been slightly elevated over the past week.",
    recommendation: "Consider reducing sodium intake and scheduling a check-up with your doctor.",
  },
  {
    id: 3,
    type: "insight",
    title: "Sleep Pattern Analysis",
    description: "Your sleep quality has been inconsistent, with an average of 6.5 hours per night.",
    recommendation: "Try to maintain a consistent sleep schedule and avoid screen time before bed.",
  },
]

export function HealthInsights() {
  return (
    <div className="space-y-4">
      {insights.map((insight) => (
        <div
          key={insight.id}
          className={`p-3 rounded-lg border ${
            insight.type === "alert"
              ? "bg-orange-50 border-orange-200 dark:bg-orange-950 dark:border-orange-800"
              : insight.type === "improvement"
                ? "bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800"
                : "bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800"
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                insight.type === "alert"
                  ? "bg-orange-100 dark:bg-orange-900"
                  : insight.type === "improvement"
                    ? "bg-green-100 dark:bg-green-900"
                    : "bg-blue-100 dark:bg-blue-900"
              }`}
            >
              {insight.type === "alert" ? (
                <AlertTriangle className={`h-4 w-4 text-orange-600 dark:text-orange-400`} />
              ) : insight.type === "improvement" ? (
                <TrendingUp className={`h-4 w-4 text-green-600 dark:text-green-400`} />
              ) : (
                <Brain className={`h-4 w-4 text-blue-600 dark:text-blue-400`} />
              )}
            </div>
            <div>
              <h4
                className={`text-sm font-medium ${
                  insight.type === "alert"
                    ? "text-orange-700 dark:text-orange-400"
                    : insight.type === "improvement"
                      ? "text-green-700 dark:text-green-400"
                      : "text-blue-700 dark:text-blue-400"
                }`}
              >
                {insight.title}
              </h4>
              <p
                className={`text-xs mt-1 ${
                  insight.type === "alert"
                    ? "text-orange-700 dark:text-orange-400"
                    : insight.type === "improvement"
                      ? "text-green-700 dark:text-green-400"
                      : "text-blue-700 dark:text-blue-400"
                }`}
              >
                {insight.description}
              </p>
              <p
                className={`text-xs font-medium mt-2 ${
                  insight.type === "alert"
                    ? "text-orange-700 dark:text-orange-400"
                    : insight.type === "improvement"
                      ? "text-green-700 dark:text-green-400"
                      : "text-blue-700 dark:text-blue-400"
                }`}
              >
                Recommendation: {insight.recommendation}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

