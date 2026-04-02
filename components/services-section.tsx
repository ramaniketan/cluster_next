'use client'

import { Layout, Code, Palette, Smartphone, Search, Zap } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Web Design',
    description: 'Beautiful, modern designs that capture your brand identity and engage your audience.'
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Fully responsive, fast-loading websites built with the latest technologies.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Intuitive user interfaces and seamless user experiences that delight.'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Strategic optimization to improve your online visibility and drive organic traffic.'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Fast, efficient, and optimized solutions that perform at the highest level.'
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            My Services
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Specialized design solutions crafted to bring your unique vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const gradients = [
              'from-primary/15 to-accent/5',
              'from-accent/15 to-primary/5',
              'from-primary/10 to-secondary/10',
              'from-accent/15 to-secondary/5',
              'from-primary/15 to-accent/5',
              'from-secondary/15 to-primary/5'
            ]
            return (
              <div
                key={index}
                className={`p-8 bg-gradient-to-br ${gradients[index % 6]} rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group cursor-pointer hover:scale-105`}
              >
                <div className="mb-4 inline-flex p-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all">
                  <IconComponent size={24} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
