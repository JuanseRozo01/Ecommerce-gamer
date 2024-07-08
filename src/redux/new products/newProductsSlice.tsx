import { createSlice } from "@reduxjs/toolkit";
import { newProducts } from "../../data/NewProducts"; 

const initialState = {
    newProducts: newProducts
}

export const newProductSlice = createSlice({
    name: 'newProducts',
    initialState: initialState,
    reducers: {
        getNewProducts: (state) => {
            return state
        }
    }
})

export const { getNewProducts } = newProductSlice.actions;
export default newProductSlice.reducer;
