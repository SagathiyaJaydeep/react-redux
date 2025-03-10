import { createSlice } from "@reduxjs/toolkit";

export const InsertSlice = createSlice({
  name: "create",
  initialState: {
    value: "No Data Inserted !!",
    inputValue: {
      firstname: "",
      lastname: "",
      email: "",
      age: "",
    },
    list : [],
  },
  reducers: {
    setInputValue: (state, action) => {
      console.log(action.payload);
      state.list.push(action.payload)
    },
  },
});

export const {  setInputValue } = InsertSlice.actions;
export default InsertSlice.reducer;
