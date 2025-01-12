import React from 'react'

function Statistics() {
  return (
    <section
    className="relative flex w-full max-w-[100vw] flex-col items-center justify-center overflow-hidden p-6"
    style={{ marginTop: '50px', backgroundColor: 'rgb(244, 247, 247)' }}
    id="numbers"
>
    {/* Heading */}
    <div className="flex flex-col items-center gap-8 mb-12">
        <h3 className="text-3xl">In numbers</h3>

        {/* Statistics Container */}
        <div className="flex w-full justify-center gap-10 max-md:flex-col" id="numbers-container">
            {/* Products */}
            <div className="text-center">
                <span className="text-6xl max-lg:text-4xl block">
                    <span id="products">10</span>
                    <span>k +</span>
                </span>
                <span className="text-xl font-medium text-gray-800">/Products</span>
            </div>

            {/* Customers */}
            <div className="text-center">
                <span className="text-6xl max-lg:text-4xl block">
                    <span id="customers">10</span>
                    <span>+</span>
                </span>
                <span className="text-xl font-medium text-gray-800">/Customers</span>
            </div>

            {/* Followers */}
            <div className="text-center">
                <span className="text-6xl max-lg:text-4xl block">
                    <span id="followers">15</span>
                    <span>k +</span>
                </span>
                <span className="text-xl font-medium text-gray-800">/Followers</span>
            </div>

            {/* Hours Saved */}
            <div className="text-center">
                <span className="text-6xl max-lg:text-4xl block">
                    <span id="hours">10</span>
                    <span>+</span>
                </span>
                <span className="text-xl font-medium text-gray-800">/hrs saved</span>
            </div>
        </div>
    </div>
    </section>

  )
}

export default Statistics