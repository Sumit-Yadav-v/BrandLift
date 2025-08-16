"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Modern Restaurant",
    category: "Restaurant & Food",
    image: "/modern-restaurant-website.png",
    description: "Elegant restaurant website with online reservations and menu showcase.",
  },
  {
    title: "Tech Startup",
    category: "Technology",
    image: "/tech-startup-landing-page.png",
    description: "Clean, professional landing page for a SaaS technology company.",
  },
  {
    title: "Fashion Boutique",
    category: "E-commerce",
    image: "/fashion-boutique-ecommerce.png",
    description: "Stylish e-commerce platform with seamless shopping experience.",
  },
  {
    title: "Medical Practice",
    category: "Healthcare",
    image: "/medical-practice-website.png",
    description: "Professional healthcare website with appointment booking system.",
  },
  {
    title: "Creative Agency",
    category: "Creative",
    image: "/creative-agency-portfolio.png",
    description: "Bold, creative portfolio showcasing agency work and services.",
  },
  {
    title: "Local Business",
    category: "Service",
    image: "/local-business-website.png",
    description: "Local service business website with contact forms and testimonials.",
  },
]

export function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses like yours establish a strong online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/50 hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-64 object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-primary/80 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Button variant="secondary" size="sm">
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
