"use client"

import { useState, useEffect } from 'react';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This service is phenomenal! From start to finish, the team demonstrated outstanding professionalism, creativity, and attention to detail. They transformed my vision into reality far beyond what I imagined. Highly recommend them!",
      name: "Trich B",
      stars: 5,
      image: "./assets/images/avatar1.jpeg"
    },
    {
      quote: "Working with this team has been an absolute game-changer for our brand. Their innovative strategies and meticulous execution helped us stand out in a crowded market. It was one of the best decisions we've ever made!",
      name: "Adebayo Smith",
      stars: 4,
      image: "./assets/images/avatar3.jpeg"
    },
    {
      quote: "I was thoroughly impressed by the dedication and expertise shown by the entire team. They took the time to understand our unique needs and delivered a final product that exceeded all expectations. Worth every penny!",
      name: "Bára Müllerová",
      stars: 3,
      image: "./assets/images/avatar4.avif"
    },
    {
      quote: "Excellent service! Their passion and attention to detail shine through every aspect of their work. We’ve seen a significant increase in customer engagement thanks to their creative solutions.",
      name: "Matt Freeman",
      stars: 5,
      image: "./assets/images/avatar3.jpeg"
    },
    {
      quote: "Absolutely delighted with the outcome! Their team combined innovative ideas with a strong commitment to delivering on time. They kept us involved in every step, ensuring we were satisfied at each stage. Fantastic work!",
      name: "Chen Liu",
      stars: 4,
      image: "./assets/images/avatar1.jpeg"
    },
    {
      quote: "Professional, reliable, and incredibly talented. Their unique approach to brand building has taken our business to the next level. I wouldn’t hesitate to recommend their services to anyone looking to stand out.",
      name: "Sophia Patel",
      stars: 5,
      image: "./assets/images/avatar4.avif"
    },
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [testimonials.length]);

  const handleDotClick = (index: number): void => {
    setCurrentIndex(index);
  };


  
  return (
    <section className="mt-5 flex w-full flex-col items-center p-[5%]">
      <h3 className="text-orange-500 text-3xl font-medium max-md:text-2xl">
        What some of our Customers say
      </h3>

      <div className="mt-[5%] flex w-full justify-center gap-[5%]">
        <div className="review-container flex flex-col items-center">
          <div className="flex !h-[350px] max-w-[550px] mb-6 relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`slides fade text-justify text-lg max-md:text-base bg-white shadow-md ${
                  index === currentIndex ? "block" : "hidden"
                } px-6 py-4 rounded-lg relative`}
              >
                <span className="absolute top-0 left-0 h-6 w-6 border-t-4 border-l-4 border-orange-500 rounded-tl-lg"></span>
                <span className="absolute bottom-0 right-0 h-6 w-6 border-b-4 border-r-4 border-orange-500 rounded-br-lg"></span>
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s Testimonial`}
                  className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg border border-gray-200 mx-auto"
                />
                <q className="italic text-gray-600 block text-center">
                  {testimonial.quote}
                </q>
                <div className="mt-2 text-yellow-400 text-center">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p className="mt-3 text-center text-gray-700 font-medium">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="dots-container flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => handleDotClick(index)}
                className={`cursor-pointer dot ${
                  index === currentIndex
                    ? "bg-orange-400"
                    : "bg-gray-300"
                } inline-block h-3 w-3 rounded-full`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
