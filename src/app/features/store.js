import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/AllSlice/countSlice"
export const store = configureStore({
  reducer: {
    coun: counterReducer,
  },
})