import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Layout } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
}

const Projects: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [animateCards, setAnimateCards] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with product catalog, shopping cart, and secure checkout using Stripe integration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app to manage tasks, set reminders, and track progress with drag-and-drop functionality.",
      image: "https://images.pexels.com/photos/7376/startup-photos.jpg",
      tags: ["React", "Redux", "Firebase"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "frontend"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "An analytics dashboard that visualizes social media performance metrics with interactive charts.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      tags: ["React", "Chart.js", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "frontend"
    },
    {
      id: 4,
      title: "RESTful API Service",
      description: "A scalable API service for user authentication, data management, and external service integration.",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "backend"
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description: "A messaging platform with real-time communication, file sharing, and user presence indicators.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      tags: ["React", "Socket.io", "Node.js", "Express"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "fullstack"
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description: "A weather application that provides current conditions and forecasts based on geolocation data.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      tags: ["React", "OpenWeather API", "CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "frontend"
    },
  ];

  useEffect(() => {
    setFilteredProjects(
      activeFilter === 'all'
        ? projects
        : projects.filter((project) => project.category === activeFilter)
    );
    
    // Reset and re-trigger animation when filter changes
    setAnimateCards(false);
    setTimeout(() => setAnimateCards(true), 100);
  }, [activeFilter]);

  // Initial animation on component mount
  useEffect(() => {
    if (inView) {
      setTimeout(() => setAnimateCards(true), 300);
    }
  }, [inView]);

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
  ];

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-20 px-4 md:px-6 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.value 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-700 ${
                animateCards 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-300 text-white"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-300 text-white"
                      aria-label="View live site"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Layout size={16} className="text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;