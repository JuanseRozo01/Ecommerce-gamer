import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    hiddenMenu: true
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setCurrentUser: (state, action) => {
            return{
                ...state,
                action: action.payload
            }
        },
        toggleHiddenMenu: (state) =>{
            return{
                ...state,
                action: !state.hiddenMenu
            }
        }
    }
})

export const {setCurrentUser, toggleHiddenMenu } = userSlice.actions
export default userSlice.reducer