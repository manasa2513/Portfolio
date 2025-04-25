import React, { useEffect } from 'react';
import { User, Briefcase, GraduationCap, Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 px-4 md:px-6 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know me better. Here's a brief overview of my background, experience and interests.
          </p>
        </div>
        
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg" 
              alt="Professional portrait" 
              className="w-full h-auto transform transition-transform duration-700 hover:scale-105"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Full Stack Developer based in New York
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a passionate web developer with 5 years of experience building modern web applications.
              I specialize in JavaScript, TypeScript, React, Node.js, and other modern web technologies.
              I love creating elegant solutions that combine beautiful design with clean, efficient code.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <div className="mr-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 p-2 rounded-full">
                  <User size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</h4>
                  <p className="font-medium">John Doe</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 p-2 rounded-full">
                  <Briefcase size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Experience</h4>
                  <p className="font-medium">5+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 p-2 rounded-full">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Degree</h4>
                  <p className="font-medium">B.S. Computer Science</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 dark:text-yellow-400 p-2 rounded-full">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Certification</h4>
                  <p className="font-medium">AWS Certified</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;