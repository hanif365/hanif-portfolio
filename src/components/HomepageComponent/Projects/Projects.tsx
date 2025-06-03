"use client"

import React from 'react';
import { useGetFeaturedProjectsQuery } from '@/redux/features/projects/projectApi';
import ProjectCard from './ProjectCard';

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

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.data?.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;