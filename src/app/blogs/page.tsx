'use client';

import React, { useState } from 'react';
import { useGetAllBlogsQuery } from '@/redux/features/blogs/blogApi';
import BlogCard from '@/components/HomepageComponent/Blogs/BlogCard';
import PageTitle from '@/components/Shared/PageTitle/PageTitle';

const BLOGS_PER_PAGE = 6;

const BlogsPage = () => {
  const { data: blogs, isLoading } = useGetAllBlogsQuery();
  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  // Calculate pagination
  const totalBlogs = blogs?.data?.length || 0;
  const totalPages = Math.ceil(totalBlogs / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const endIndex = startIndex + BLOGS_PER_PAGE;
  const currentBlogs = blogs?.data?.slice(startIndex, endIndex) || [];

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen bg-white py-5 px-4">
      <div className="container mx-auto px-4">
        <PageTitle
          title="My Blog"
          description="Thoughts, tutorials, and insights about web development and technology."
          color="indigo"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <button
                className={`px-3 py-1 rounded-md ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === number
                      ? 'bg-blue-100 text-blue-600 font-medium'
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setCurrentPage(number)}
                >
                  {number}
                </button>
              ))}
              
              <button
                className={`px-3 py-1 rounded-md ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        )}
        
        {/* No blogs message */}
        {totalBlogs === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-500">No blog posts available yet.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage; 