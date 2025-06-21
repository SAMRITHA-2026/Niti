"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Video, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface DoctorCardProps {
  name: string
  specialty: string
  rating: number
  availability: string
  imageUrl: string
  onSelect: () => void
}

export function DoctorCard({ name, specialty, rating, availability, imageUrl, onSelect }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground">{specialty}</p>
            <div className="flex items-center mt-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs ml-1">{rating}</span>
            </div>
            <p className="text-xs text-green-600 mt-1">{availability}</p>
          </div>
        </div>
      </div>
      <CardContent className="p-0">
        <div className="border-t px-6 py-3">
          <h4 className="text-xs font-medium mb-2">Specializes in:</h4>
          <div className="flex flex-wrap gap-1">
            <span className="text-xs bg-muted px-2 py-1 rounded-full">Heart Disease</span>
            <span className="text-xs bg-muted px-2 py-1 rounded-full">Hypertension</span>
            <span className="text-xs bg-muted px-2 py-1 rounded-full">Preventive Care</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 p-4 pt-2">
        <Button variant="outline" size="sm" className="flex-1">
          <Video className="h-4 w-4 mr-1" />
          Video
        </Button>
        <Button size="sm" className="flex-1" onClick={onSelect}>
          <MessageSquare className="h-4 w-4 mr-1" />
          Chat
        </Button>
      </CardFooter>
    </Card>
  )
}

