"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Ready to Own Your Business Website?</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Join hundreds of successful businesses who chose professional web design without the ongoing costs and
            restrictions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="text-xl px-12 py-8 animate-glow hover:scale-105 transition-transform duration-300"
            >
                    <Link href="/contact">
        Start Your Project Today
        <ArrowRight className="ml-3 w-6 h-6 inline" />
      </Link>
            </Button>
{/*             <Button
              variant="outline"
              size="lg"
              className="text-xl px-12 py-8 hover:bg-muted transition-colors duration-300 bg-transparent"
            >
              Schedule a Call
              <Phone className="ml-3 w-6 h-6" />
            </Button> */}
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-muted-foreground">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+91-8349313762 </span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>Pratikjain9109@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
