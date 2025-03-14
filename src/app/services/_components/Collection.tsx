"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Collection() {
  const products = [
    { img: "/assets/images/Brandbuildng 1.jpg", title: "10 Capacity Umbrella" },
    { img: "/assets/images/Brandbuildng 4.jpg", title: "Double Padded Steel Jotter" },
    { img: "/assets/images/Brandbuildng 5.jpg", title: "USB and Memory Card" },
    { img: "/assets/images/Brandbuildng 6.jpg", title: "Mini Exclusive Package" },
    { img: "/assets/images/Brandbuildng 7.jpg", title: "Branded Paper Bag" },
    { img: "/assets/images/Brandbuildng 8.jpg", title: "Basic T-Shirt" },
    { img: "/assets/images/branded-box.jpg", title: "Branded Gift Box" },
    { img: "/assets/images/Brandbuild.ng 3.jpg", title: "Branded Umbrella" },
  ];

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-orange-500">
            Product Collection
          </h2>
          <p className="mt-4 max-w-4xl mx-auto text-gray-500 mb-6">
            At brandbuild.ng, we offer a wide range of products and services
            designed to help our clients effectively communicate their brand
            identity. Explore our collection to find high-quality items at
            competitive prices, ensuring value for your investment.
          </p>
        </header>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          navigation
        //   pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="mt-8"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="group block overflow-hidden bg-white shadow-md rounded-lg">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-[400px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg text-gray-700 text-center">
                    {product.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Collection;
