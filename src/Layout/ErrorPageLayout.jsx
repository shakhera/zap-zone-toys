import React from "react";
import { Outlet } from "react-router-dom";

const ErrorPageLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default ErrorPageLayout;
