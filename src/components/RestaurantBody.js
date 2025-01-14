import restaurants from "../utils/mockData";
import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { MAIN_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantBody = () => {
  // const [listOfResturants, setListOfResturants] = useState(restaurants);
  // const [filteredList, setFilteredList] = useState(restaurants);
  const [searchText, setSearchText] = useState("");
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFilteredList(restaurants)
      setListOfResturants(restaurants)
    }, 1000);
  }, []);

  const fetchData = async () => {
    const jsonData = await fetch(MAIN_URL);
    const fetchData = await jsonData.json();
    setListOfResturants(
      fetchData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      fetchData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // console.log("Hello");
    // console.log(listOfResturants);
    // console.log(filteredList);
  };

  const onlineStatus = useOnlineStatus()
  if (!onlineStatus) {
    return <h1>Looks Like you are offline!!! please check your Internet Connection</h1>;
  }  

  return filteredList.length === 0 ? (
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
              const filterRestaurants = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filterRestaurants);
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
          <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
            <ResturantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantBody;
