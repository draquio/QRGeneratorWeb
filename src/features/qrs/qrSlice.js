import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id:1,
  qrvalue:null
}
export const qrSlice = createSlice({
  name: "QR",
  initialState,
  reducers: {
    updateQR: (state, action) => {
      state.qrvalue = action.payload;
    },
  },
});

export const { updateQR } = qrSlice.actions;
export default qrSlice.reducer;
