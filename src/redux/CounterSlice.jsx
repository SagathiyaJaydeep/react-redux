import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "demo",
  initialState: {
    count: 20,
  },
  reducers: {
    incre: (state) => {
      state.count += 1;
    },
    decre: (state) => {
      state.count -= 1;
    },
  },
});

export const { incre, decre } = CounterSlice.actions;
export default CounterSlice.reducer;
