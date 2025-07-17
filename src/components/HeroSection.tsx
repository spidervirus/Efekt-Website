import { ArrowRight, Volume2, VolumeX } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Scene3D from './Scene3D'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <Scene3D interactive={false} />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Premium Acoustic Solutions</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Redefining
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Experience
                </span>
              </h1>
              
              <div className="flex items-center space-x-4 text-lg text-muted-foreground">
                <VolumeX className="w-6 h-6" />
                <div className="w-12 h-0.5 bg-gradient-to-r from-muted-foreground to-transparent"></div>
                <Volume2 className="w-6 h-6" />
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Transform noise into clarity with our premium acoustic panels. 
              Designed for modern spaces across the UAE and beyond.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Explore Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="minimal" size="xl">
                View Products
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">UAE</div>
                <div className="text-sm text-muted-foreground">Made</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Scene */}
          <div className="relative lg:h-[600px] h-[400px] animate-panel-slide">
            <Scene3D className="rounded-3xl shadow-premium" />
            
            {/* Floating Elements */}
            <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-sm p-4 rounded-2xl shadow-warm animate-float">
              <div className="text-sm text-muted-foreground">Noise Reduction</div>
              <div className="text-2xl font-bold text-foreground">-40dB</div>
            </div>
            
            <div className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-sm p-4 rounded-2xl shadow-warm animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-sm text-muted-foreground">Material</div>
              <div className="text-lg font-semibold text-foreground">Eco-Felt</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}