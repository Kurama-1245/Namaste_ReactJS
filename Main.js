import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import RestaurantBody from "./components/RestaurantBody"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


// const Applayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Outlet />
//     </div>
//   );
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>hello</h1>
  }
])

// DOM Element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

