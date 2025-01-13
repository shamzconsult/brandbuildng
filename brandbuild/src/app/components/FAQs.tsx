import React from 'react'

function FAQs() {
  return (
    <div className="space-y-4 max-w-screen-lg mx-auto p-6">
        <h2 className='text-center text-4xl text-orange-500 font-bold'>Frequently Asked Questions</h2>
        <details
            className="group border-s-4 border-orange-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
        >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
                What is the purpose of this feature, and how does it work?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45 "
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                />
                </svg>
            </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
                This feature is designed to provide an intuitive and user-friendly way to access additional 
                information. By clicking on the expandable section, users can reveal more content without 
                leaving the page, enhancing navigation and keeping the experience seamless.
            </p>
        </details>

        <details
            className="group border-s-4 border-orange-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
                What services does your company provide for brand development?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                />
                </svg>
            </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
                We specialize in building brands from the ground up. Our services include brand strategy, 
                logo and visual identity design, website development, social media branding, 
                and content creation. We also offer consulting for digital marketing and brand positioning to 
                help you make a lasting impact in your industry.
            </p>
        </details>

        <details
            className="group border-s-4 border-orange-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
                 Why should I choose your company over others?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                />
                </svg>
            </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
                Our company stands out due to our personalized approach and commitment to understanding 
                your vision. We combine creative excellence with data-driven strategies to deliver measurable 
                results. With years of experience, a portfolio of successful projects, and a team of passionate 
                experts, we help brands shine in competitive markets.
            </p>
        </details>
    </div>
  )
}

export default FAQs