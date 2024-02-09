import React from "react";
import Header from "../pages/shared/Navbar/Header";
import Footer from "../pages/shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const AllToysLayOut = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-5 gap-4">
        <div className=""></div>
        <div className="col-span-5 md:col-span-4 bg-slate-100">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllToysLayOut;
