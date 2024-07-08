import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addItemsToCart, removeItemFromCart, resetShippingCost } from "../../utils/CartUtils";
import { SHIPPING_COST } from "../../utils/Constans";
import { CartState, AddToCartPayload } from "../../utils/Types";

const initialState: CartState = {
    hidden: true,
    cartItems: [],
    shoppingCost: 0

}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers:{
        addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
            return {
                ...state,
                shoppingCost: SHIPPING_COST,
                cartItems: addItemsToCart(state.cartItems, action.payload.product)
            }
        },
   
    removeFromCart: (state, action: PayloadAction<number>) => {
        // const updatedCartItems = removeItemFromCart(state.cartItems, action.payload);
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload),
          shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST)
        };
    },
    clearCart: (state) => {
        return {
            ...state,
            shippingCost: 0,
            cartItems: []
        }
    },

    toggleHiddenCart: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },}}
 )

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer