import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-black relative">
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete AI Infrastructure</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From bare metal to cloud, we provide the full stack required to run advanced AI on minimal hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-gray-600 transition-colors duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                  <Icon className="h-6 w-6 text-white group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
