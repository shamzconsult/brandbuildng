import React from 'react'

function Contact() {
  return (
    <section
    className="flex w-full justify-center items-center gap-[10%] overflow-hidden bg-[#EFEFEF] p-4 px-[10%] max-md:flex-col"
    id="reservation"
>
    <div
        className="flex h-[350px] w-[350px] overflow-hidden rounded-md max-md:hidden"
    >
        <img
            src="./assets/images/homepage/restaurant.jpg"
            alt="restaurant"
            className="w-full object-cover"
        />
    </div>
    <div className="mt-[5%] flex h-full flex-col gap-[5%]">
        <section id="contact" className="contact-section py-8 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-[#ff6600] mb-4">Contact & Availability</h2>
               
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                    <p className="mb-2">Monday – Friday: 9:00 AM – 6:00 PM</p>
                    <p className="mb-2">Saturday: 10:00 AM – 4:00 PM</p>
                </div>

              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="">
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <div className="flex gap-6 mb-2">
                            <i className="bi bi-telephone-fill"></i>
                            <p>Phone: +234 903 894 0088</p>
                        </div>
                        <div className="flex gap-6 mb-2">
                            <i className="bi bi-envelope-fill"></i>
                            <p>Email: brandbuildng@gmail.com</p>
                        </div>
                        <div className="flex gap-6 mb-2">
                            <i className="bi bi-geo-alt-fill"></i>
                            <p>Address: 123 Corporate Ave, Business City</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="mt-4 flex flex-col gap-2 text-center">
            <h3 className="text-xl">To book a reservation, call us:</h3>
            <div className="text-3xl text-primary">
                +123 232 123
            </div>
        </div>
    </div>
</section>

  )
}

export default Contact