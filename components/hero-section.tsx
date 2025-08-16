"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Star } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-muted/30 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-20 right-20 w-4 h-4 bg-primary rounded-full animate-ping" />
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-accent rounded-full animate-pulse" />
        <div
          className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary/20 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center mb-6 group">
            <div className="relative">
              <Zap className="w-8 h-8 text-primary mr-3 animate-pulse group-hover:scale-110 transition-transform duration-300" />
              <Star
                className="w-4 h-4 text-accent absolute -top-1 -right-1 animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
            <span className="text-muted-foreground font-medium tracking-wide bg-gradient-to-r from-muted-foreground to-primary bg-clip-text text-transparent">
              BRANDLIFT PREMIUM DESIGN
            </span>
            <Sparkles className="w-6 h-6 text-accent ml-3 animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            We{" "}
            <span className="relative inline-block">
              <span className="text-primary bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
                Lift Your Brand
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
            </span>{" "}
            With Stunning Websites
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with <span className="text-primary font-semibold">BrandLift</span> - where
            creativity meets conversion. Professional websites that don't just look amazing, they <em>perform</em>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 animate-glow hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 hover:bg-muted transition-all duration-300 bg-transparent border-2 hover:border-primary hover:text-primary hover:scale-105 shadow-md hover:shadow-lg"
            >
              View Our Work
              <Sparkles className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-accent mr-1" />
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 text-primary mr-1" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="w-4 h-4 text-accent mr-1" />
              <span>100% Custom</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
