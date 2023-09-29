import { configureStore } from "@reduxjs/toolkit";
import qrReducer from "../features/qrs/qrSlice";

export const store = configureStore({
  reducer: {
    qr: qrReducer,
  },
});
