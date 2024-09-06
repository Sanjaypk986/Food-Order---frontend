import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "../features/food/foodSlice";
import restaurantReducer from "../features/restaurant/restaurantSlice";
import userReducer from "../features/user/userSlice";
import cartReducer from "../features/cart/cartSlice";
import ordersSlice from "../features/order/ordersSlice";
import addressSlice from "../features/address/addressSlice";


export default configureStore({
  reducer: {
    food: foodReducer,
    restaurant: restaurantReducer,
    user: userReducer,
    cart: cartReducer,
    order: ordersSlice,
    address: addressSlice
  },
});
