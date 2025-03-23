import React from 'react';

function Team() {
  return (
    <div className="mb-20 hidden md:block h-auto max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 relative">
          <img
            alt="Team"
            src="./assets/images/kappframework-elGsve(1)(1).png"
            className="absolute inset-0 h-[400px] md:h-[600px] w-full object-cover transition-opacity group-hover:opacity-50"
          />
        </div>

        <div className="h-[400px] md:h-[600px] md:w-1/2 bg-gray-200 flex items-center">
          <div className="p-6 lg:p-10 w-full ">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl px-6 lg:px-24 mb-6 leading-6">
              Focused team with specialized skills
            </h2>

            <p className="text-gray-500 text-sm lg:text-lg px-6 lg:px-24 mb-10">
              Our team consists of highly energetic, skillful, and committed young
              individuals whose goal is to help our clients position their brand
              effortlessly and to the admiration of their target customers. Contained in
              the team are creative designers, project managers, and brand development
              strategists who work collaboratively with the management to ensure our
              clients needs are met seamlessly.
            </p>

            <h2 className="text-orange-500 text-xl lg:text-3xl px-6 lg:px-24 mb-4">
              Brandbuild.ng Team
            </h2>

            <h2 className="text-gray-500 text-sm md:text-lg px-6 lg:px-24">
              Dedicated to excellence in branding.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
