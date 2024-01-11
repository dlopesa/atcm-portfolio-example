import React from 'react';

const Contact = () => {
  const contactInfo = {
    email: 'example@example.com',
    phoneNumber: '+1234567890',
    cvLink: '/path/to/cv.pdf',
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row items-center justify-center mb-8">
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-4xl font-bold mb-4 underline nderline-offset-1 decoration-4">Contact Me</h2>
          <div className="md:text-left">
            <p className="mb-2">
              Email: <a href={`mailto:${contactInfo.email}`} className="underline">{contactInfo.email}</a>
            </p>
            <p className="mb-2">Phone: {contactInfo.phoneNumber}</p>
            <a href={contactInfo.cvLink} className="bg-black text-white py-2 px-4 rounded-lg inline-block mt-4">
              Download CV
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="https://via.placeholder.com/300" alt="Contact" className="rounded-full w-64 h-64 md:w-auto md:h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
