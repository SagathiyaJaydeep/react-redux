import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "demo",
  initialState: {
    count: 1,
  },
  reducers: {
    incre: (state) => {
      if (state.count < 10) {
        state.count += 1;
      } else {
        alert(`Maximum Cart Added ${state.count}`);
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
  },
});

export const { incre, decre, incBy5 } = CounterSlice.actions;
export default CounterSlice.reducer;
