// Removed lucide-react import to fix module error
import { Button } from '@/components/ui/button'
import Scene3D from './Scene3D'
import SoundWave3D from './SoundWave3D'
import { useState } from 'react'
import heroImage from '../assets/herosection.jpeg'

const stats = [
  { value: '500+', label: 'Projects' },
  { value: '-40dB', label: 'Noise Reduction' },
  { value: '100%', label: 'Satisfaction' },
]

export default function HeroSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your backend or show a success message
    alert('Thank you! We will contact you soon.');
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  // Handler to scroll to the form section
  const handleScrollToForm = () => {
    const formSection = document.getElementById('contact');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // WhatsApp link (replace with your business number if needed)
  const whatsappLink = 'https://wa.me/971588629216';

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      {/* 3D Sound Wave Background */}
      <SoundWave3D className="z-1" style={{ opacity: 0.2 }} />
      {/* 3D Panel Background */}
      <div className="absolute inset-0 w-full h-full opacity-20 z-1">
        <Scene3D interactive={true} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-2xl mb-6">
              Custom Acoustic Panels in UAE – <span className="block">Engineered to Silence Noise</span>
            </h1>
            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-white leading-relaxed mb-8 drop-shadow-lg font-medium">
              Wall and ceiling acoustic solutions for offices, villas, studios, and commercial spaces.<br />
              <span className="block mt-2 text-white font-semibold bg-black/30 border border-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">Fast Installation | 100% Made-to-Fit | Free Expert Consultation</span>
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="minimal" size="xl">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get Your Free Quote</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700" htmlFor="hero-name">Full Name</label>
                    <input
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      type="text"
                      id="hero-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700" htmlFor="hero-phone">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      type="tel"
                      id="hero-phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      placeholder="+971 XX XXX XXXX"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700" htmlFor="hero-email">Email Address</label>
                    <input
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      type="email"
                      id="hero-email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700" htmlFor="hero-message">Project Details</label>
                    <textarea
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      id="hero-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your space and requirements"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
                  >
                    Book Your Site Assessment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}