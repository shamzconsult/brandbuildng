import React from 'react';

function Intro() {
  return (
    <div className="max-w-screen-xl mx-auto p-10">
      <div className="mb-10 text-center">
        <h2 className="text-3xl text-orange-500 font-semibold mb-6">
          What we do
        </h2>
        <p>
          At BrandBuild, we are passionate about delivering innovative solutions that
          empower your business to thrive in today competitive market. From strategy to
          execution, we offer comprehensive services tailored to meet your brand’s
          unique needs and goals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="border shadow-md rounded-lg p-6 text-center" id='strategy-development'>
          <i className="bi bi-lightbulb-fill text-5xl text-[#ff6600] mb-10"></i>
          <h3 className="text-orange-500 mt-4 font-semibold mb-4">
            Brand Strategy Development
          </h3>
          <p>
            From market analysis to brand positioning, we ensure your brand stands out.
          </p>
        </div>

        <div className="border shadow-md rounded-lg p-6 text-center">
          <i className="bi bi-bar-chart-fill text-5xl text-[#ff6600] mb-10"></i>
          <h3 className="text-orange-500 mt-4 font-semibold mb-4">
            Digital Marketing Solutions
          </h3>
          <p>
            Leverage the power of digital with our cutting-edge marketing strategies.
          </p>
        </div>

        <div className="border shadow-md rounded-lg p-6 text-center" id='creative-design'>
          <i className="bi bi-palette-fill text-5xl text-[#ff6600] mb-10"></i>
          <h3 className="text-orange-500 mt-4 font-semibold mb-4">
            Creative Design and Visual Identity
          </h3>
          <p>
            Wecreate stunning logos, packaging, and visual assets that
            align with your brands personality.
          </p>
        </div>

        <div className="border shadow-md rounded-lg p-6 text-center" id='web-development'>
          <i className="bi bi-globe text-5xl text-[#ff6600] mb-10"></i>
          <h3 className="text-orange-500 mt-4 font-semibold mb-4">
            Web Development and E-Commerce Solutions
          </h3>
          <p>
            Build a seamless online presence with our customized web development
            services.
          </p>
        </div>

        <div className="border shadow-md rounded-lg p-6 text-center">
          <i className="bi bi-pencil-fill text-5xl text-[#ff6600] mb-10"></i>
          <h3 className="text-orange-500 mt-4 font-semibold mb-4">
            Content Creation and Storytelling
          </h3>
          <p>We create content that engages and inspires.</p>
        </div>

        <div className="border shadow-md rounded-lg p-6 text-center" id='event-branding'>
          <i className="bi bi-megaphone-fill text-5xl text-[#ff6600] mb-10"></i>
          <h3 className="text-orange-500 mt-4 font-semibold mb-4">
            Event Branding and Marketing
          </h3>
          <p>We make your events unforgettable with our tailored branding solutions.</p>
        </div>
        
      </div>

      <div className='justify-items-center mt-8'>
          <div className="border shadow-md rounded-lg p-6 text-center ">
            <i className="bi bi-printer-fill text-5xl text-[#ff6600] mb-10"></i>
            <h3 className="text-orange-500 mt-4 font-semibold mb-4">
              General Printing
            </h3>
            <p>We offer high-quality printing services for business cards, brochures, banners, flyers, and more.</p>
          </div>
        </div>
    
    </div>
  );
}

export default Intro;
