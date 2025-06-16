"use client"

import React from 'react';
import Link from 'next/link';
import { useGetFeaturedProjectsQuery } from '@/redux/features/projects/projectApi';
import ProjectCard from './ProjectCard';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from "framer-motion";

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
    <section className="py-20 relative overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-800 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 bottom-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500 opacity-5"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500 opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest and best web development projects.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects?.data?.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 flex justify-center"
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            View All Projects <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;