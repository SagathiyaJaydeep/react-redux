import { configureStore } from "@reduxjs/toolkit";
import InsertSlice from "./InsertSlice";

export default configureStore({
  reducer: {
    create: InsertSlice,
  },
});
