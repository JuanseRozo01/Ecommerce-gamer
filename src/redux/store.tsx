import { configureStore } from "@reduxjs/toolkit";
import useReducer from './users/userSlice';
import cartReducer  from "./cart/cartSlice";
import productReducer from './products/productSlice';
import NewProductsReducer from "./new products/newProductsSlice";
import categorieReducer from './categories/categoriesSlice';
import orderReducer from './orders/orderSlice'


export const store = configureStore({
    reducer:{
        user: useReducer,
        cart: cartReducer,
        produtc: productReducer,
        newProducts: NewProductsReducer,
        categories: categorieReducer,
        orders: orderReducer
    }
});

export type appDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>