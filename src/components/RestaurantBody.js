import restaurants from "../utils/mockData";
import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantBody = () => {
  const [listOfResturants, setListOfResturants] = useState(restaurants);
  const [filteredList, setFilteredList] = useState(restaurants)
  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");
  useEffect(() => {
    // fetchData();
  }, []);

  const fetchData = async () => {
    const jsonData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await jsonData.json();
    console.log(data);
    setListOfResturants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.resturants
    );
  };

  // setTimeout(() => {
  //   setListOfResturants(restaurants);
  // }, 300);

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-Body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the resturants and Update the UI
              // Search Text
              const filterRestaurants = listOfResturants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filterRestaurants)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestaurants = filteredList.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredList(filterRestaurants);
            console.log(filterRestaurants);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => (
          // not  using keys(not acceptable) <<<< index as keys <<<< Unique Id as keys(best practice)
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantBody;
