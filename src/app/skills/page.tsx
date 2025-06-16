'use client';

import React, { useState } from 'react';
import { useGetAllSkillsQuery } from '@/redux/features/skills/skillApi';
import type { TSkillCategory } from '@/redux/features/skills/skillApi';
import Image from 'next/image';
import PageTitle from '@/components/Shared/PageTitle/PageTitle';

const SkillsPage = () => {
  const { data: skillsData, isLoading } = useGetAllSkillsQuery();
  const [activeCategory, setActiveCategory] = useState<TSkillCategory | 'all'>('all');
  
  const categories: { id: TSkillCategory | 'all', name: string }[] = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'design', name: 'Design' },
    { id: 'other', name: 'Other' }
  ];

  const getSkillsByCategory = () => {
    if (!skillsData?.data) return [];
    if (activeCategory === 'all') return skillsData.data;
    return skillsData.data.filter(skill => skill.category === activeCategory);
  };

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-blue-100 text-blue-800';
      case 'intermediate': return 'bg-green-100 text-green-800';
      case 'advanced': return 'bg-purple-100 text-purple-800';
      case 'expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredSkills = getSkillsByCategory();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-5 px-4">
      <div className="container mx-auto px-4">
        <PageTitle
          title="My Skills"
          description="A comprehensive overview of my technical expertise and proficiency in various technologies."
          color="purple"
        />
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div 
              key={skill._id} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 p-6"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4 flex-shrink-0">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{skill.name}</h3>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{skill.short_description}</p>
              
              <div className="flex flex-wrap gap-3 items-center mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSkillLevelColor(skill.level)}`}>
                  {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                </span>
                <span className="text-gray-500 text-xs">
                  {skill.experience_years} {skill.experience_years === 1 ? 'year' : 'years'} experience
                </span>
              </div>
              
              {skill.proficiency_percentage && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500">Proficiency</span>
                    <span className="text-xs text-gray-700 font-medium">{skill.proficiency_percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className="bg-blue-600 h-1.5 rounded-full" 
                      style={{ width: `${skill.proficiency_percentage}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* No skills message */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-500">No skills found in this category.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsPage; 