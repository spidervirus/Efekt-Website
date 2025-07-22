import { LayoutPanelLeft, Layers, Lightbulb, Sparkles, Split } from 'lucide-react';

const panelTypes = [
  {
    icon: LayoutPanelLeft,
    title: 'Wall Panels',
    description: 'Slim, stylish, and built to absorb sound — ideal for offices, bedrooms, and studios.'
  },
  {
    icon: Layers,
    title: 'Ceiling Panels',
    description: 'Discreet overhead panels that drastically reduce echo in large or open spaces.'
  },
  {
    icon: Lightbulb,
    title: 'Acoustic Lighting',
    description: 'Innovative lighting solutions that combine illumination with sound absorption for modern spaces.'
  },
  {
    icon: Split,
    title: 'Partitions',
    description: 'Sound-absorbing room dividers that create privacy while reducing noise between spaces.'
  },
  {
    icon: Sparkles,
    title: 'Custom Designs',
    description: 'You choose the shape, size, color, and material. We deliver a solution that fits — acoustically and visually.'
  }
];

export default function PanelTypesSection() {
  return (
    <section id="panel-types" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Types of Acoustic Panels We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {panelTypes.map((type, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-black rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-4 bg-white/10 rounded-full p-4 flex items-center justify-center">
                <type.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{type.title}</h3>
              <p className="text-gray-300 text-base">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}