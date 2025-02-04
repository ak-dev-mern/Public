import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    removeUsers: (state, action) => {
      state.users = state.users.filter(
        (user, index) => index !== action.payload
      );
    },
  },
});

export const { setUsers, removeUsers } = userSlice.actions;
export default userSlice.reducer;
