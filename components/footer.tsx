import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-primary mr-2" />
              <h3 className="text-2xl font-bold">BrandLift</h3>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              We lift your brand to new heights with professional websites that convert visitors into customers. No
              commissions, full ownership, transparent pricing.
            </p>
            { /* 
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 hover:text-primary transition-colors cursor-pointer hover:scale-110 transform duration-200" />
              <Twitter className="w-6 h-6 hover:text-primary transition-colors cursor-pointer hover:scale-110 transform duration-200" />
              <Instagram className="w-6 h-6 hover:text-primary transition-colors cursor-pointer hover:scale-110 transform duration-200" />
              <Linkedin className="w-6 h-6 hover:text-primary transition-colors cursor-pointer hover:scale-110 transform duration-200" />
            </div>
            */}
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li className="hover:text-background transition-colors cursor-pointer">Web Design</li>
              <li className="hover:text-background transition-colors cursor-pointer">E-commerce</li>
              <li className="hover:text-background transition-colors cursor-pointer">SEO Optimization</li>
              <li className="hover:text-background transition-colors cursor-pointer">Maintenance</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center hover:text-background transition-colors cursor-pointer">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91-8349313762 </span>
              </div>
              <div className="flex items-center hover:text-background transition-colors cursor-pointer">
                <Mail className="w-4 h-4 mr-2" />
                <span>Pratikjain9109@gmail.com</span>
              </div>
              <div className="flex items-center hover:text-background transition-colors cursor-pointer">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Indore, Madhya Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2025 Brand All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
