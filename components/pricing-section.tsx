"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "₹1,999",
    description: "Perfect for small businesses getting started online",
    features: ["One page",
     "Clean design", 
     "Contact form",
      "Google map", 
      "Mobile ready", 
      "Low cost"],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹2,999",
    description: "Most popular choice for growing businesses",
    features: [
      "Four pages",
      "Custom design",
      "Smooth animations",
      "WhatsApp integration",
      "Call button",
      "Product cards",
      "Easy edit",
      "Free support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹5,999",
    description: "Complete solution for established businesses",
    features: [
      "Unlimited pages",
      "Premium design",
      "Crazy animations",
      "Domain hosting",
      "SEO boost",
      "Owner panel",
      "Add products",
      "Edit products",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no monthly charges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                plan.popular ? "border-primary shadow-xl scale-105" : "border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-primary mb-4">{plan.price}</div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-6 text-lg transition-all duration-300 hover:scale-105`}
                  variant={plan.popular ? "default" : "outline"}
                >
                   <Link href="https://chat.whatsapp.com/I5CkMyjvfOFDx3tFDHFwk2">
                  Get Started
                     </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
