import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IBlog } from '@/redux/features/blogs/blogApi';
import { FiCalendar, FiExternalLink } from 'react-icons/fi';
import { formatDistanceToNow } from 'date-fns';

interface BlogCardProps {
  blog: IBlog;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  const publishedDate = new Date(blog.created_at);
  const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true });
  
  return (
    <Link href={`/blogs/${blog._id}`} className="block">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 h-full">
        <div className="relative h-48 group">
          <Image
            src={blog.image}
            alt={blog.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 overflow-hidden" />
        </div>
        <div className="p-6">
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <FiCalendar className="mr-2" /> {timeAgo}
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2">{blog.name}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3 text-base">{blog.short_description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.hashtags.map((hashtag) => (
              <span
                key={hashtag._id}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors duration-200"
              >
                #{hashtag.name}
              </span>
            ))}
          </div>
          <div className="mt-auto">
            <span className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium">
              Read More <FiExternalLink className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard; 