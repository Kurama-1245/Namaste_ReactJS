import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);
    const {resID} = useParams();

//   useEffect(() => {
//     return fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(MENU_URL+resID);
//     const jsonData = await data.json();
//     setResInfo(jsonData);
//   };

//   if (resInfo === null) {
//     return <Shimmer />;
//   }
//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards[3]?.card?.card?.info;

  return (
    <div className="menu">
        <h1>ID is {resID}</h1>
      {/* <h1>{name}</h1>
      <h2>Menu</h2>
      <ul>
        {cuisines.map((cus) => {
          <li>{cus}</li>;
        })}
      </ul>
      <h3>{costForTwoMessage}</h3> */}
    </div>
  );
};
export default RestaurantMenu;
