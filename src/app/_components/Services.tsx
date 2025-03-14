import React from 'react'

function Services() {
  return (
    <section className="bg-black">
    <div className=" py-5 place-content-center place-items-center">
        <h2 className="text-orange-500 text-center text-4xl font-semibold">OUR SERVICES</h2>
    </div>

    <div className="flex w-full place-content-center gap-5 max-md:flex-wrap p-6 max-md:px-[5%]">
        <div className="flex max-w-[650px] flex-col gap-5 overflow-clip md:max-h-[700px]">
            <div className="flex gap-5 max-md:flex-col">
                <div className="menu-item-container text-center relative h-[450px] w-[80%] overflow-clip rounded-lg max-md:w-full group">
                    <img
                        src="./assets/images/Brand-Strategy2.jpg"
                        alt="authentic wine"
                        className="h-full w-full object-cover transform transition-transform duration-[0.4s] group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex items-center justify-center text-black z-10">
                        <h1 className="bg-white p-2 rounded-xl font-semibold tracking-[0.3rem] max-w-[90%] inline-block">
                        BRAND STRATEGY DEVELOPMENT
                        </h1>
                    </div>
                </div>



                <div className="menu-item-container text-center relative h-[450px] w-[80%] overflow-clip rounded-lg max-md:w-full group">
                    <img 
                        src="./assets/images/corporate-branding.webp" 
                        alt="Lunch" 
                        className="h-full w-full object-cover transform transition-transform duration-[0.4s] group-hover:scale-110" 
                    />

                    <div className="absolute inset-0 flex items-center justify-center text-black z-10">
                        <h1 className='bg-white p-3 rounded-xl font-semibold tracking-[0.5rem] max-w-[90%] inline-block'>
                            CORPORATE BRANDING
                        </h1>
                    </div>
                </div>
            </div>

            <div className="menu-item-container text-center relative h-[240px] w-full overflow-clip rounded-lg max-md:w-full group">
                <img 
                    src="./assets/images/event-branding.jpg" 
                    alt="authentic wine" 
                    className="h-full w-full object-cover transform transition-transform duration-[0.4s] group-hover:scale-110" 
                />
                <div className="absolute inset-0 flex items-center justify-center text-black z-10">
                    <h1 className='bg-white p-3 rounded-xl font-semibold tracking-[0.5rem]'>EVENT BRANDING</h1>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-5 md:h-[700px]">
            <div className="menu-item-container text-center relative h-[33%] w-[350px] overflow-clip rounded-lg max-md:w-full group">
                <img src="./assets/images/branded-box.jpg" alt="authentic wine" className="h-full w-full object-cover transform transition-transform duration-[0.4s] group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center text-black z-10">
                    <h1 className='bg-white p-3 rounded-xl font-semibold tracking-[0.5rem] max-w-[90%] inline-block'>PACKAGING</h1>
                </div>
            </div>
            <div className="menu-item-container text-center relative h-[33%] w-[350px] overflow-clip rounded-lg max-md:w-full group">
                <img src="./assets/images/kappframework-Jsgnic(1)(1).png" alt="authentic wine" className="h-full w-full object-cover transform transition-transform duration-[0.4s] group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center text-black z-10">
                    <h1 className='bg-white p-3 rounded-xl font-semibold tracking-[0.5rem] '>CREATIVE DESIGN</h1>
                </div>
            </div>
            <div className="menu-item-container text-center relative h-[33%] w-[350px] overflow-clip rounded-lg max-md:w-full group">
                <img src="./assets/images/Brandbuildng 8.jpg" alt="Desserts" className="h-full w-full object-cover transform transition-transform duration-[0.4s] group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center text-black z-10">
                    <h1 className='bg-white p-3 rounded-xl font-semibold tracking-[0.5rem]'>REBRANDING</h1>
                </div>
            </div>
        </div>
    </div>
    </section>

  )
}

export default Services