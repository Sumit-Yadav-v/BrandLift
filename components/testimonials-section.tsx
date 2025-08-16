"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Restaurant Owner",
    company: "Bella Vista Bistro",
    content:
      "Our new website has increased online reservations by 300%. The design perfectly captures our restaurant's atmosphere.",
    rating: 5,
    avatar: "/professional-woman-headshot.png",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "TechFlow Solutions",
    content:
      "Professional, responsive, and delivered on time. Our conversion rate improved significantly after the redesign.",
    rating: 5,
    avatar: "/professional-man-headshot.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Boutique Owner",
    company: "Style & Grace",
    content: "The e-commerce integration was seamless. Sales have doubled since launching our new website.",
    rating: 5,
    avatar: "/professional-woman-headshot-fashion.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business owners say about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 shadow-xl">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-2xl text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-foreground text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
