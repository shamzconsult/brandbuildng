"use client";

export function YTVideo({
  ytVideoId,
  removeRounded,
}: {
  ytVideoId: string;
  removeRounded?: boolean;
}) {
  return (
    <div
      className={`relative border-none bg-white aspect-video overflow-hidden max-w-screen-xl mx-auto mt-10 mb-20 ${
        removeRounded ? "" : ""
      }`}
    >
     <div className="text-center mb-6">
        <h2 className="font-bold text-gray-800 text-3xl md:text-4xl leading-tight">
          Hear from our{" "}
          <span className="text-orange-500 underline">
            Founder
          </span>
        </h2>
        <p className="text-gray-600 mt-2 text-lg md:text-xl">
          Discover insights, vision, and journey directly from our Founder.
        </p>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="loader"></div>
      </div>
      <div className="relative z-[1]">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${ytVideoId}`}
            title="testimonial from our student"
            loading="eager"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
      
    </div>
  );
}
