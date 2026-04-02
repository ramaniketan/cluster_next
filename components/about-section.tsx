'use client'

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/40 via-accent/30 to-secondary/20 overflow-hidden border border-primary/30 shadow-lg">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/40 to-accent/30 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-4xl">🎨</span>
                  </div>
                  <p className="text-foreground/60 font-medium">Professional Design</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent/30 to-primary/20 rounded-xl blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-tr from-primary/20 to-accent/30 rounded-full blur-2xl"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                About Me
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-primary via-accent to-primary rounded-full"></div>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              I&apos;m a passionate designer dedicated to creating unique, purposeful digital experiences. 
              With a focus on bespoke design solutions, I work closely with clients to transform 
              their vision into stunning, functional reality.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              I believe that great design isn&apos;t just about aesthetics—it&apos;s about understanding 
              your brand, your audience, and your goals. Every project is an opportunity to craft 
              something truly unique that sets your brand apart.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="p-4 rounded-lg bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/20 hover:border-primary/50 transition-all">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">80+</div>
                <p className="text-sm text-foreground/60">Designs Created</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/20 hover:border-accent/50 transition-all">
                <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">40+</div>
                <p className="text-sm text-foreground/60">Satisfied Clients</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-br from-primary/15 to-secondary/10 border border-primary/20 hover:border-primary/50 transition-all">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">5★</div>
                <p className="text-sm text-foreground/60">Client Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
