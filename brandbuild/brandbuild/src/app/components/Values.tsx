import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Values() {
  return (
    <section
    className="relative flex w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6 bg-[#f4f7f7]"
    id=""
>
    <div className="mt-8 flex flex-col place-items-center gap-5">
        <div className="mt-5 flex flex-col gap-3 text-center">
            <h2 className="text-4xl font-semibold text-[#ff6600]">Our Core Values</h2>
        </div>
        <div className="mt-6 flex max-w-[60%] flex-wrap place-content-center gap-2 max-lg:flex-col">
            {/* Creativity */}
            <div className="flex h-[250px] w-[350px] flex-col gap-2 p-4 text-center">
                <i className="bi bi-palette-fill text-5xl text-[#ff6600]"></i>
                <h3 className="text-2xl font-semibold text-[#6d6565]">Creativity</h3>
                <div className="text-[#9c9494]">
                    We explore trendy designs and upskill our team members to work in sync with
                    brands to create an appealing outlook.
                </div>
            </div>

            {/* Innovation */}
            <div className="flex h-[250px] w-[350px] flex-col gap-2 p-4 text-center">
                <i className="bi bi-lightbulb-fill text-5xl text-[#ff6600]"></i>
                <h3 className="text-2xl font-semibold text-[#6d6565]">Innovation</h3>
                <div className="text-[#9c9494]">
                    We stay ahead of our competitors in the ever-evolving branding industry through
                    the utilization of cutting-edge technology, a deep understanding of market
                    insight, and creativity.
                </div>
            </div>

            {/* Client Success */}
            <div className="flex h-[250px] w-[350px] flex-col gap-2 p-4 text-center">
                <i className="bi bi-trophy-fill text-5xl text-[#ff6600]"></i>
                <h3 className="text-2xl font-semibold text-[#6d6565]">Client Success</h3>
                <div className="text-[#9c9494]">
                    Our clients are treated as kings and queens, and projects are carried out to
                    deliver values that align with our client’s overall business goals.
                </div>
            </div>

            {/* Excellence */}
            <div className="flex h-[250px] w-[350px] flex-col gap-2 p-4 text-center">
                <i className="bi bi-award-fill text-5xl text-[#ff6600]"></i>
                <h3 className="text-2xl font-semibold text-[#6d6565]">Excellence</h3>
                <div className="text-[#9c9494]">
                    We set high standards for quality, ensuring that each project reflects
                    professionalism, precision, and attention to detail.
                </div>
            </div>

            {/* Collaboration */}
            <div className="flex h-[250px] w-[350px] flex-col gap-2 p-4 text-center">
                <i className="bi bi-people-fill text-5xl text-[#ff6600]"></i>
                <h3 className="text-2xl font-semibold text-[#6d6565]">Collaboration</h3>
                <div className="text-[#9c9494]">
                    To this end, we value collaboration with clients, working closely with them to
                    bring their vision to life and involving them throughout the process.
                </div>
            </div>

            {/* Impact Driven */}
            <div className="flex h-[250px] w-[350px] flex-col gap-2 p-4 text-center">
                <i className="bi bi-bullseye text-5xl text-[#ff6600]"></i>
                <h3 className="text-2xl font-semibold text-[#6d6565]">Impact Driven</h3>
                <div className="text-[#9c9494]">
                    We are committed to creating brands that not only deliver value but will also
                    inspire our audience to make a difference.
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Values