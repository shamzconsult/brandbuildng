import React from 'react';

function Hero() {
  return (
    <section
    className="h-[600px] bg-[url('/assets/images/Offer-image/kappframework-Jsgnic(1)(1).png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="bg-black/50 h-[600px] p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mt-40 sm:text-3xl md:text-5xl">
            Special Products
          </h2>

          <p className="max-w-lg mx-auto text-white/90 mt-4 md:text-lg md:leading-relaxed">
            Do not miss out on our exclusive limited-time offer! Enjoy unbeatable discounts on premium-quality products, designed for comfort and uniqueness. Grab yours today before the deal ends!
          </p>


          <div className="mt-6 sm:mt-8">
            <a
              href="#"
              className="inline-block rounded-full bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
            >
              Get Yours Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
