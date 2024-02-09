import React from "react";
import banner1 from "../../../assets/banner/1.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner1})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-extrabold">
              Sparking <br />
              Joyful <span className="text-red-700">Playtime</span> Wonders!
            </h1>
            <p className="mb-5 space-y-1">
              Welcome to ZapZoneToys - your haven for collecting and displaying
              captivating cards! Immerse yourself in a world where each card
              tells a story, and your collection becomes a masterpiece. At
              ZapZoneToys Collections, we celebrate the art of cardistry, the
              thrill of discovery, and the joy of showcasing your treasures.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
