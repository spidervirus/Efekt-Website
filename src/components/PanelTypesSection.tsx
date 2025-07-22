import wallPanelImg from '../assets/Wall_Panel.webp';
import ceilingBafflesImg from '../assets/cielingbaffles.jpg';
import ceilingCloudImg from '../assets/cielingcloud.jpg';
import acousticLightingImg from '../assets/accousticimage.jpg';
import partitionImg from '../assets/partiion.jpeg';
import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const panelTypes = [
  {
    image: wallPanelImg,
    title: 'Wall Panels',
    description: 'Slim, stylish, and built to absorb sound — ideal for offices, bedrooms, and studios.'
  },
  {
    images: [ceilingBafflesImg, ceilingCloudImg],
    title: 'Ceiling Panels',
    description: 'Discreet overhead panels that drastically reduce echo in large or open spaces.',
    variants: ['Ceiling Baffles', 'Ceiling Clouds']
  },
  {
    image: acousticLightingImg,
    title: 'Acoustic Lighting',
    description: 'Innovative lighting solutions that combine illumination with sound absorption for modern spaces.'
  },
  {
    image: partitionImg,
    title: 'Partitions',
    description: 'Sound-absorbing room dividers that create privacy while reducing noise between spaces.'
  },
  {
    image: '/placeholder.svg',
    title: 'Custom Designs',
    description: 'You choose the shape, size, color, and material. We deliver a solution that fits — acoustically and visually.'
  }
];

export default function PanelTypesSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Slideshow effect for ceiling panels
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => prev === 0 ? 1 : 0);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="panel-types" className="py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Types of Acoustic Panels We Offer</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose the perfect acoustic solution for your space.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {panelTypes.map((type, idx) => (
            <div key={idx} className="group relative bg-black rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-800">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                {type.images ? (
                  // Slideshow for ceiling panels
                  <>
                    <img 
                      src={type.images[currentImageIndex]} 
                      alt={`${type.title} - ${type.variants[currentImageIndex]}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg"></div>
                  </>
                ) : (
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{type.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm mb-4">{type.description}</p>
                {type.variants && (
                  <div className="mt-4">
                    <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-3"></div>
                    <div className="space-y-2">
                      {type.variants.map((variant, variantIdx) => (
                        <div key={variantIdx} className="text-xs text-blue-300 bg-blue-500/20 px-2 py-1 rounded-lg border border-blue-400/30 hover:bg-blue-500/30 transition-colors duration-200 text-center">
                          {variant}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Enquire Button */}
                <a 
                  href={`https://wa.me/971588629216?text=Hi, I'm interested in ${type.title}. Can you provide more information?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Enquire Now
                </a>
              </div>
              
              {/* Hover Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}