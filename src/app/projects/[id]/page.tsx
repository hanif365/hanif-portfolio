'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useGetProjectDetailsQuery } from '@/redux/features/projects/projectApi';
import { FaGithub, FaCalendarAlt } from 'react-icons/fa';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import { format } from 'date-fns';

const ProjectDetailsPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { data, isLoading, isError } = useGetProjectDetailsQuery(params.id);
  const project = data?.data;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (isError || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button 
            onClick={() => router.push('/projects')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <FiArrowLeft /> Back to projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16 mt-10">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back button */}
        <button 
          onClick={() => router.push('/projects')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 cursor-pointer"
        >
          <FiArrowLeft /> Back to projects
        </button>
        
        {/* Project header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.name}</h1>
        
        <div className="flex items-center text-gray-500 text-sm mb-8">
          <FaCalendarAlt className="mr-2" /> 
          {format(new Date(project.created_at), 'MMMM dd, yyyy')}
        </div>
        
        {/* Featured image */}
        <div className="relative w-full h-80 md:h-96 mb-10 rounded-xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Links section */}
        <div className="flex flex-wrap gap-4 mb-10">
          {project.github_link_client && (
            <a
              href={project.github_link_client}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-800 hover:bg-gray-200 transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5" />
              Client Repository
            </a>
          )}
          {project.github_link_server && (
            <a
              href={project.github_link_server}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-800 hover:bg-gray-200 transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5" />
              Server Repository
            </a>
          )}
          {project.live_link_client && (
            <a
              href={project.live_link_client}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors duration-200"
            >
              <FiExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          )}
        </div>
        
        {/* Technologies */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technology_used.map((tech) => (
              <span
                key={tech._id}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
        
        {/* Project content */}
        <div className="prose prose-lg max-w-none">
          <h3 className="text-2xl font-semibold mb-4">Project Description</h3>
          <div dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage; 