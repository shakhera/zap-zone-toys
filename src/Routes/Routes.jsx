import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import ErrorPageLayout from "../Layout/ErrorPageLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToys from "../pages/Toys/AllToys/AllToys";
import MyToys from "../pages/Toys/MyToys/MyToys";
import AddAToys from "../pages/Toys/AddAToys/AddAToys";
import PrivateRoutes from "./PrivateRoutes";
import AllToysLayOut from "../Layout/AllToysLayOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },

      {
        path: "/mytoys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addatoys",
        element: (
          <PrivateRoutes>
            <AddAToys></AddAToys>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <AllToysLayOut></AllToysLayOut>,
    children: [
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("toys.json"),
      },
    ],
  },
  {
    path: "/",
    element: <ErrorPageLayout></ErrorPageLayout>,
    children: [
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
        errorElement: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
