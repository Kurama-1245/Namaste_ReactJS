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
      <div className="div-logo">
        <img
          className="logo"
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="Logo"
        />
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

const ResturantCard = (props) => {
  // const { resData } = props; //destructuring of props
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = props.resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h5>{avgRating + " Star"}</h5>
      <h5>{sla.deliveryTime} Min</h5>
    </div>
  );
};

const RestaurantBody = () => {
  return (
    <div className="res-Body">
      <div className="Search">Search</div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          // not  using keys(not acceptable) <<<< index as keys <<<< Unique Id as keys(best practice)
          <ResturantCard key={restaurant.info.id} resData={restaurant}/>
        ))}
      </div>
    </div>
  );
};

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
