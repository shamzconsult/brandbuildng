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
      <h2 className="text-center mb-6 text-gray-500 text-3xl md:text-4xl">
        From the desk of the{" "}
        {/* <span className="rotating-text">CEO</span> and{" "} */}
        <span className="rotating-text">Founder</span>
      </h2>
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
