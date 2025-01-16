import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card.info;
  // console.log(resInfo);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log("categories",categories);

  return (
    <>
      <div className="text-center font-serif font-bold m-4 p-4">
        <h1 className="text-4xl">{name}</h1>
        <p className="text-xl">
          {cuisines.join(", ")}&nbsp;&nbsp;&nbsp;{costForTwoMessage}
        </p>
      </div>
      <div className="text-center font-serif font-bold m-2 p-2">
        <h1 className="text-3xl font-serif mx-3 px-3">Menu</h1>
        {/* Accordian Category */}
        {categories.map((category,index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showIndex={showIndex}
            setShowIndex={()=>{
              setShowIndex(index)
            }}
            showItems={index==showIndex?true:false}
          />
        ))}
      </div>
      {/* <ul>
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}-------------------- Rs. {(item?.card?.info?.defaultPrice) ? (item?.card?.info?.defaultPrice / 100) : (item?.card?.info?.finalPrice/100)}</li>
          ))}
      </ul> */}
    </>
  );
};
export default RestaurantMenu;
