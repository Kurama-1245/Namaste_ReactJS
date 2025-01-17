import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAdditem = (item) => {
    // dispatching the action
    dispatch(addItem(item));
  };
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item?.card?.info?.id} className=" flex justify-between my-2">
            <div className="border-b-2 text-left">
              <span className="flex">{item?.card?.info?.name}</span>
              <span className="flex items-center">
                ₹{" "}
                {item?.card?.info?.defaultPrice
                  ? item?.card?.info?.defaultPrice &&
                    item?.card?.info?.defaultPrice / 100
                  : item?.card?.info?.finalPrice
                  ? item?.card?.info?.finalPrice / 100
                  : item?.card?.info?.price / 100}
              </span>
              <p className="text-sm">{item?.card?.info?.description}</p>
            </div>
            <div>
              <div className="absolute">
                <button
                  className="p-2 mx-16 bg-black text-white shadow-lg rounded-lg"
                  // onClick={handleAdditem}
                  onClick={() => handleAdditem(item)}
                  // onClick={handleAdditem(item)}
                >
                  Add +
                </button>
              </div>
            </div>
            <div className="w-[250px] flex items-center p-2 ">
              <img src={CDN_URL + item?.card?.info?.imageId} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
