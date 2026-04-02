'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, Tech Startup',
    content: 'Working with this team was exceptional. They delivered a stunning website that exceeded our expectations and helped us grow our business significantly.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director',
    content: 'The team was professional, responsive, and creative. They understood our vision and brought it to life beautifully. Highly recommended!',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Founder, Design Agency',
    content: 'Fantastic collaboration from start to finish. The attention to detail and commitment to excellence truly sets them apart from other agencies.',
    rating: 5,
    avatar: '👩‍🎨'
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Product Manager',
    content: 'They transformed our outdated website into a modern, user-friendly platform. The results have been incredible for our conversion rates.',
    rating: 5,
    avatar: '👨‍💻'
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < Math.min(3, testimonials.length); i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return visible
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real testimonials from satisfied clients who trust us with their projects.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-8 bg-gradient-to-br from-card to-primary/5 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 mb-6 italic leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg transition-all hover:shadow-primary/50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="p-3 rounded-lg bg-gradient-to-r from-accent to-primary text-primary-foreground hover:shadow-lg transition-all hover:shadow-primary/50"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-border'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
