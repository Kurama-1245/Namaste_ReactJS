import React,{useState} from "react";
import ItemList from "./ItemList"
const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false)
  
  handleClick=()=>{
    setShowIndex()
  }
  
   return(
    <div className="w-8/12 shadow-lg m-auto my-4 p-4 bg-gray-50 cursor-pointer" onClick={handleClick}>
      <div className="flex justify-between">
          <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
          <span>{showItems?"⬆️":"⬇️"}</span>
      </div>
      {showItems&&<ItemList items={data.itemCards}/>}
    </div>
  )
};

export default RestaurantCategory;
