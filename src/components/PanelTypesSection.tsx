const panelTypes = [
  {
    icon: '🏢',
    title: 'Wall Panels',
    description: 'Slim, stylish, and built to absorb sound — ideal for offices, bedrooms, and studios.'
  },
  {
    icon: '🏗️',
    title: 'Ceiling Panels',
    description: 'Discreet overhead panels that drastically reduce echo in large or open spaces.',
    variants: ['Ceiling Baffles', 'Ceiling Clouds']
  },
  {
    icon: '💡',
    title: 'Acoustic Lighting',
    description: 'Innovative lighting solutions that combine illumination with sound absorption for modern spaces.'
  },
  {
    icon: '🔲',
    title: 'Partitions',
    description: 'Sound-absorbing room dividers that create privacy while reducing noise between spaces.'
  },
  {
    icon: '✨',
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
                <span className="text-2xl">{type.icon}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{type.title}</h3>
              <p className="text-gray-300 text-base mb-3">{type.description}</p>
              {type.variants && (
                <div className="mt-4">
                  <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-3"></div>
                  <div className="space-y-2">
                    {type.variants.map((variant, variantIdx) => (
                      <div key={variantIdx} className="text-sm text-blue-300 bg-blue-500/20 px-3 py-2 rounded-lg border border-blue-400/30 hover:bg-blue-500/30 transition-colors duration-200">
                        {variant}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}