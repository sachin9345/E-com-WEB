import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slices/ProductsSlice";
import productReducer from './Slices/ProductSlice';
import authReducer from './Slices/authSlice';
import cartReducer from './Slices/CartSlice';
import orderReducer from './Slices/OrderSlice';
//import userReducer from './slices/userSlice'


const reducer = combineReducers({
    productsState:productsReducer,
    productState:productReducer,
    authState:authReducer,
    cartState:cartReducer,
    ordrerState:orderReducer

})


const store = configureStore({
    reducer,
})

export default store;