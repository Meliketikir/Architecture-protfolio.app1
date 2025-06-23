import React from 'react';
import type { ProjectCardProps } from '../../types/project';

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded text-sm">
          {project.status === 'completed' ? 'Tamamlandı' : 
           project.status === 'in-progress' ? 'Devam Ediyor' : 'Planlandı'}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-2">{project.location}</p>
        <p className="text-gray-500 text-sm mb-4">{project.year}</p>
        <div className="flex flex-wrap gap-2">
          {project.services.slice(0, 3).map((service: string, index: number) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 