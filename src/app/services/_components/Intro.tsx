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
          <i className="bi bi-person-badge text-5xl text-[#ff6600] mb-10"></i>
          <h3 className="text-orange-500 mt-4 font-semibold mb-4">
            Corporate Branding
          </h3>
          <p>
            We offer holistic brand identity crafting for
            corporate organizations          
          </p>
        </div>

        <div className="border shadow-md rounded-lg p-6 text-center" id='creative-design'>
          <i className="bi bi-palette-fill text-5xl text-[#ff6600] mb-10"></i>
          <h3 className="text-orange-500 mt-4 font-semibold mb-4">
            Creative Design Solutions
          </h3>
          <p>
            Wecreate stunning logos, packaging, and visual assets that
            align with your brands personality.
          </p>
        </div>

        <div className="border shadow-md rounded-lg p-6 text-center" id='creative-design'>
          <i className="bi bi-box-seam text-5xl text-[#ff6600] mb-10"></i>
          <h3 className="text-orange-500 mt-4 font-semibold mb-4">
            Packaging Design
          </h3>
          <p>
            We create custom packaging materials that align
            with brand identities and ensure brands stand out.
          </p>
        </div>

        {/* <div className="border shadow-md rounded-lg p-6 text-center" id='web-development'>
          <i className="bi bi-printer-fill text-5xl text-[#ff6600] mb-10"></i>
          <h3 className="text-orange-500 mt-4 font-semibold mb-4">
            General Printing
          </h3>
          <p>
          We offer high-quality printing services for business cards, brochures, banners, flyers, and more.
          </p>
        </div> */}

        <div className="border shadow-md rounded-lg p-6 text-center">
          <i className="bi bi-pencil-fill text-5xl text-[#ff6600] mb-10"></i>
          <h3 className="text-orange-500 mt-4 font-semibold mb-4">
            Rebranding Services
          </h3>
          <p>Our Rebranding services include signage, logo redesign, souvenir production, and
           visual overhaul</p>
        </div>

        <div className="border shadow-md rounded-lg p-6 text-center" id='event-branding'>
          <i className="bi bi-megaphone-fill text-5xl text-[#ff6600] mb-10"></i>
          <h3 className="text-orange-500 mt-4 font-semibold mb-4">
            Event and Campaign Branding
          </h3>
          <p>We make your events unforgettable with our tailored branding solutions.</p>
        </div>
        
      </div>

      {/* <div className='justify-items-center mt-8'>
          <div className="border shadow-md rounded-lg p-6 text-center ">
            <i className="bi bi-printer-fill text-5xl text-[#ff6600] mb-10"></i>
            <h3 className="text-orange-500 mt-4 font-semibold mb-4">
              General Printing
            </h3>
            <p>We offer high-quality printing services for business cards, brochures, banners, flyers, and more.</p>
          </div>
        </div> */}
    
    </div>
  );
}

export default Intro;
