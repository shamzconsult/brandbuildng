import React from 'react';

function About() {
  return (
    <section className="flex w-full flex-col items-center bg-gray-100 p-10 max-md:px-4">
      <h3 className="text-primary md:text-4xl text-2xl text-gray-500 font-semibold mb-8">Our <span className='text-white bg-orange-500 p-2 rounded-full '>ORGANIZATION</span> at a glance</h3>

      <div className="text-lg text-pretty text-center max-w-[900px] mb-5">
        <h2>
          Our approach to business is client-focused and customer-centric. We do this by keeping our clients in the loop in various stages of planning and execution of tasks. From conception, through ideation to execution, we deploy cutting-edge project management technology and human-centered design to bring our clients’ brands to the faces of their audience.
        </h2>
      </div>

        <div className="flex flex-col text-center gap-8 mx-auto max-w-screen-lg md:flex-row">
            {/* Vision */}
          <div className="w-full md:w-1/2 flex-shrink-0 relative p-4 border shadow-lg rounded-2xl">
              <h2 className="text-2xl font-bold text-orange-500 mb-5">OUR VISION</h2>
              <p className="text-base leading-relaxed">
                  To build a world where every business, regardless of size, has a brand that resonates, inspires, and drives success.
              </p>
              {/* <div className="absolute bottom-0 left-0 h-[5px] bg-orange-500 w-2/5"></div> */}
              {/* <div className="absolute top-0 right-0 h-[5px] bg-orange-500 w-2/5"></div> */}
          </div>

          {/* Mission */}
          <div className="w-full md:w-1/2 flex-shrink-0 relative p-4 border shadow-lg rounded-2xl">
              <h2 className="text-2xl font-bold text-orange-500 mb-5">OUR MISSION</h2>
              <p className="text-base leading-relaxed">
                  To deliver innovative, professional, and client-centered branding solutions that empower businesses to stand out and connect meaningfully with their audiences.
              </p>
              {/* <div className="absolute bottom-0 left-0 h-[5px] bg-orange-500 w-2/5"></div>
              <div className="absolute top-0 right-0 h-[5px] bg-orange-500 w-2/5"></div> */}
          </div>
      </div>
    </section>
  );
}

export default About;
