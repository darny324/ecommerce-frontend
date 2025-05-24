import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null, 
    isLoggedIn: false,
}

const userSlice = createSlice({
    name: 'user', 
    initialState, 
    reducers: {
        setUser: (state, {payload}) => {
            state.user = payload.user;
            state.isLoggedIn = true;
        },

        logOut: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        }
    }
})

export const {setUser, logOut} = userSlice.actions;


export default userSlice.reducer;