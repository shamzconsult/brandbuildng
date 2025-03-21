import React from 'react'

function Hero() {
  return (
    <section
        className="relative flex h-[100vh] w-full max-w-[100vw] flex-col overflow-hidden max-md:h-[100dvh]"
        id="hero-section"
        >
        <img
            src="./assets/images/rebrand.webp"
            alt="Hero"
            className="h-full w-full object-cover"
        />
        <div className="absolute h-full w-full bg-[#0000007d]"></div>

        <div
            className="absolute left-1/2 top-1/2 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col place-content-center gap-4 p-8 text-white max-w-screen-xl"
        >
            <h1
            className="text-7xl mt-14 md:mt-0 font-semibold text-left max-md:text-5xl animate-fadeIn"
            >
            Creating a Unique <span>BRAND</span>
            </h1>

            <div className="mt-3 place-content-start gap-4 max-md:gap-2 text-gray-300">
                <p
                    className="text-left text-sm md:text-xl lg:text-2xl animate-slideIn"
                    style={{
                    marginBottom: "26px",
                    }}
                >
                    We empower brands to craft distinct identities with unparalleled
                    creativity, fostering meaningful connections through innovative
                    strategies. We blend professionalism with originality, ensuring every
                    brand stands out in the competitive market and resonates deeply with
                    its audience.
                </p>

                <div className=""> 
                    <a
                        href="/contact"
                        rel="noreferrer"
                        className="inline-block md:text-lg text-sm font-bold rounded-full bg-orange-500 py-2 px-6 md:py-3 md:px-8 text-white transition-colors duration-300 hover:bg-white hover:text-orange-500 w-full max-w-[300px] text-center"
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