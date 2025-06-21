"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Paperclip, Send, Mic, Image, FileText } from "lucide-react"

interface ChatInterfaceProps {
  doctor: {
    name: string
    specialty: string
  }
}

export function ChatInterface({ doctor }: ChatInterfaceProps) {
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "doctor",
      content: `👋 Hello! I'm Dr. ${doctor.name}. How can I assist you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])

  const handleSendMessage = () => {
    if (!message.trim()) return

    const userMessage = {
      sender: "user",
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setChatHistory([...chatHistory, userMessage])
    setMessage("")

    setTimeout(() => {
      const doctorResponse = {
        sender: "doctor",
        content:
          "🩺 Thank you for sharing that. Can you let me know when your symptoms began and if they follow any pattern?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setChatHistory((prev) => [...prev, doctorResponse])
    }, 1500)
  }

  return (
    <div className="flex flex-col h-[600px] rounded-xl shadow-2xl border bg-gradient-to-b from-indigo-50 to-white p-4 dark:from-zinc-800 dark:to-zinc-900">
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex gap-2 max-w-[75%] ${msg.sender === "user" ? "flex-row-reverse" : ""}`}>
              <Avatar className="h-9 w-9 shadow-md">
                {msg.sender === "doctor" ? (
                  <>
                    <AvatarImage src="/placeholder.svg" alt={doctor.name} />
                    <AvatarFallback>
                      {doctor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </>
                ) : (
                  <>
                    <AvatarImage src="/placeholder.svg" alt="You" />
                    <AvatarFallback>YO</AvatarFallback>
                  </>
                )}
              </Avatar>
              <div>
                <div
                  className={`rounded-xl px-4 py-3 text-sm shadow-sm ${
                    msg.sender === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-zinc-200 dark:bg-zinc-700 dark:text-white"
                  }`}
                >
                  <p>{msg.content}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1 pl-2">{msg.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4 bg-white/70 dark:bg-zinc-800/70 rounded-xl">
        <div className="flex items-end gap-2">
          <div className="flex-1">
            <Textarea
              placeholder="Type your message..."
              className="min-h-[80px] resize-none border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Button size="icon" variant="ghost" className="rounded-full h-9 w-9 bg-zinc-100 dark:bg-zinc-700" type="button">
              <Paperclip className="h-4 w-4 text-zinc-600 dark:text-white" />
              <span className="sr-only">Attach file</span>
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full h-9 w-9 bg-zinc-100 dark:bg-zinc-700" type="button">
              <Image className="h-4 w-4 text-zinc-600 dark:text-white" />
              <span className="sr-only">Send image</span>
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full h-9 w-9 bg-zinc-100 dark:bg-zinc-700" type="button">
              <Mic className="h-4 w-4 text-zinc-600 dark:text-white" />
              <span className="sr-only">Voice message</span>
            </Button>
          </div>
          <Button
            size="icon"
            className="rounded-full h-10 w-10 flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
            onClick={handleSendMessage}
            disabled={!message.trim()}
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <Button variant="ghost" size="sm" className="h-7 px-3 text-xs text-indigo-600 dark:text-indigo-300">
            <FileText className="h-3 w-3 mr-1" />
            Share Medical Records
          </Button>
          <p className="text-xs text-muted-foreground italic">🔒 Your conversation is private and secure</p>
        </div>
      </div>
    </div>
  )
}
