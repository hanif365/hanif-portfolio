"use client";

import { motion } from "framer-motion";

interface PageTitleProps {
  title: string;
  description?: string;
  color?: "blue" | "indigo" | "purple";
  centered?: boolean;
}

const PageTitle = ({
  title,
  description,
  color = "blue",
  centered = true,
}: PageTitleProps) => {
  // Define gradient classes based on color prop
  const gradientClasses = {
    blue: "from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",
    indigo: "from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400",
    purple: "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400",
  };

  // Define accent color classes based on color prop
  const accentColorClasses = {
    blue: "bg-blue-500",
    indigo: "bg-indigo-500",
    purple: "bg-purple-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`my-12 ${centered ? "text-center" : ""}`}
    >
      <h1 
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${gradientClasses[color]}`}
      >
        {title}
      </h1>
      <div className={`w-20 h-1 ${accentColorClasses[color]} ${centered ? "mx-auto" : ""} mb-4`}></div>
      {description && (
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default PageTitle; 