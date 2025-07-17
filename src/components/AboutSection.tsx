import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Leaf, Users, Award, MapPin, Phone, Mail } from 'lucide-react'

const features = [
  {
    icon: CheckCircle,
    title: "Made for the Modern UAE",
    description: "Designed for fast-paced workplaces, refined retail, and hybrid environments across Dubai, Abu Dhabi, and the wider GCC."
  },
  {
    icon: Award,
    title: "Design-First Acoustics", 
    description: "We blend sound science with architectural elegance — no compromises."
  },
  {
    icon: Leaf,
    title: "Eco-Conscious Manufacturing",
    description: "Our panels are made using recycled, non-toxic, and LEED-compliant materials."
  },
  {
    icon: Users,
    title: "Customisation & Collaboration",
    description: "We partner with interior designers, architects, and fit-out contractors to deliver tailor-made acoustic solutions."
  }
]

const services = [
  "Wall-mounted and ceiling acoustic panels",
  "Wood slat and felt acoustic systems", 
  "Custom acoustic artwork and branded installations",
  "Soundproofing consultation and fit-out partnerships"
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            About EFEKT
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
            About us
          </h1>
          <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
            Transforming Spaces Through Sound & Design
          </h2>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="text-center space-y-6">
            <p className="text-xl lg:text-2xl text-foreground leading-relaxed">
              At EFEKT, we believe that acoustics should do more than absorb sound — they should inspire calm, 
              enhance focus, and elevate design. Based in the UAE, we are a next-generation acoustic solutions 
              brand delivering high-performance panels that merge functionality with modern aesthetics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether it's a dynamic office, a wellness studio, a retail boutique, or a learning environment, 
              our mission is to create spaces where sound works for people, not against them.
            </p>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-4xl font-bold text-foreground mb-6">
                  What We Do
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  EFEKT designs and manufactures premium acoustic panels and solutions that reduce noise, 
                  improve speech clarity, and complement interior design. Our products are crafted using 
                  eco-conscious materials like recycled PET felt and sustainably sourced wood, and are 
                  tested to meet global acoustic performance standards including NRC and STC ratings.
                </p>
              </div>

              {/* Services List */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground mb-4">We offer:</h4>
                {services.map((service, index) => (
                  <div 
                    key={service}
                    className="flex items-start space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-foreground">{service}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative animate-fade-in">
              <Card className="p-8 bg-background/50 backdrop-blur-sm shadow-warm border-border/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Noise Reduction</span>
                    <span className="text-2xl font-bold text-foreground">-40dB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Material Source</span>
                    <span className="text-lg font-semibold text-foreground">100% Recycled</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Performance Rating</span>
                    <span className="text-lg font-semibold text-foreground">NRC 0.85</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Manufacturing</span>
                    <span className="text-lg font-semibold text-foreground">UAE Made</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Why Choose EFEKT */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Why Choose EFEKT?
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine cutting-edge acoustic science with premium design to deliver 
              solutions that enhance both form and function.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="p-8 bg-background/70 backdrop-blur-sm border-border/20 hover:shadow-warm transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto p-8 bg-background/80 backdrop-blur-sm shadow-premium border-border/20 animate-fade-in">
            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-bold text-foreground mb-2">
                  Headquarters
                </h4>
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>Dubai, UAE</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-foreground">+971 XX XXX XXXX</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground">hello@efekt.ae</span>
                </div>
              </div>

              <div className="pt-6 border-t border-border/20">
                <Button variant="premium" size="lg" className="w-full md:w-auto">
                  Get in Touch
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}