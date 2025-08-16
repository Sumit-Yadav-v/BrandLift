import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "BrandLift - Premium Web Design That Converts",
  description:
    "Transform your business with BrandLift. Professional websites that lift your brand and convert visitors into customers.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {/* ✅ Header Text */}
        <header className="p-4 bg-gray-900 text-white text-center">
          🚀 Welcome to BrandLift!
        </header>

        {/* ✅ Page Content */}
        {children}

        {/* ✅ Footer Text */}
        <footer className="p-4 bg-gray-900 text-white text-center">
          © 2025 BrandLift. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
