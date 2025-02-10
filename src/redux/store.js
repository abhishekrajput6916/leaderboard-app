import { configureStore,  } from "@reduxjs/toolkit";
import playerReducer from "./Slices/scoresSlice"
const store = configureStore({
  reducer: playerReducer, 
});

export default store;