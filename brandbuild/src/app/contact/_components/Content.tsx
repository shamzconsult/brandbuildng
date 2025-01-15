import React from 'react'

function Content() {
  return (
    <div className='max-w-screen-2xl mx-auto md:flex md:gap-10 mt-20'>
        <div className='md:w-1/2'>
            <div>
                <img 
                    src="./assets/images/contact-hero-image.jpg" 
                    alt="" 
                    className=''
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
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6  lg:px-8">
                    <div className="mx-auto max-w-lg">
                        <form action="#" className="mb-0 mt-2 space-y-4 rounded-lg p-4 h-[500px] shadow-lg sm:p-6 lg:p-8 bg-gray-200">

                            <div>
                                <label htmlFor="email" className="mb-6">Your Name <span className='text-red-600'>*</span></label>

                                <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 mt-6 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />
                                
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-6">Your Email <span className='text-red-600'>*</span></label>

                                <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 mt-6 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />
                                </div>
                            </div>
                       
                            <div>
                            <label htmlFor="OrderNotes" className="block text-sm font-medium text-gray-700"> Order notes </label>

                            <textarea
                                id="OrderNotes"
                                className="mt-2 w-full h-[100px] rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                                // rows="4"
                                placeholder="Enter any additional order notes..."
                            ></textarea>
                            </div>


                            <button
                                type="submit"
                                className="block w-full rounded-lg bg-orange-500 px-5 py-3 text-sm font-medium text-white"
                            >
                                Send us a message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content