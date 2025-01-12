"use client"

import { useState, useEffect } from 'react';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat veritatis assumenda dolor delectus laborum odio consequatur accusantium quam? Ad, odit.",
      name: "Trich B",
      stars: 5,
    },
    {
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sint.",
      name: "Bára Müllerová",
      stars: 5,
    },
    {
      quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore sapiente possimus quibusdam nesciunt, architecto distinctio.",
      name: "Matt Freeman",
      stars: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [testimonials.length]);

  return (
    <section className="mt-5 flex w-full flex-col items-center p-[5%]">
      <h3 className="primary-text-color text-3xl font-medium max-md:text-2xl">
        What some of our diners say
      </h3>

      <div className="mt-[5%] flex w-full justify-center gap-[5%]">
        <div className="review-container flex flex-col">
          <div className="flex !h-[150px] max-w-[550px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`slides fade tw-text-justify tw-text-lg max-md:tw-text-base ${
                  index === currentIndex ? 'block' : 'hidden'
                }`}
              >
                <q className="tw-italic tw-text-gray-600">{testimonial.quote}</q>
                <div className="tw-mt-2 tw-text-yellow-400">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p className="tw-mt-3">- {testimonial.name}</p>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="dots-container tw-mt-auto">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <section className="flex justify-center mb-32 " >

        <div className="container max-w-screen-xl mx-auto px-4 ">
            <div className="flex justify-center ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.628886722685!2d7.410345440099051!3d9.097530787948692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e75d053859ca7%3A0xc86b8d69e7f15998!2s2%2032%20Cres%2C%20Gwarinpa%2C%20Abuja%20900108%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1732536761850!5m2!1sen!2sng" 
                width="1000" 
                height="600" 
                className="rounded-md"
                // style="border:0;" 
                allowFullScreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>  
            </div>
                
        </div>

    </section>

    </section>
  );
};

export default TestimonialSection;
