
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background with enhanced overlay for better visibility */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-steel-dark/70 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1531164180075-0a00e8ff930e?q=80&w=2070" 
          alt="Metal Welding" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 border-2 border-primary rounded-full bg-white/15 backdrop-blur-sm">
            <span className="text-white font-medium text-sm md:text-base">Metallbaumeister seit 1998</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-8 leading-tight drop-shadow-lg">
            Präzision und Qualität <br className="hidden md:block" />
            in der <span className="text-primary">Metallverarbeitung</span>
          </h1>
          
          <p className="text-white/95 text-lg md:text-xl mb-10 max-w-2xl font-medium drop-shadow">
            Individuelle Lösungen in Metall für Privatkunden und Unternehmen. 
            Vom Entwurf bis zur Montage – alles aus einer Hand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
            <Button 
              className="bg-steel-DEFAULT hover:bg-steel-light text-white px-8 py-7 rounded-lg font-medium text-base transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              asChild
            >
              <a href="#contact">
                Kontakt aufnehmen
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              variant="outline"
              className="bg-steel-DEFAULT/80 backdrop-blur-sm hover:bg-steel-DEFAULT text-white border-2 border-white/40 px-8 py-7 rounded-lg font-medium text-base transition-all duration-300"
              asChild
            >
              <a href="#projects">
                Projekte ansehen
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm font-medium mb-2 drop-shadow">Mehr entdecken</span>
        <div className="w-10 h-10 rounded-full bg-steel-DEFAULT/40 backdrop-blur-sm flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
