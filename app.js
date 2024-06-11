import React from "react";
import ReactDOM from "react-dom/client";
/*
    header:
        logo
        Nav Items
    body:
        Search
        Restaurant Container:
            Restaurant Card:
                Name of resturant
                Image
                Rating
                Cuisines
                Cost of 2
                Delivery Time
    Footer
        Copyright
        Links
        Address
        Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src="C:\Users\dheeraj.kushwah\Desktop\NamasteReactJS\src\logo192.png" alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = () =>{
    return(
        <div className="res-card">
            <h3>Meghana</h3>

        </div>
    )
}

const RestaurantBody = () =>{
    return(
        <div className="resturantBody">
            <div className="Search">Search</div>
            <div className="res-container">
                <ResturantCard/>
            </div>
        </div>
    )
}

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
      <Footer/>
    </div>
  );
};

// DOM Element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
