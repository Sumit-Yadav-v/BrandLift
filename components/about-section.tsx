"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Crown, Palette, DollarSign } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const benefits = [
  {
    icon: DollarSign,
    title: "No Commission",
    description: "Keep 100% of your revenue. No hidden fees or ongoing commissions.",
  },
  {
    icon: Crown,
    title: "Full Ownership",
    description: "You own your website completely. No vendor lock-in or restrictions.",
  },
  {
    icon: Palette,
    title: "Professional Design",
    description: "Custom designs that reflect your brand and convert visitors.",
  },
  {
    icon: Shield,
    title: "Affordable Plans",
    description: "Transparent pricing with packages that fit any budget.",
  },
]

export function AboutSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            benefits.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose Us?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe every business deserves a professional online presence without breaking the bank.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isVisible = visibleCards.includes(index)

            return (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border/50 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
