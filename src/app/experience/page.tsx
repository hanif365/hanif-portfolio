'use client';

import React from 'react';
import Image from 'next/image';
import { useGetAllExperiencesQuery } from '@/redux/features/experiences/experienceApi';
import { format } from 'date-fns';
import { FiMapPin, FiCalendar, FiExternalLink } from 'react-icons/fi';

const ExperiencePage = () => {
  const { data: experienceData, isLoading } = useGetAllExperiencesQuery();

  const getEmploymentTypeLabel = (type: string) => {
    switch (type) {
      case 'full-time': return 'Full-time';
      case 'part-time': return 'Part-time';
      case 'contract': return 'Contract';
      case 'internship': return 'Internship';
      case 'freelance': return 'Freelance';
      default: return type;
    }
  };

  const getLocationTypeLabel = (type: string) => {
    switch (type) {
      case 'on-site': return 'On-site';
      case 'remote': return 'Remote';
      case 'hybrid': return 'Hybrid';
      default: return type;
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM yyyy');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16 mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Work Experience</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and career highlights in the technology industry.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experienceData?.data?.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-500">No experience entries available.</h3>
            </div>
          ) : (
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-[calc(25%-1px)] top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              {/* Experience items */}
              {experienceData?.data?.map((experience, index) => (
                <div key={experience._id} className={`mb-12 relative ${index === experienceData.data.length - 1 ? 'pb-0' : ''}`}>
                  <div className="flex flex-col md:flex-row">
                    {/* Timeline marker for desktop */}
                    <div className="hidden md:block absolute left-[25%] -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white z-10"></div>
                    
                    {/* Date section */}
                    <div className="md:w-1/4 mb-4 md:mb-0 md:pr-8 md:text-right">
                      <div className="font-medium text-blue-600">
                        <div className="flex items-center md:justify-end">
                          <FiCalendar className="mr-2 md:hidden" />
                          <span>
                            {formatDate(experience.start_date)} - {experience.is_current ? 'Present' : formatDate(experience.end_date || '')}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">{experience.duration}</div>
                      </div>
                    </div>
                    
                    {/* Content section */}
                    <div className="md:w-3/4 md:pl-12 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                      <div className="flex items-center mb-4">
                        {experience.company_logo && (
                          <div className="mr-4 rounded-md overflow-hidden flex-shrink-0 w-12 h-12 relative">
                            <Image
                              src={experience.company_logo}
                              alt={`${experience.company} logo`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{experience.position}</h3>
                          <div className="flex flex-wrap items-center text-gray-600">
                            <span>{experience.company}</span>
                            {experience.company_website && (
                              <a 
                                href={experience.company_website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-blue-500 hover:text-blue-700"
                              >
                                <FiExternalLink size={14} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <FiMapPin className="mr-1" />
                          <span>{experience.location} ({getLocationTypeLabel(experience.location_type)})</span>
                        </div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                          {getEmploymentTypeLabel(experience.employment_type)}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6">{experience.description}</p>
                      
                      {experience.responsibilities.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-md font-semibold mb-2 text-gray-800">Key Responsibilities:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            {experience.responsibilities.map((responsibility, idx) => (
                              <li key={idx}>{responsibility}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {experience.achievements && experience.achievements.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-md font-semibold mb-2 text-gray-800">Key Achievements:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {experience.technologies_used.length > 0 && (
                        <div>
                          <h4 className="text-md font-semibold mb-2 text-gray-800">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies_used.map((tech, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage; 