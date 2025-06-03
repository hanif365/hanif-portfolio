'use client';

import React from 'react';
import { useGetAllProjectsQuery } from '@/redux/features/projects/projectApi';
import ProjectCard from '@/components/HomepageComponent/Projects/ProjectCard';

const ProjectsPage = () => {
  const { data: projects, isLoading } = useGetAllProjectsQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  console.log(projects)

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.data?.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
