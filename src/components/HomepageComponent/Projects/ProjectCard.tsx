import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IProject } from '@/redux/features/projects/projectApi';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      <Link href={`/projects/${project._id}`} className="block">
        <div className="relative h-48 sm:h-52 md:h-56 group">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 overflow-hidden" />
        </div>
      </Link>
      <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col">
        <Link href={`/projects/${project._id}`} className="block">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800 hover:text-blue-600 transition-colors duration-200">{project.name}</h3>
        </Link>
        <p className="text-gray-600 mb-4 sm:mb-6 line-clamp-2 text-sm sm:text-base">{project.short_description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {project.technology_used.map((tech) => (
            <span
              key={tech._id}
              className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
            >
              {tech.name}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 mt-auto">
          {project.github_link_client && (
            <div className="group relative">
              <a
                href={project.github_link_client}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-gray-700 hover:text-black transition-colors duration-200 text-sm sm:text-base"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub className="w-5 h-5" />
                {/* <span className="hidden sm:inline">Client</span> */}
              </a>
              <div className="absolute bottom-full left-0 transform -translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                  Client Repository
                </div>
                <div className="w-2 h-2 bg-gray-800 transform rotate-45 absolute left-4 -bottom-1"></div>
              </div>
            </div>
          )}
          {project.github_link_server && (
            <div className="group relative">
              <a
                href={project.github_link_server}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-gray-700 hover:text-black transition-colors duration-200 text-sm sm:text-base"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub className="w-5 h-5" />
                {/* <span className="hidden sm:inline">Server</span> */}
              </a>
              <div className="absolute bottom-full left-0 transform -translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                  Server Repository
                </div>
                <div className="w-2 h-2 bg-gray-800 transform rotate-45 absolute left-4 -bottom-1"></div>
              </div>
            </div>
          )}
          {project.live_link_client && (
            <div className="group relative">
              <a
                href={project.live_link_client}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm sm:text-base"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink className="w-5 h-5" />
                {/* <span className="hidden sm:inline">Live</span> */}
              </a>
              <div className="absolute bottom-full left-0 transform -translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                  View Live Demo
                </div>
                <div className="w-2 h-2 bg-gray-800 transform rotate-45 absolute left-4 -bottom-1"></div>
              </div>
            </div>
          )}
          <div className="group relative ml-auto">
            <Link 
              href={`/projects/${project._id}`}
              className="flex items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm sm:text-base"
            >
              Details <FiExternalLink className="w-4 h-4" />
            </Link>
            <div className="absolute bottom-full right-0 transform -translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                View Project Details
              </div>
              <div className="w-2 h-2 bg-gray-800 transform rotate-45 absolute right-3 -bottom-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;