import { AlertTriangle, Brain, FileText, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function DiagnosisResult() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Preliminary Diagnosis</h3>
        <p className="text-sm text-muted-foreground">
          Based on your symptoms, our AI has identified the following possible conditions:
        </p>
      </div>

      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Common Cold</h4>
            <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">85% Match</span>
          </div>
          <Progress value={85} className="h-2 mb-3" />
          <p className="text-sm text-muted-foreground mb-3">
            A viral infection of the upper respiratory tract that typically causes symptoms such as sore throat, runny
            nose, congestion, and cough.
          </p>
          <div className="bg-muted p-3 rounded-md">
            <h5 className="text-sm font-medium mb-2">Recommended Actions:</h5>
            <ul className="text-sm space-y-1 list-disc pl-5">
              <li>Rest and stay hydrated</li>
              <li>Over-the-counter cold medications may help relieve symptoms</li>
              <li>Monitor symptoms for 7-10 days</li>
              <li>Seek medical attention if symptoms worsen or persist beyond 10 days</li>
            </ul>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Seasonal Allergies</h4>
            <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">65% Match</span>
          </div>
          <Progress value={65} className="h-2 mb-3" />
          <p className="text-sm text-muted-foreground mb-3">
            An immune response to environmental triggers such as pollen, causing symptoms like runny nose, sneezing, and
            congestion.
          </p>
          <div className="bg-muted p-3 rounded-md">
            <h5 className="text-sm font-medium mb-2">Recommended Actions:</h5>
            <ul className="text-sm space-y-1 list-disc pl-5">
              <li>Over-the-counter antihistamines may provide relief</li>
              <li>Avoid known allergens when possible</li>
              <li>Consider consulting with an allergist for testing</li>
            </ul>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Sinusitis</h4>
            <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">45% Match</span>
          </div>
          <Progress value={45} className="h-2 mb-3" />
          <p className="text-sm text-muted-foreground mb-3">
            Inflammation of the sinuses, often due to infection, causing symptoms like facial pressure, headache, and
            nasal congestion.
          </p>
          <div className="bg-muted p-3 rounded-md">
            <h5 className="text-sm font-medium mb-2">Recommended Actions:</h5>
            <ul className="text-sm space-y-1 list-disc pl-5">
              <li>Nasal saline rinses may help relieve symptoms</li>
              <li>Over-the-counter decongestants can provide temporary relief</li>
              <li>Consult a healthcare provider if symptoms persist beyond 10 days</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md flex items-start gap-2 dark:bg-yellow-950 dark:border-yellow-800">
        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0 dark:text-yellow-400" />
        <div>
          <p className="text-sm text-yellow-700 font-medium dark:text-yellow-400">Important Medical Disclaimer</p>
          <p className="text-xs text-yellow-700 mt-1 dark:text-yellow-400">
            This AI diagnosis is not a substitute for professional medical advice. Always consult with a healthcare
            provider for proper diagnosis and treatment.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button variant="outline" className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Save Results
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Brain className="h-4 w-4" />
          Detailed Analysis
        </Button>
        <Button className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          Consult Doctor
        </Button>
      </div>
    </div>
  )
}

