"use client";

import { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaCode, FaLaptopCode, FaBriefcase, FaUsers } from 'react-icons/fa';
import useCounter from '@/hooks/useCounter';

interface CounterItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  isInView: boolean;
  suffix?: string;
  delay?: number;
}

const CounterItem = ({ icon, value, label, isInView, suffix, delay = 0 }: CounterItemProps) => {
  const count = useCounter({
    end: value,
    start: 0,
    duration: 2000,
    delay: delay,
    isInView,
    reset: true
  });

  return (
    <motion.div
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="text-blue-500 text-4xl mb-4 flex justify-center">
        {icon}
      </div>
      <div className="text-4xl font-bold text-center mb-2 flex items-center justify-center">
        <motion.span
          key={count}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {count}
        </motion.span>
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="text-gray-500 dark:text-gray-400 text-center font-medium">
        {label}
      </div>
    </motion.div>
  );
};

const StatsBanner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3, margin: "-100px" });
  const controls = useAnimation();
  
  if (isInView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    });
  }
  
  const stats = [
    { icon: <FaCode />, value: 50, label: 'Projects Completed' },
    { icon: <FaBriefcase />, value: 4, label: 'Years Experience', suffix: '+' },
    { icon: <FaLaptopCode />, value: 20, label: 'Technologies Used' },
    { icon: <FaUsers />, value: 15, label: 'Happy Clients' }
  ];

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
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
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Achievement Highlights
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Quantifiable metrics that demonstrate my expertise and experience in the tech industry.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <CounterItem 
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              isInView={isInView}
              suffix={stat.suffix}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBanner; 