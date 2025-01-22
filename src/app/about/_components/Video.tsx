import React from "react";

const VideoSection = () => {
  return (
    <section className="video-section flex items-center justify-center p-8 ">
      <div className="max-w-screen-xl w-full">
        <h2 className="text-3xl font-bold text-orange-500 mb-10 text-center">Our Introduction Video</h2>
        <video
          className="w-full rounded-lg h-[500px] shadow-lg"
          controls
          poster="./assets/images/brandbuild-hero-image.webp"
        >
          <source src="./assets/videos/VIDEO-2025-01-21-22-01-43.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
