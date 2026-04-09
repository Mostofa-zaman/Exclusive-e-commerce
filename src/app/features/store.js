import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './allSlice/countSlice'
import { ProductApi } from '../features/api/ProductApi'
export const store = configureStore({
  reducer: {
    count: counterSlice,
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
})