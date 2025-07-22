import { Building, Ruler, Leaf, Users } from 'lucide-react';

const props = [
  {
    icon: Building,
    title: 'Made for the Modern UAE',
    description: 'Designed for fast-paced workplaces, refined retail, and hybrid environments across Dubai, Abu Dhabi, and the wider GCC.'
  },
  {
    icon: Ruler,
    title: 'Design-First Acoustics',
    description: 'We blend sound science with architectural elegance — no compromises.'
  },
  {
    icon: Leaf,
    title: 'Eco-Conscious Manufacturing',
    description: 'Our panels are made using recycled, non-toxic, and LEED-compliant materials.'
  },
  {
    icon: Users,
    title: 'Customisation & Collaboration',
    description: 'We partner with interior designers, architects, and fit-out contractors to deliver tailor-made acoustic solutions.'
  }
];

export default function WhyEfektSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose EFEKT?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {props.map((prop, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <div className="mb-4 bg-gray-100 rounded-full p-4 flex items-center justify-center">
                <prop.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
              <p className="text-gray-600 text-base">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 