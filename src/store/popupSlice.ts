import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState = {
  status: false,
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopup: (state) => {
      state.status = true;
    },
    closePopup: (state) => {
      state.status = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openPopup, closePopup } = popupSlice.actions;

export default popupSlice.reducer;
