import wallPanelImg from '../assets/Wall_Panel.webp';
import ceilingBafflesImg from '../assets/cielingbaffles.jpg';
import ceilingCloudImg from '../assets/cielingcloud.jpg';
import acousticLightingImg from '../assets/accousticimage.jpg';
import partitionImg from '../assets/partiion.jpeg';
import { useState, useEffect } from 'react';

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
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
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