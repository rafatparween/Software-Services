'use client';

const Contact = () => {
    return (
        <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white p-10">
            {/* Popular Questions Section */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 ">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    {[
                        'How can I inquire about your services?',
                        'What is the process for project initiation?',
                        'How can I provide project details?',
                        'What are your payment methods?',
                        'Can I request changes to my project?',
                        'What if I have concerns during the project?',
                        'How do I terminate my service agreement?',
                        'What should I do if I have a complaint?',
                        'How can I update my contact information?',
                        'Do you offer consultations before starting a project?'
                    ].map((question, index) => (
                        <button 
                            key={index} 
                            className="border border-gray-300 rounded-md p-4 flex justify-between items-center text-left hover:bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 "
                        >
                            <span>{question}</span>
                            <span>&gt;</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="flex flex-col lg:flex-row gap-20">
                <div>
                    <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                    <div className="mb-8">
                        <p className="text-lg font-bold">Phone</p>
                        <p>6857290934</p>
                        <p className="text-sm text-gray-500">Mon. – Sat. 9:00 AM – :00 PM</p>
                    </div>
                    <hr className="border-t border-gray-300 mb-8"/>
                    <div>
                        <p className="text-lg font-bold">Email</p>
                        <p className="text-sm text-gray-500 mb-4">Our customer service team is available to assist you from Monday to Saturday.</p>
                        <p className="mb-4">For inquiries, please reach us at <a href="mailto:customerservice@microsonic.in" className="text-blue-600">customerservice@microsonic.in</a>.</p>
                        <button className="bg-black text-white py-2 px-4 rounded-md">Contact Us via Email</button>
                    </div>
                </div>

                {/* Additional Resources Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-lg font-bold mb-4">Project Inquiries</h4>
                        {['Understanding our services', 'How to prepare for your project'].map((item, index) => (
                            <p key={index} className="mb-4 border-b border-gray-300 pb-2">{item}</p>
                        ))}
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Payment and Policies</h4>
                        {['Payment methods we accept', 'Understanding our terms and conditions'].map((item, index) => (
                            <p key={index} className="mb-4 border-b border-gray-300 pb-2">{item}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
