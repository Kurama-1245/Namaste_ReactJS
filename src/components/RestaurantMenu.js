import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID)

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { text } = resInfo?.cards[0]?.card?.card
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name

  return (
    <div className="menu">
      <h1>{text}</h1>
      <h2>Menu</h2>
      <ul>
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map((item) => (
          <b><li key={item?.card?.info?.id}>{item?.card?.info?.name}--------------------{"Rs. " + item?.card?.info?.defaultPrice / 100}</li>
          </b>))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
