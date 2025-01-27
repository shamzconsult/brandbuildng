"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

type Logo = {
  src: string;
  alt: string;
};

export const Carousel = ({
  logos,
}: {
  title?: string;
  logos: Logo[];
  header?: string;
  subheader?: string;
}) => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-2">
      
      <section className="flex flex-col md:flex-row justify-center items-center">
        <Marquee speed={50} pauseOnHover={true}>
          {logos?.map((logo) => (
            <div
              key={logo.src}
              className="w-fit h-60 flex justify-center items-center mx-6"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className="object-contain rounded-full"
              />
            </div>
          ))}
        </Marquee>
      </section>
    </div>
  );
};
