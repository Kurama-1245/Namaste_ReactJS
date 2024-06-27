import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"
import RestaurantBody from "./components/RestaurantBody";
import Header from "./components/Header"
import RestaurantBody from "./components/RestaurantBody"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu.js"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout/>,
    children:[
      {
        path:"/",
        element:<RestaurantBody/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:resID",
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>,
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
