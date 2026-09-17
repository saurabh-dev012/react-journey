import { configureStore } from '@reduxjs/toolkit'
import mediaReducer from '../features/mediaSlice'

export const store = configureStore({
  reducer: {
    media: mediaReducer,
  },
})
