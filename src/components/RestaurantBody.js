import restaurants from "../utils/mockData";
import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";

const RestaurantBody = () => {
  // Local State variable - Super powerful State
  const [listOfResturants, setListOfResturants] = useState(restaurants);
  // // Normal JS Variable
  // let listOfResturant = [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const jsonData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await jsonData.json();
    console.log(data);
  };

  return (
    <div className="res-Body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestaurants = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfResturants(filterRestaurants);
            console.log(filterRestaurants);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((restaurant) => (
          // not  using keys(not acceptable) <<<< index as keys <<<< Unique Id as keys(best practice)
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantBody;
