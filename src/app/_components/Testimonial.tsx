"use client"

import { useState, useEffect } from 'react';

interface Testimonial {
  _id: string;
  quote: string;
  name: string;
  stars: number;
  image: string;
}


const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/testimonial");
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, [])

  // Auto-slide only when testimonials exist
  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials]);

  // navigation dots click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };


  
  return (
    <section className="flex w-full flex-col items-center p-10">
      <h3 className="text-orange-500 text-3xl font-medium max-md:text-2xl">
        Our Clients Review
      </h3>
  
      {testimonials.length > 0 ? (
        <div className="mt-[5%] flex w-full justify-center">
          <div className="review-container flex flex-col items-center">
            <div className="relative flex !h-[350px] w-[600px] max-md:w-[90%]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial._id}
                  className={`slides fade text-justify text-lg max-md:text-base bg-white shadow-md ${
                    index === currentIndex ? "flex" : "hidden"
                  } flex-col items-center w-full px-8 py-6 rounded-lg`}
                >
                  <span className="absolute top-0 left-0 h-6 w-6 border-t-4 border-l-4 border-orange-500 rounded-tl-lg"></span>
                  <span className="absolute bottom-0 right-0 h-6 w-6 border-b-4 border-r-4 border-orange-500 rounded-br-lg"></span>
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s Testimonial`}
                    className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg border border-gray-200"
                  />
                  <q className="italic text-gray-600 block text-center w-full">
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
                    index === currentIndex ? "bg-orange-400" : "bg-gray-300"
                  } inline-block h-3 w-3 rounded-full`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-6">
          <img
            src="/assets/images/no-review.webp"
            alt="No reviews yet"
            className="w-96 h-96 object-contain rounded-full"
          />
          <p className="text-gray-500 mt-4">No testimonials available.</p>
        </div>
      )}
    </section>
  );
  
};
export default TestimonialSection;
