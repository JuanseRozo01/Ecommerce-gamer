import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order, OrdersState} from "../../utils/Types";

  const initialState: OrdersState = {
    orders: null,
    loading: false,
    error: null,
  };

export const orderSlice = createSlice({
    name: 'orders',
    initialState: initialState,
    reducers: { 
        createOrderFails: (state, action:PayloadAction<string>) =>{
        return{
           ...state,
           error: action.payload
        }
    },
    fetchOrderSuccess: (state, action: PayloadAction<Order[]>) =>{
        return{
            ...state,
            loadind: false,
            error:null,
            orders:[...action.payload]
        }
    },
    fetchOrdersFail: (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      },
  
      fetchOrdersStart: (state) => {
        return {
          ...state,
          loading: true,
        };
      },
  
      clearError: (state) => {
        return {
          ...state,
          error: null,
        };
      },
      clearOrders: (state) => {
        return {
          ...state,
          orders: null,
        };
      },
}, 
})

export const { createOrderFails, fetchOrderSuccess, fetchOrdersFail, fetchOrdersStart, clearError, clearOrders } = orderSlice.actions;
export default orderSlice.reducer