"use client"

import React from 'react';
import Link from 'next/link';
import { useGetFeaturedProjectsQuery } from '@/redux/features/projects/projectApi';
import ProjectCard from './ProjectCard';
import { FiArrowRight } from 'react-icons/fi';

const Projects = () => {
  const { data: projects, isLoading } = useGetFeaturedProjectsQuery();

  if (isLoading) {
    return (
      <div className="py-16 bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      </div>
    );
  }

  // If no projects are available yet
  if (!projects?.data || projects.data.length === 0) {
    return null; // Don't show the section if there are no projects
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore my latest and best web development projects.
            </p>
          </div>
          <Link 
            href="/projects" 
            className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
          >
            View All Projects <FiArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.data?.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
        <div className="mt-10 flex justify-center md:hidden">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            View All Projects <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;