import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () => {
    
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold font-serif">Cart</h1>
      <div
        className="w-6/12 m-auto p-2 shadow-2xl rounded-lg"
        onClick={handleClearCart}
      >
        <button className="bg-black text-white p-2 m-2 rounded-lg">
          CLear Cart
        </button>
        <ItemList items={cartItems} />
        {/* {cartItems.map((item) =>{
            return (
                <ItemList/>
            )
        })} */}
      </div>
      {cartItems.length === 0 && <p>Your cart is empty</p>}
    </div>
  );
};
export default Cart;
