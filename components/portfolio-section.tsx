'use client'

import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A full-featured online store with payment integration and inventory management.',
    gradient: 'from-primary/30 to-accent/30'
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    description: 'Analytics dashboard with real-time data visualization and reporting tools.',
    gradient: 'from-accent/30 to-primary/30'
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure mobile application for banking transactions and financial management.',
    gradient: 'from-secondary/30 to-accent/30'
  },
  {
    id: 4,
    title: 'Corporate Website',
    category: 'Web Design',
    description: 'Modern, responsive corporate website showcasing company services.',
    gradient: 'from-primary/30 to-secondary/30'
  },
  {
    id: 5,
    title: 'Social Media Platform',
    category: 'Web Development',
    description: 'Community-driven platform with user engagement and content sharing features.',
    gradient: 'from-accent/30 to-secondary/30'
  },
  {
    id: 6,
    title: 'Content Management System',
    category: 'Web Development',
    description: 'Intuitive CMS for easy content creation, management, and publishing.',
    gradient: 'from-secondary/30 to-primary/30'
  },
]

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Showcase of our latest work and client success stories.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer h-full"
            >
              <div className={`bg-gradient-to-br ${project.gradient} rounded-xl p-8 h-64 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/70 hover:scale-105`}>
                <div>
                  <div className="inline-block mb-4">
                    <span className="text-sm font-semibold text-primary bg-gradient-to-r from-primary/30 to-accent/20 px-3 py-1 rounded-full border border-primary/20">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center bg-gradient-to-r from-primary/20 to-accent/20 text-primary font-semibold group-hover:gap-3 gap-2 transition-all px-3 py-2 rounded-lg w-fit">
                  View Project
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all hover:shadow-primary/50">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
