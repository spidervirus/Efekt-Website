import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Leaf, Users, Award, MapPin, Mail } from 'lucide-react'

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
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
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