"use client"

import React, { useState } from 'react'

function Content() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Email sent successfully");
                setFormData({ 
                    name: "",
                    email: "",
                    message: ""
                });
            } else {
                setStatus("Failed to send email. Please try again");
            }
        } catch (error) {
            console.error(error);
            setStatus("An error occured. Please try again.");
        }

        setLoading(false);
    };

    return (
        <div className='max-w-screen-xl mx-auto md:flex md:gap-10 mt-20'>
            <div className='md:w-1/2'>
                <div>
                    <img 
                        src="./assets/images/contact-hero-image.jpg" 
                        alt="" 
                        className='max-w-2xl'
                    />
                </div>

                <div className="p-10 -mt-16 text-gray-600">
                    <h2 className='text-xl md:text-4xl lg:text-5xl lg:mb-10 text-orange-500'>How can we help <span>?</span></h2>
                    <ol className="list-decimal pl-6 lg:text-xl">
                        <li className='lg:mb-6'>Can you help create a logo that represents my brand?</li>
                        <li className='lg:mb-6'>How long does it take to develop a complete brand identity?</li>
                        <li className='lg:mb-6'>What makes a brand stand out from competitors?</li>
                        <li className='lg:mb-6'>What is the difference between branding and marketing?</li>
                        <li className='lg:mb-6'>How do you ensure consistency across all branding materials?</li>
                        <li className='lg:mb-6'>Can branding help my small business grow?</li>
                        <li className='lg:mb-6'>Do you provide consultation services before starting a project?</li>
                        <li className='lg:mb-6'>Do you offer social media branding services?</li>
                        <li className='lg:mb-6'>How can I improve my online presence with branding?</li>
                    </ol>
                </div>

            </div>

            <div className='md:w-1/2  text-gray-600 p-10'>
                <div className=''>
                    <h2 className='text-3xl md:text-5xl lg:text-7xl text-orange-500'>Have questions?</h2>
                    <h3 className='text-3xl md:text-5xl lg:text-7xl text-orange-500 mb-6'>Shoot us an Email.</h3>
                    <p className='lg:text-xl'>Brandbuild.ng are available on the internet and across all social media platforms.</p>
                </div>


                <div className=''>
                    <div className="mx-auto max-w-screen-xl px-2 py-6 sm:px-2 lg:px-4">
                        {/* Form section */}
                        <div className="mx-auto max-w-lg">
                            <form onSubmit={handleSubmit} className="mb-0 mt-2 space-y-4 rounded-lg p-4 h-[500px] shadow-lg sm:p-6 lg:p-8 bg-gray-200">

                                <div>
                                    <label htmlFor="name" className="mb-6">Your Name <span className='text-red-600'>*</span></label>

                                    <div className="relative">
                                    <input
                                        type="text"
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-lg border-gray-200 mt-6 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Your name"
                                    />
                                    
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="mb-6">Your Email <span className='text-red-600'>*</span></label>

                                    <div className="relative">
                                    <input
                                        type="email"
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-lg border-gray-200 mt-6 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter your email"
                                    />
                                    </div>
                                </div>
                        
                                <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700"> Your Message</label>

                                <textarea
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="mt-2 p-4 w-full h-[100px] rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                                    placeholder="Enter any additional message..."
                                ></textarea>
                                </div>


                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="block w-full rounded-lg bg-orange-500 px-5 py-3 text-sm font-medium text-white"
                                >
                                    {loading ? "Sending..." : "Send us a  message"}
                                </button>
                            </form>
                            {status && <p className='mt-4 text-center text-sm'>{status}</p>}
                        </div>

                        <div className='mt-20 text-center'>
                            <h2 className='mb-10 text-2xl font-bold'>Follow Us</h2>
                            <div className="flex items-center justify-center gap-4">
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="facebook"
                                    className="text-white p-4 rounded-full bg-[#1877F2]" // Facebook Blue
                                    >
                                    <i className="bi bi-facebook text-xl"></i>
                                </a>

                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="instagram"
                                    className="text-white p-4 rounded-full bg-[#E4405F]" // Instagram Pink
                                    >
                                    <i className="bi bi-instagram text-xl"></i>
                                </a>

                                <a
                                    href="https://api.whatsapp.com/send?phone=+2349038940088"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="whatsapp"
                                    className="text-white p-4 rounded-full bg-[#25D366]" // WhatsApp Green
                                    >
                                    <i className="bi bi-whatsapp text-xl"></i>
                                </a>

                                <a
                                    href="https://twitter.com/brandbuildng"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="twitter"
                                    className="text-white p-4 rounded-full bg-black" // Twitter (X) Black
                                    >
                                    <i className="text-xl">
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="w-5 h-6"
                                        >
                                        <path d="M3 0h7l4 8 4-8h7l-9 12 9 12h-7l-4-8-4 8H3l9-12L3 0z" />
                                        </svg>
                                    </i>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content