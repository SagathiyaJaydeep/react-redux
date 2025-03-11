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
    list: [],
    id: null,
  },
  reducers: {
    setInputValue: (state, action) => {
      if (state.id !== null) {
        state.list.splice(state.id, 1, action.payload);
        state.id = null;
        state.inputValue.firstname = "";
        state.inputValue.lastname = "";
        state.inputValue.email = "";
        state.inputValue.age = "";
      } else {
        state.list.push(action.payload);
      }
    },
    deleteData: (state, action) => {
      state.list.splice(action.payload, 1);
    },
    updateData: (state, action) => {
      console.log(action.payload);
      state.inputValue = action.payload.el;
      state.id = action.payload.i;
    },
  },
});

export const { setInputValue, deleteData, updateData } = InsertSlice.actions;
export default InsertSlice.reducer;
