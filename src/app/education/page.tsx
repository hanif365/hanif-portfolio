'use client';

import React from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import PageTitle from '@/components/Shared/PageTitle/PageTitle';

const EducationPage = () => {

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "Bangladesh Open University",
      location: "Dhaka, Bangladesh",
      start_date: "2016-01-10",
      end_date: "2021-06-20",
      description: "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors.",
      achievements: [
        "Competitive Programming and participated international collegiate programming contest(ICPC)",
        "Web Development",
       
      ],
      courses: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Web Development",
        "Operating Systems"
      ]
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-white py-16 mt-10">
      <div className="container mx-auto px-4">
        <PageTitle
          title="Education"
          description="My academic background and educational qualifications."
          color="blue"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-[calc(25%-1px)] top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {/* Education items */}
            {educationData.map((education, index) => (
              <div key={education.id} className={`mb-12 relative ${index === educationData.length - 1 ? 'pb-0' : ''}`}>
                <div className="flex flex-col md:flex-row">
                  {/* Timeline marker for desktop */}
                  <div className="hidden md:block absolute left-[25%] -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white z-10"></div>
                  
                  {/* Date section */}
                  <div className="md:w-1/4 mb-4 md:mb-0 md:pr-8 md:text-right">
                    <div className="font-medium text-blue-600">
                      <div className="flex items-center md:justify-end">
                        <FiCalendar className="mr-2 md:hidden" />
                        <span>
                          {formatDate(education.start_date)} - {formatDate(education.end_date)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="md:w-3/4 md:pl-12 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{education.degree}</h3>
                      <div className="text-gray-600">{education.institution}</div>
                    </div>
                    
                    <div className="flex items-center my-2 text-sm text-gray-600">
                      <FiMapPin className="mr-1" />
                      <span>{education.location}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{education.description}</p>
                    
                    {education.achievements && education.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-md font-semibold mb-2 text-gray-800">Achievements:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {education.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {education.courses && education.courses.length > 0 && (
                      <div>
                        <h4 className="text-md font-semibold mb-2 text-gray-800">Key Courses:</h4>
                        <div className="flex flex-wrap gap-2">
                          {education.courses.map((course, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                            >
                              {course}
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
        </div>
      </div>
    </div>
  );
};

export default EducationPage; 