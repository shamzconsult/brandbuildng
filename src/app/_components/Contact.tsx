import React from 'react'

function Contact() {
  return (
    <section
    className="flex mt-10 mx-auto max-w-screen-xl justify-center items-center gap-8 lg:gap-40  p-4 max-md:flex-col"
    id="reservation"
    >
        {/* Left Image */}
        <div
            className="flex h-[450px] w-[450px] overflow-hidden rounded-md max-md:hidden"
        >
            <img
            src="./assets/images/branded-bag.jpg"
            alt="restaurant"
            className="w-full object-cover"
            />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-8">
            <section id="contact" className="contact-section py-8">
            <div className="">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-[#ff6600] mb-4">Contact & Availability</h2>

                {/* Working Hours */}
                <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                <p className="mb-2">Monday – Friday: 9:00 AM – 6:00 PM</p>
                <p className="mb-2">Saturday: 10:00 AM – 4:00 PM</p>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 gap-4">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <div className="flex gap-2 mb-2 items-center">
                    <i className="bi bi-telephone-fill"></i>
                    <p>Phone: +234 903 894 0088</p>
                    </div>
                    <div className="flex gap-2 mb-2 items-center">
                    <i className="bi bi-envelope-fill"></i>
                    <p>Email: brandbuildng@gmail.com</p>
                    </div>
                    <div className="flex gap-2 mb-2 items-center">
                    <i className="bi bi-geo-alt-fill"></i>
                    <p>Address: 123 Corporate Ave, Business City</p>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    </section>
  )
}

export default Contact