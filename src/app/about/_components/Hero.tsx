import React from 'react'

function Hero() {
  return (
    <section className="relative flex h-[650px] w-full max-w-[100vw] flex-col overflow-hidden mb-56 md:mb-6">
        <div className="flex bg-orange-500">
            <div className="w-1/2 bg-orange-500 h-[650px] animate-slideInLeft"></div>
            <div className="w-1/2 bg-orange-300 h-[650px] rounded-l-full animate-slideInRight"></div>
            <div className="absolute h-full bg-[#0000007d] w-full"></div>
        </div>
    
        <div className="absolute inset-0 flex items-center justify-center p-8 text-white mx-auto max-w-screen-xl">
            <div className="text-left">
                <h1 className="text-7xl font-semibold mb-6 max-md:text-3xl animate-fadeIn">
                    Get to know <span>US</span>
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl mb-6 animate-slideIn">
                    We specialize in crafting unique brand identities, blending creativity
                    with strategic innovation. Our mission is to help brands connect
                    meaningfully with their audience and stand out in a competitive market.
                </p>

                <a
                href="/contact"
                rel="noreferrer"
                className="md:text-lg text-sm font-bold rounded-full bg-white p-4 px-[45px] text-orange-500 transition-colors duration-[0.3s] hover:bg-orange-200 hover:text-white animate-fadeIn"
                >
                    Work with us!
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero