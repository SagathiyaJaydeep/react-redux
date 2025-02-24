import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "demo",
  initialState: {
    count: 1,
    inputValue: 0,
  },
  reducers: {
    incre: (state) => {
      if (state.count >= 0) {
        state.count += 1;
      }
    },
    decre: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    incBy5: (state, action) => {
      state.count += action.payload;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { incre, decre, incBy5, setInputValue } = CounterSlice.actions;
export default CounterSlice.reducer;
