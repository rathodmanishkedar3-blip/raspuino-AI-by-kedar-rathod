import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    { num: '01', title: 'Connect', desc: 'Flash our lightweight firmware to your ESP32, Pi, or Jetson devices.' },
    { num: '02', title: 'Orchestrate', desc: 'Group devices in the dashboard and assign specific AI models.' },
    { num: '03', title: 'Monitor', desc: 'Watch real-time inference data stream into your cloud analytics panel.' }
  ];

  return (
    <section id="platform" className="py-24 border-y border-gray-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Deployment Pipeline</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="text-6xl font-bold text-gray-800/50 mb-4">{step.num}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
              
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 text-gray-700">
                  <ArrowRight className="h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
