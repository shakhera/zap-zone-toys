import React from "react";
import Navbar from "../pages/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Header from "../pages/shared/Navbar/Header";
import TopNavbar from "../pages/shared/Navbar/TopNavbar";

const Root = () => {
  return (
    <div>
      <TopNavbar></TopNavbar>
      {/* <Navbar></Navbar> */}
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
