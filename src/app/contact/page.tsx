import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Me | Portfolio",
  description: "Get in touch with me through this contact form",
};

const ContactPage = () => {
  return (
    <div className="container mx-auto py-12 px-4 mt-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a question or want to work together? Fill out the form below and I@apos;ll get back to you as soon as possible.
        </p>
      </div>
      
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