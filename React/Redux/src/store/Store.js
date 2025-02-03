import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/UserSlice";

const store = configureStore({
  reducer: {
    usersInfo: userReducer,
  },
});

export default store;
