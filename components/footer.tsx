'use client'

import Link from 'next/link'
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#home" onClick={() => scrollToSection('home')} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">RK</span>
              </div>
              <span className="font-bold text-lg">Cluster</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Crafting unique, purposeful digital designs that elevate brands and create lasting impressions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Web Design</Link></li>
              <li><Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Development</Link></li>
              <li><Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Mobile Apps</Link></li>
              <li><Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-primary-foreground/80">hello@modernstudio.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/20 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-primary-foreground/80 mb-6 md:mb-0">
            © {currentYear} Cluster Design. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
