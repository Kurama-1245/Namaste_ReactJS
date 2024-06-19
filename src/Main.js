import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"
import RestaurantBody from "./components/RestaurantBody";

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <RestaurantBody />
    </div>
  );
};

// DOM Element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
