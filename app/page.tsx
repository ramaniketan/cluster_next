'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import PortfolioSection from '@/components/portfolio-section'
import TestimonialsSection from '@/components/testimonials-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-background text-foreground">
      <Navbar activeSection={activeSection} />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="portfolio">
        <PortfolioSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  )
}
