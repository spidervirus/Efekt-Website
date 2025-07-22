import officeSpaceImg from '../assets/Office_space.jpg';
import villaImg from '../assets/villa.jpg.webp';
import studioImg from '../assets/sound&podcast.jpg';
import restaurantImg from '../assets/restaurant.jpg.webp';

const audiences = [
  {
    image: officeSpaceImg,
    title: 'Office Spaces',
    description: 'Reduce echo in meeting rooms & open work areas',
  },
  {
    image: villaImg,
    title: 'Villas & Apartments',
    description: 'Soundproof bedrooms, home theaters & living rooms',
  },
  {
    image: studioImg,
    title: 'Studios & Podcasts',
    description: 'Create pro-level recording environments',
  },
  {
    image: restaurantImg,
    title: 'Restaurants & Schools',
    description: 'Control noise in busy spaces',
  },
];

export default function WhoWeServeSection() {
  return (
    <section id="who-we-serve" className="py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Who Needs Acoustic Panels?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">No matter the space — if it echoes, we'll fix it.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((aud, idx) => (
            <div key={idx} className="group relative bg-black rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-800">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={aud.image} 
                  alt={aud.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content Container */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{aud.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{aud.description}</p>
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