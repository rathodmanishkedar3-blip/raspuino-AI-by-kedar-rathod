import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        
        {/* Simple CTA Section */}
        <section className="py-20 bg-gray-900 relative overflow-hidden" id="contact">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to modernize your hardware stack?</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Join leading tech companies optimizing their edge infrastructure with Raspuino AI.
            </p>
            <a 
              href="https://cal.com/kedar-rathod-71ajkw/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg shadow-white/10"
            >
              Book a Strategy Call
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
