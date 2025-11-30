import React from 'react';
import { Button } from './Button';
import { ArrowRight, ChevronRight, Terminal } from 'lucide-react';
import { BOOKING_LINK } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-gray-800 rounded-full px-3 py-1 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs text-gray-400 font-mono">SYSTEMS OPERATIONAL v2.5.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Intelligence at the Edge.
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            We build pre-integrated AI infrastructures for low-power devices. 
            Deploy models to thousands of sensors instantly with enterprise-grade orchestration.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto group">
                Schedule Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button variant="outline" size="lg" className="w-full sm:w-auto font-mono text-sm">
              <Terminal className="mr-2 h-4 w-4" />
              npm install raspuino-cli
            </Button>
          </div>
        </div>

        {/* Code Snippet Visual */}
        <div className="mt-20 mx-auto max-w-3xl glass-panel rounded-xl overflow-hidden shadow-2xl border border-gray-800">
          <div className="bg-gray-900/80 px-4 py-2 flex space-x-2 border-b border-gray-800">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>
          <div className="p-6 font-mono text-sm text-gray-300 overflow-x-auto">
            <div className="text-gray-500 mb-2"># Deploying edge model to fleet</div>
            <div className="flex">
              <span className="text-green-400 mr-2">$</span>
              <span>raspuino deploy --model=obj-detect-v4 --target=group:logistics-sensors</span>
            </div>
            <div className="text-gray-400 mt-2">
              > Optimizing for ARM64... <span className="text-green-500">Done (120ms)</span><br/>
              > Compressing weights... <span className="text-green-500">Done (45ms)</span><br/>
              > Pushing to 1,240 devices... <span className="text-blue-400 animate-pulse">Syncing...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
