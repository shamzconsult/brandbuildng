import React from 'react'

function About() {
  return (
    <section className="flex w-full flex-col items-center bg-white p-8 max-md:px-20">
    {/* About Heading */}
    <h3 className="text-primary text-4xl font-semibold mb-8">ABOUT US</h3>

    {/* About Description */}
    <div className="text-lg max-w-[900px] mb-5">
        <h2>
            Our approach to business is client-focused and customer-centric. We do this by keeping our clients in the loop in various stages of planning and execution of tasks. From conception, through ideation to execution, we deploy cutting-edge project management technology and human-centered design to bring our clients’ brands to the faces of their audience.
        </h2>
    </div>

    {/* Vision and Mission Section */}
    <div className="flex gap-8 mx-auto max-lg:flex-col max-w-[70%]">
        {/* Vision */}
        <div className="w-full md:w-1/2 flex-shrink-0 relative p-4">
            <h2 className="text-2xl font-bold mb-5">OUR VISION</h2>
            <p className="text-base leading-relaxed">
                To build a world where every business, regardless of size, has a brand that resonates, inspires, and drives success.
            </p>
            <div className="absolute bottom-0 left-0 h-[3px] bg-orange-500 w-2/5"></div>
            <div className="absolute top-0 right-0 h-[3px] bg-orange-500 w-2/5"></div>
        </div>

        {/* Mission */}
        <div className="w-full md:w-1/2 flex-shrink-0 relative p-4">
            <h2 className="text-2xl font-bold mb-5">OUR MISSION</h2>
            <p className="text-base leading-relaxed">
                To deliver innovative, professional, and client-centered branding solutions that empower businesses to stand out and connect meaningfully with their audiences.
            </p>
            <div className="absolute bottom-0 left-0 h-[3px] bg-orange-500 w-2/5"></div>
            <div className="absolute top-0 right-0 h-[3px] bg-orange-500 w-2/5"></div>
        </div>
    </div>
    </section>

  )
}

export default About