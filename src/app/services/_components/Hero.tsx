import React from 'react'

function Hero() {
  return (
    <section
    className="relative flex h-[60vh] w-full max-w-[100vw] flex-col overflow-hidden max-md:h-[100dvh]"
    id="hero-section"
    >
        <img
            src="./assets/images/corporate-branding.webp"
            alt="Hero"
            className="h-full w-full object-cover"
        />
        <div className="absolute h-full w-full bg-[#0000007d]"></div>

        <div
            className="absolute left-1/2 top-1/2 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col place-content-center gap-4 p-8 text-white max-w-screen-xl"
        >
            <h1 className="text-7xl font-semibold text-left max-md:text-5xl animate-fadeIn">
            Creating a Unique <span>PERSONA</span>
            </h1>

            <div className="mt-3 place-content-start gap-4 max-md:gap-2 animate-slideIn">
            <div>
                <a
                href="/contact"
                rel="noreferrer"
                className="text-lg font-bold rounded-full bg-orange-500 p-4 px-[45px] text-white transition-colors duration-[0.3s] hover:bg-white hover:text-orange-500"
                >
                Work with us!
                </a>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero