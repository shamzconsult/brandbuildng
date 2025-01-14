"use client";

import { useEffect } from "react";

const Counters = () => {
  const animateCounter = (element: HTMLElement, target: string | null) => {
    if (!target) return;

    let start = 0;
    const end = parseInt(target);
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      element.innerText = start.toString();
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  const isInViewport = (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    const handleScroll = () => {
      const counters = document.querySelectorAll<HTMLElement>(".counter");
      counters.forEach((counter) => {
        if (isInViewport(counter) && counter.innerText === "0") {
          animateCounter(counter, counter.getAttribute("data-target"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 flex items-center justify-center p-5 mt-6">
      <div className="md:flex gap-32 lg:gap-40 counter-container p-6">
        <div className="counter-item text-center mb-4">
          <h2 className="flex items-center justify-center text-black text-6xl font-bold rounded-full">
            <span className="counter" data-target="7">
              0
            </span>
            +
          </h2>
          <p className="text-black text-lg font-medium mt-4">
            Years of Experience
          </p>
        </div>

        <div className="counter-item text-center mb-4">
          <h2 className="flex items-center justify-center text-black text-6xl font-bold rounded-full">
            <span className="counter" data-target="15">
              0
            </span>
            +
          </h2>
          <p className="text-black text-lg font-medium mt-4">Staff</p>
        </div>

        <div className="counter-item text-center mb-4">
          <h2 className="flex items-center justify-center text-black text-6xl font-bold rounded-full">
            <span className="counter" data-target="4">
              0
            </span>
            +
          </h2>
          <p className="text-black text-lg font-medium mt-4">Customers</p>
        </div>

        <div className="counter-item text-center mb-4">
          <h2 className="flex items-center justify-center text-black text-6xl font-bold rounded-full">
            <span className="counter" data-target="5">
              0
            </span>
            +
          </h2>
          <p className="text-black text-lg font-medium mt-4">Products</p>
        </div>
      </div>
    </div>
  );
};

export default Counters;
