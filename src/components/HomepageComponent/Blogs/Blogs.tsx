"use client"

import React from 'react';
import Link from 'next/link';
import { useGetFeaturedBlogsQuery } from '@/redux/features/blogs/blogApi';
import BlogCard from './BlogCard';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from "framer-motion";

const Blogs = () => {
  const { data: blogs, isLoading } = useGetFeaturedBlogsQuery();

  if (isLoading) {
    return (
      <div className="py-16 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      </div>
    );
  }

  // If no blogs are available yet
  if (!blogs?.data || blogs.data.length === 0) {
    return null; // Don't show the section if there are no blogs
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 bottom-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #6366F1 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      
      <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-indigo-500 opacity-5"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-purple-500 opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Latest Blog Posts
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Dive into my latest thoughts, tutorials, and insights about web development and technology.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs?.data?.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard blog={blog} />
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
            href="/blogs" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            View All Posts <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs; 