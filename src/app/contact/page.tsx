"use client";

import ContactForm from "@/components/ContactForm";
import PageTitle from "@/components/Shared/PageTitle/PageTitle";

const ContactPage = () => {
  return (
    <div className="container mx-auto py-5 px-4">
      <PageTitle 
        title="Contact Me"
        description="Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible."
        color="purple"
      />
      
      <div className="flex flex-col lg:flex-row gap-12 justify-between">
        <div className="lg:w-1/2">
          <ContactForm />
        </div>
        
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Contact Information
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">abuhanif.cse3@gmail.com</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Pabna, Bangladesh</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg">Social Media</h3>
                <div className="flex gap-4 mt-2">
                  <a href="https://www.linkedin.com/in/programmerhanif" target="_blank" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                  <a href="https://github.com/hanif365" target="_blank" className="text-blue-600 hover:text-blue-800">GitHub</a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 