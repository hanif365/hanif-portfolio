import React from 'react';
import Image from 'next/image';
import { IProject } from '@/redux/features/projects/projectApi';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-56 group">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 overflow-hidden" />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.name}</h3>
        <p className="text-gray-600 mb-6 line-clamp-2 text-base">{project.short_description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technology_used.map((tech) => (
            <span
              key={tech._id}
              className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
            >
              {tech.name}
            </span>
          ))}
        </div>
        <div className="flex gap-6">
          {project.github_link_client && (
            <a
              href={project.github_link_client}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5" />
              Client
            </a>
          )}
          {project.github_link_server && (
            <a
              href={project.github_link_server}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5" />
              Server
            </a>
          )}
          {project.live_link_client && (
            <a
              href={project.live_link_client}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <FiExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;