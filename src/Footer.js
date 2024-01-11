import React from 'react';

const Footer = () => {
    const contactInfo = {
        email: 'example@example.com',
        phoneNumber: '+1234567890',
        cvLink: '/path/to/cv.pdf',
    };

    return (
        <footer className="border-t border-gray-300 py-4">
            <div className="container mx-auto py-8">
                <div className="flex flex-col md:flex-row justify-start">
                    <div className="md:w-1/2 md:text-left">
                        <h2 className="text-4xl font-bold mb-4 underline underline-offset-1 decoration-4">Contact Me</h2>
                        <div className="md:text-left">
                            <p className="mb-2">
                                Email: <a href={`mailto:${contactInfo.email}`} className="underline">{contactInfo.email}</a>
                            </p>
                            <p className="mb-2">Phone: {contactInfo.phoneNumber}</p>
                            <a href={contactInfo.cvLink} className="bg-black text-white py-2 px-4 inline-block mt-4">
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
