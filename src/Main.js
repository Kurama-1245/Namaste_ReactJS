import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"
import RestaurantBody from "./components/RestaurantBody";
import Header from "./components/Header"
import RestaurantBody from "./components/RestaurantBody"
// import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu.js"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer.js";

// chunking
// Code Splitting
// dynamic bundling
// lazy Loading
// on Demand Loading
// all these are same thing

const Grocery = lazy(()=> import("./components/Grocery"))
const About = lazy(()=>import("./components/About"))
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
        element:<Suspense fallback={<h1>Loading!.....</h1>}><About/></Suspense>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading!.....</h1>}><Grocery/></Suspense>
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
