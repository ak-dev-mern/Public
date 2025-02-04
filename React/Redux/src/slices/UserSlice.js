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
    updateUser: (state, action) => {
      const { index, user } = action.payload;
      state.users[index] = user;
    },
  },
});

export const { setUsers, removeUsers, updateUser } = userSlice.actions;
export default userSlice.reducer;
