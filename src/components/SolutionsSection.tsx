import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { GraduationCap, Building2, Store, Home, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: GraduationCap,
    title: "Classroom",
    subtitle: "Educational Spaces",
    description: "Improve Focus, Reduce Noise, Enhance Learning",
    features: ["Clear speech transmission", "Reduced echo", "Focus enhancement"],
    image: "/api/placeholder/400/300"
  },
  {
    icon: Building2,
    title: "Office",
    subtitle: "Workplace Solutions", 
    description: "Create productive, quiet work environments",
    features: ["Privacy enhancement", "Noise reduction", "Modern aesthetics"],
    image: "/api/placeholder/400/300"
  },
  {
    icon: Store,
    title: "Retail",
    subtitle: "Commercial Spaces",
    description: "Enhance customer experience with optimal acoustics",
    features: ["Customer comfort", "Brand experience", "Ambient control"],
    image: "/api/placeholder/400/300"
  },
  {
    icon: Home,
    title: "Residential",
    subtitle: "Home Comfort",
    description: "Transform your home into a peaceful sanctuary",
    features: ["Personal comfort", "Aesthetic design", "Noise control"],
    image: "/api/placeholder/400/300"
  }
]

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Acoustic Solutions for
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Every Space
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From classrooms to boardrooms, retail spaces to homes — we create 
            tailored acoustic environments that elevate your space.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card 
              key={solution.title}
              className="group p-6 bg-card/50 backdrop-blur-sm border-border/20 hover:shadow-warm transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <solution.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {solution.subtitle}
                  </p>
                  <p className="text-foreground font-medium mb-4">
                    {solution.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button variant="minimal" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button variant="premium" size="xl" className="animate-fade-in">
            View All Solutions
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}