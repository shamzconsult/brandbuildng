import Link from 'next/link'
import React from 'react'

function Intro() {
  return (
    <section className='mt-10'>
        <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                <div className='mb-20 md:mb-4'>
                    <img
                    src="./assets/images/ABK.jpg"
                    className="rounded max-w-lg"
                    alt=""
                    />
                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold mt-2'>Abdulrasaq Kaosarah Adeyi</h1>
                        <p className='font-semibold'>Founder and CEO</p>
                        <div>
                            <Link
                                href="https://www.linkedin.com/compLinkny/brandbuild-ng"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="linkedin"
                                className="transition-colors duration-300 hover:text-orange-500"
                            >
                                <i className="bi bi-linkedin text-xl"></i>
                            </Link>
                        </div>
                    </div>
                </div> 
                
                <div className='mb-20'>
                    <div className="max-w-lg md:max-w-none lg:text-lg">
                        <h2 className="text-2xl p-2 font-semibold text-orange-500 sm:text-3xl">
                            Brief Introduction
                        </h2>

                        <p className="mt-4 text-gray-700 p-2">
                            Brandbuild.ng is an emerging corporate branding powerhouse,
                            established to create a unique appearance and excellent outlook for our
                            clients. We achieve this mandate through holistic branding audits with our
                            clients and helping them portray their organizations to the admiration of
                            customers, business associates, and clients alike.
                        </p>
                        <p className='mt-2 text-gray-700 p-2'>
                            We are committed to helping small businesses, corporate organizations,
                            and development institutions portray excellent representation to the
                            outside world. We collaborate with these institutions to produce
                            well-dened and detailed brand assets that resonate with their
                            organizational philosophy, communicate their value, generate leads, and
                            attract opportunities.
                        </p>
                        <p className='md:hidden lg:block text-gray-700 p-2 mt-2'> We are intentional about providing quality services to budding businesses,
                            established private organizations, corporate enterprise, development
                            organizations, politicians and private individuals who takes branding
                            seriously and are desirous to create a unique persona that will ultimately
                            propel them for greater opportunities.

                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Intro