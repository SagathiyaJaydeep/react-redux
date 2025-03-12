import { configureStore } from "@reduxjs/toolkit";
import CrudSlice from "./CrudSlice";

export default configureStore({
  reducer: {
    create: CrudSlice,
  },
});
