import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "../../data/Categories";

const initialState = {
    Categories: Categories,
    selectCategory: null
}

export const categorieSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: { 
        getCategories: (state) => {
        return state
    },
      selectCategory: (state, action) => {
        return {
            ...state,
            selectCategory: action.payload !== state.selectCategory ? action.payload: null
        }
      } }
})

export const { getCategories, selectCategory } = categorieSlice.actions;
export default categorieSlice.reducer;