import { createSlice } from "@reduxjs/toolkit";
import { TotalProducts, Products } from "../../data/Products";

const initialState = {
    products: Products,
    totalProducts: TotalProducts,
}


export const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers:{
        getProducts: (state) => {
            return state
        }
    }
});

export const { getProducts } = productSlice.actions
export default productSlice.reducer