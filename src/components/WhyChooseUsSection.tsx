import { MapPin, Wrench, Truck, Flame, Users, Check } from 'lucide-react';

const reasons = [
  {
    icon: MapPin,
    title: 'UAE-Based Acoustic Experts',
  },
  {
    icon: Wrench,
    title: 'Custom-Made Panels – Not Generic Off-the-Shelf',
  },
  {
    icon: Truck,
    title: 'Fast Delivery & Installation Across the UAE',
  },
  {
    icon: Flame,
    title: 'Fire-Retardant & Eco-Friendly Materials',
  },
  {
    icon: Users,
    title: 'Experienced Team – Trusted by Offices, Studios & Interior Designers',
  },
  {
    icon: Check,
    title: '200+ successful installs across Dubai, Abu Dhabi & Sharjah',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-black rounded-xl shadow-lg border border-gray-800">
              <div className="mb-4 bg-white/10 rounded-full p-4 flex items-center justify-center">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-base font-semibold text-white">{reason.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}