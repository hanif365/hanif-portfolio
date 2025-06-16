import { IBlog } from '@/redux/features/blogs/blogApi';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiArrowLeft } from 'react-icons/fi';
import { format } from 'date-fns';

// Define params interface exactly matching Next.js expectations
interface BlogParams {
  id: string;
}

// Server component - no useState/useEffect needed
async function getBlogDetails(id: string): Promise<IBlog | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_PORTFOLIO_SERVER_API_URL}/blogs/${id}`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog post');
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Using function declaration syntax instead of arrow function
export default async function BlogPage({ params }: { params: BlogParams }) {
  const blog = await getBlogDetails(params.id);
  
  // If blog not found, show error state
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
          <Link 
            href="/blogs"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <FiArrowLeft /> Back to blogs
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white py-16 mt-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          href="/blogs"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 cursor-pointer"
        >
          <FiArrowLeft /> Back to blogs
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.name}</h1>
        
        <div className="flex items-center text-gray-500 text-sm mb-8">
          <FiCalendar className="mr-2" /> 
          {format(new Date(blog.created_at), 'MMMM dd, yyyy')}
        </div>
        
        <div className="relative w-full h-80 md:h-96 mb-10 rounded-xl overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.name}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {blog.hashtags.map((hashtag) => (
            <span
              key={hashtag._id}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
            >
              #{hashtag.name}
            </span>
          ))}
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: blog.description }} />
        </div>
      </div>
    </div>
  );
}
