import React from 'react'

function Intro() {
  return (
    <section className='-mt-40'>
        <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                <div className='mb-20'>
                    <img
                    src="./assets/images/ABK.jpg"
                    className="rounded"
                    alt=""
                    />
                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold mt-2'>Abdulrasaq Kaosarah Adeyi</h1>
                        <p className='font-semibold'>Founder and CEO</p>
                    </div>
                </div>
                <div className='mb-20'>
                    <div className="max-w-lg md:max-w-none">
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
                        <p className='md:hidden lg:block  mt-2 text-gray-700 p-2'>
                                At brandbuild.ng, we are determined to help our clients create a unique
                                persona that positions them for greater income generation.
                                Our approach to business is client-focused and customer-centric. We do
                                this by keeping our clients in the loop in various stages of planning and
                                execution of tasks. From conception, through ideation to execution, we
                                deploy cutting-edge project management technology and human-centered
                                design to bring our clients brands to the faces of their audience.
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