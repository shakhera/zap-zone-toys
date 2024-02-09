import React from "react";
import { useRouteError } from "react-router-dom";
import errorPage from "../../assets/404/404.jpg";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="mt-32 md:mt-0">
      <div id="error-page" className="flex justify-center">
        <img src={errorPage} alt="" className="w-1/2" />
      </div>
    </div>
  );
};

export default ErrorPage;
