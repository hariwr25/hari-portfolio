import React, { useState } from 'react';
import { FiExternalLink, FiStar } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-56">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full gradient-bg text-xs font-semibold flex items-center gap-1 shadow-lg">
            <FiStar size={12} /> Featured
          </div>
        )}
        
        <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href={project.demoLink}
            className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-lg text-white hover:bg-white/30 transition-all transform hover:scale-110 flex items-center gap-2"
          >
            <FiExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-white/10 group-hover:scale-110 transition-transform">
            {project.icon}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
        </div>
        
        <p className="text-gray-400 mb-5 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs hover:border-cyan-500 hover:text-cyan-400 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <a 
          href={project.demoLink}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 gradient-bg text-white rounded-xl hover:shadow-lg transition-all duration-300 text-sm font-medium"
        >
          <FiExternalLink size={16} /> Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;