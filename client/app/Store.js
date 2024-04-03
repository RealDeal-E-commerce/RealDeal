import { configureStore } from '@reduxjs/toolkit'

import commentSlice from '../src/features/comments/commentSlice'
import commentApi from '../src/features/comments/commentApi'
// import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

export const store = configureStore({
  reducer: {
    comments:commentSlice
  },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(postApi.middleware).concat(commentApi.middleware)
})