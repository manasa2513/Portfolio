import React, { useEffect, useState } from 'react';
import { ArrowDown, Github as GitHub, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-6 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url("https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-purple-600/30 dark:from-blue-900/30 dark:to-purple-900/40 mix-blend-multiply"></div>
      
      <div 
        className={`container mx-auto text-center text-white z-10 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <p className="text-lg md:text-xl mb-4 font-medium">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            John Doe
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-100">
          Full Stack Developer
        </h2>
        <p className="text-md md:text-xl max-w-2xl mx-auto mb-10 text-gray-200">
          I build beautiful, responsive, and user-friendly web applications with modern technologies.
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          <a 
            href="#" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            Contact Me
          </a>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors"
            aria-label="GitHub"
          >
            <GitHub size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="animate-bounce p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown className="text-white" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;