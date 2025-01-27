import { Carousel } from "@/components/atoms/Carousal";
import { partners } from "@/const/partners";
import React from "react";

const LogoSlider = () => {
  return (
    <section className="bg-gray-100 py-20">
        <div className="">
            <header className="mx-auto max-w-screen-2xl p-4 text-center">
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 flex justify-center items-center">
                Organizations that trust{" "}
                <span className="bg-orange-500 text-white px-4 ml-2 transform rotate-3 inline-block">Our Brand</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-500">
                We have had the privilege of working with esteemed organizations and
                institutions across various sectors, including export, energy,
                corporate businesses, and public health. These collaborations reflect
                our commitment to delivering exceptional services.
                </p>
            </header>

            <div>
            <Carousel
                logos={partners}
            />
            </div>
        </div>
    </section>
  );
};

export default LogoSlider;
