import { Phone, Ruler, Hammer } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Sound Consultation',
    description: 'We assess your space (on-site or virtually) and understand your sound problem.'
  },
  {
    icon: Ruler,
    title: 'Custom Panel Design',
    description: 'You select panel style, finish, and size. We craft panels to match your interior.'
  },
  {
    icon: Hammer,
    title: 'Installation Done Right',
    description: 'Our in-house team handles delivery & installation — clean, quick, and guaranteed. You don’t lift a finger. We handle everything.'
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-background scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-black rounded-xl shadow-lg relative border border-gray-800">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold border-4 border-black shadow">
                {idx + 1}
              </div>
              <div className="mb-4 mt-8 bg-white/10 rounded-full p-4 flex items-center justify-center">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-300 text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}