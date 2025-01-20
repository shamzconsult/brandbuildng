import React from 'react';

function Intro() {
  return (
    <div className='max-w-screen-xl mx-auto p-10'>
      <div className='mb-10'>
        <h2 className='text-3xl text-orange-500 text-center font-semibold mb-6'>What we do</h2>
        <p>
          At BrandBuild, we are passionate about delivering innovative solutions that 
          empower your business to thrive in today competitive market. From strategy to 
          execution, we offer comprehensive services tailored to meet your brand’s 
          unique needs and goals.
        </p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='border shadow-md rounded-lg p-6'>
          <h3 className='text-orange-500 font-semibold mb-4 text-center'>Brand Strategy Development</h3>
          <p>We help businesses craft compelling brand strategies that resonate with 
            their target audience. From market analysis to brand positioning, we ensure
            your brand stands out and remains memorable.
          </p>
        </div>
        
        <div className='border shadow-md rounded-lg p-6'>
          <h3 className='text-orange-500 font-semibold mb-4 text-center'>Digital Marketing Solutions</h3>
          <p>Leverage the power of digital with our cutting-edge marketing strategies. 
            Our team specializes in SEO, social media marketing, email campaigns, and more, 
            ensuring your brand reaches and engages the right audience.
          </p>
        </div>

        <div className='border shadow-md rounded-lg p-6'>
          <h3 className='text-orange-500 font-semibold mb-4 text-center'>Creative Design and Visual Identity</h3>
          <p>Your brand deserves to look its best. Our design experts create stunning logos, 
            packaging, and visual assets that align with your brand-s personality and leave a lasting impression.
          </p>
        </div>

        <div className='border shadow-md rounded-lg p-6'>
          <h3 className='text-orange-500 font-semibold mb-4 text-center'>Web Development and E-Commerce Solutions</h3>
          <p>Build a seamless online presence with our customized web development services. 
            Whether it is a corporate website or a full-fledged e-commerce platform, we deliver 
            user-friendly designs optimized for performance.
          </p>
        </div>

        <div className='border shadow-md rounded-lg p-6'>
          <h3 className='text-orange-500 font-semibold mb-4 text-center'>Content Creation and Storytelling</h3>
          <p>Share your brand-s story with compelling content that connects. From blogs and videos 
            to photography and copywriting, we create content that engages and inspires.
          </p>
        </div>
        
        <div className='border shadow-md rounded-lg p-6'>
          <h3 className='text-orange-500 font-semibold mb-4 text-center'>Event Branding and Marketing</h3>
          <p>Make your events unforgettable with our tailored branding solutions. 
            From concept to execution, we ensure your event reflects your brand-s essence and 
            achieves its objectives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
