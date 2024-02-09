import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <img
        className="mask mask-heart"
        src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
      />
    </div>
  );
};

export default Home;
