import React from 'react';
import { useInView } from '../hooks/useInView';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'other';
}

const Skills: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const skills: Skill[] = [
    // Frontend
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'React', level: 85, category: 'frontend' },
    { name: 'TypeScript', level: 80, category: 'frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'frontend' },
    { name: 'Next.js', level: 75, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Express', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 75, category: 'backend' },
    { name: 'SQL', level: 70, category: 'backend' },
    { name: 'GraphQL', level: 65, category: 'backend' },
    { name: 'RESTful APIs', level: 85, category: 'backend' },
    
    // Other
    { name: 'Git', level: 85, category: 'other' },
    { name: 'AWS', level: 65, category: 'other' },
    { name: 'Docker', level: 60, category: 'other' },
    { name: 'Testing', level: 70, category: 'other' },
    { name: 'Agile', level: 75, category: 'other' },
    { name: 'UI/UX Design', level: 70, category: 'other' },
  ];

  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  return (
    <section 
      id="skills" 
      ref={ref}
      className="py-20 px-4 md:px-6 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here's an overview of my technical skills and competencies across different areas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0ms' }}>
            <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: inView ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-bold mb-6 text-purple-600 dark:text-purple-400">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: inView ? `${skill.level}%` : '0%',
                        transitionDelay: `${(index + frontendSkills.length) * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '400ms' }}>
            <h3 className="text-xl font-bold mb-6 text-teal-600 dark:text-teal-400">Tools & Other Skills</h3>
            <div className="space-y-6">
              {otherSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-teal-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: inView ? `${skill.level}%` : '0%',
                        transitionDelay: `${(index + frontendSkills.length + backendSkills.length) * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;