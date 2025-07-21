import { Building2, Home, Mic, School } from 'lucide-react';

const audiences = [
  {
    icon: Building2,
    title: 'Office Spaces',
    description: 'Reduce echo in meeting rooms & open work areas',
  },
  {
    icon: Home,
    title: 'Villas & Apartments',
    description: 'Soundproof bedrooms, home theaters & living rooms',
  },
  {
    icon: Mic,
    title: 'Studios & Podcasts',
    description: 'Create pro-level recording environments',
  },
  {
    icon: School,
    title: 'Restaurants & Schools',
    description: 'Control noise in busy spaces',
  },
];

export default function WhoWeServeSection() {
  return (
    <section id="who-we-serve" className="py-20 bg-background scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Who Needs Acoustic Panels?</h2>
        <p className="text-center text-lg text-muted-foreground mb-10">No matter the space — if it echoes, we’ll fix it.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {audiences.map((aud, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="mb-4 bg-gray-100 rounded-full p-4 flex items-center justify-center">
                <aud.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{aud.title}</h3>
              <p className="text-gray-600 text-base">{aud.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 