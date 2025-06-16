'use client';

import PageTitle from "@/components/Shared/PageTitle/PageTitle";
import { FaCode, FaDesktop, FaMobile, FaTools } from "react-icons/fa";

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 dark:bg-gray-800">
      <div className="text-blue-500 text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using modern technologies like React, Next.js, and Tailwind CSS."
    },
    {
      icon: <FaDesktop />,
      title: "Full-Stack Development",
      description: "Building complete web applications from design to deployment with both frontend and backend expertise."
    },
    {
      icon: <FaMobile />,
      title: "Mobile App Development",
      description: "Developing cross-platform mobile applications using React Native that work seamlessly on iOS and Android devices."
    },
    {
      icon: <FaTools />,
      title: "API Development",
      description: "Creating robust and scalable RESTful APIs using Node.js, Express, and MongoDB to power your applications."
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 py-16 mt-10">
      <div className="container mx-auto px-4">
        <PageTitle
          title="My Services"
          description="Professional web development services I offer to help bring your ideas to life."
          color="purple"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
  