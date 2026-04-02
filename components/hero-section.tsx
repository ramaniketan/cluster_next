'use client'

import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10 pt-16 relative overflow-hidden">
      {/* Gradient Blob Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-2 rounded-full border border-primary/30">
              Welcome to Cluster Design
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-pulse">
              Unique Designs That Matter
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            I create bespoke, visually stunning digital experiences that elevate your brand. 
            From concept through delivery, I design with purpose and precision to bring your unique vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={scrollToContact}
              className="relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-xl transition-all hover:shadow-primary/50 flex items-center justify-center gap-2 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            </button>

            <button className="px-8 py-4 border-2 border-gradient-to-r from-primary to-accent text-primary rounded-lg font-semibold hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all border-primary">
              View Our Work
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-foreground/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
