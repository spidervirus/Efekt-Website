import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'who-we-serve', label: 'Who We Serve' },
  { id: 'panel-types', label: 'Panel Types' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'why-choose-us', label: 'Why Choose Us' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Find the section currently in view
      let current = 'home';
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = section.id;
            break;
          }
        }
      }
      setActiveSection(current);
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll(); // set on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-soft border-b border-border/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">E</span>
            </div>
            <span className="text-xl font-bold text-foreground">EFEKT</span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`transition-colors ${
                  activeSection === section.id
                    ? 'text-primary font-medium'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a href="#contact" className="hidden md:inline-flex">
              <Button variant="minimal" size="sm">
                Get Quote
              </Button>
            </a>
            <a href="https://wa.me/971588629216" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="sm">
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}