import { createSlice } from '@reduxjs/toolkit';




export const userSlice = createSlice({
  name: "user",
  initialState:{
    user:null,
  },
 reducers:{

  // actions we'll dispatch into the store
  login:(state, action) => {
    state.user = action.payload;   // ex: user login has a payload of user id and email

  },
  logout:(state) => {
    state.user=null;
  },
},
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;  // goes into the state of the store -> user slice and then gets the user from the store 



export default userSlice.reducer;
