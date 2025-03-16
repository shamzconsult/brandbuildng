import React from 'react'

function Introduction() {
  return (
    <section
    className="flex min-h-[60vh] w-full place-content-center place-items-center gap-[10%] bg-[#fff] p-4 px-[10%] max-md:flex-col max-md:gap-[4%] max-md:px-[5%]"
    style={{ marginTop: "50px", marginBottom: "50px" }}
    >
        <div
            className="flex h-[450px] w-[450px] overflow-hidden rounded-md max-md:mt-[5%] max-md:h-[300px] max-md:w-[300px]"
        >
            <img
                src="./assets/images/kappframework-eiJZSF(1)(1).png"
                alt="coffee"
                className="w-full object-cover"
            />
        </div>
    <div
        className="flex h-full flex-col gap-[5%] max-md:mt-2 max-md:gap-[3%] max-md:text-center"
    >
        <h2 className="text-orange-500 text-3xl font-medium max-md:text-2xl">
            Brandbuild.ng
        </h2>
        <h3 className="text-5xl max-md:text-3xl">Welcomes you</h3>
        <div className="mt-6 max-w-[550px] text-justify">
            Brandbuild.ng is an emerging corporate branding powerhouse,
            established to create a unique appearance and excellent outlook for our
            clients. We achieve this mandate through holistic branding audits with our
            clients and helping them portray their organizations to the admiration of
            customers, business associates, and clients alike.
            <br />
            We are committed to helping small businesses, corporate organizations,
            and development institutions portray excellent representation to the
            outside world. We collaborate with these institutions to produce
            well-defined and detailed brand assets that resonate with their
            organizational philosophy, communicate their value, generate leads, and
            attract opportunities.
            <br />
            At brandbuild.ng, we are determined to help our clients create a unique
            persona that positions them for greater income generation.
        </div>
        <a
            href="/services"
            className=" mt-5 transition-transform duration-[0.3s] hover:translate-x-2 max-md:mx-auto"
        >
            <div className='bg-orange-500 inline-block p-3 px-6 text-white rounded-full'>
                <span>Learn More</span>
                <i className="bi bi-arrow-right px-2"></i>
            </div>
           
        </a>
    </div>
    </section>

  )
}

export default Introduction