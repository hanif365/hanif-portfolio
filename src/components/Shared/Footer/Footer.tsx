"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-medium">
              MD. ABU HANIF
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Full Stack Developer
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div>
              <h3 className="font-medium mb-2 text-center md:text-left">Quick Links</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <Link href="/skills" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">
                  Skills
                </Link>
                <Link href="/projects" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">
                  Projects
                </Link>
                <Link href="/blogs" className="text-sm hover:text-blue-600 dark:hover:text-blue-400">
                  Blogs
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2 text-center md:text-left">Connect</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <a 
                  href="https://github.com/hanif365" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/programmerhanif" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaLinkedin size={20} />
                </a>
                
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} MD. ABU HANIF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 