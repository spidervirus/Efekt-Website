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
      {/* Enhanced gradient overlay for better visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-purple-900/30 z-0"></div>
      {/* Animated floating particles */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-40 w-1.5 h-1.5 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>
      
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
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                Custom Acoustic Panels in UAE –
              </span>
              <span className="block bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent drop-shadow-2xl mt-2">
                Engineered to Silence Noise
              </span>
            </h1>
            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-white leading-relaxed mb-8 drop-shadow-lg font-medium">
              <span className="hidden md:inline">Wall and ceiling acoustic solutions for offices, villas, studios, and commercial spaces.<br /></span>
              <span className="block mt-4 text-white font-semibold bg-gradient-to-r from-black/40 to-purple-900/40 border border-white/30 rounded-xl px-6 py-3 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                 Fast Installation | 100% Made-to-Fit | Free Expert Consultation
              </span>
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border border-green-400/30">
                  <span className="text-2xl">💬</span>
                  <span className="text-lg">Chat on WhatsApp</span>
                  <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse group-hover:animate-bounce"></div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 shadow-lg">
                    <span className="text-2xl text-white">📋</span>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Get Your Free Quote</h3>
                  <p className="text-sm text-gray-600 mt-2">Transform your space with custom acoustic solutions</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="group">
                    <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2" htmlFor="hero-name">
                      <span className="text-blue-500">👤</span> Full Name
                    </label>
                    <input
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 bg-gray-50/50 focus:bg-white"
                      type="text"
                      id="hero-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="group">
                    <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2" htmlFor="hero-phone">
                      <span className="text-green-500">📱</span> Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:border-gray-300 bg-gray-50/50 focus:bg-white"
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
                  <div className="group">
                    <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2" htmlFor="hero-email">
                      <span className="text-purple-500">📧</span> Email Address
                    </label>
                    <input
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-gray-300 bg-gray-50/50 focus:bg-white"
                      type="email"
                      id="hero-email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="group">
                    <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2" htmlFor="hero-message">
                      <span className="text-orange-500">📝</span> Project Details
                    </label>
                    <textarea
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-gray-300 bg-gray-50/50 focus:bg-white resize-none"
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
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 border border-blue-500/30 group"
                  >
                    <span className="text-xl">🎯</span>
                    <span>Book Your Site Assessment</span>
                    <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse group-hover:animate-bounce"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 group cursor-pointer">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl">
          <div className="w-1.5 h-4 bg-gradient-to-b from-white to-blue-200 rounded-full mt-2 animate-pulse group-hover:animate-bounce"></div>
        </div>
        <div className="text-white/70 text-xs text-center mt-2 font-medium">Scroll</div>
      </div>
    </section>
  )
}