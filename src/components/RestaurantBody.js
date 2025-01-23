import restaurants from "../utils/mockData";
import ResturantCard, { withPromotedlabel } from "./ResturantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { MAIN_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";

const RestaurantBody = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const onlineStatus = useOnlineStatus();
  
  const ResturantCardPromoted = withPromotedlabel(ResturantCard);
  
  const { setUserName, loggedInUser } = useContext(UserContext);

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
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!onlineStatus) {
    return (
      <h1>
        Looks Like you are offline!!! please check your Internet Connection
      </h1>
    );
  }

  // console.log("List of Resturant: ", listOfResturants);

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex">
        <div className="search">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-black mx-4"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
          data-testid="resSearchButton"
            className="mt-4 ml-4 px-4 bg-green-100 rounded-lg"
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
        data-testid="resSortButton"
          className="mt-4 ml-4 px-4 bg-purple-200 rounded-lg"
          onClick={() => {
            const filterRestaurants = filteredList.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredList(filterRestaurants);
          }}
        >
          Top Rated
        </button>
        <div className="mt-4 ml-4 px-4">
          <label>UserName: </label>
          <input
            className="border border-black rounded"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="m-4 flex flex-wrap justify-evenly">
        {filteredList.map((restaurant) => (
          // not  using keys(not acceptable) <<<< index as keys <<<< Unique Id as keys(best practice)
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
          >
            {restaurant.info.isOpen ? (
              <ResturantCardPromoted
                key={restaurant.info.id}
                resData={restaurant}
              />
            ) : (
              <ResturantCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default RestaurantBody;
