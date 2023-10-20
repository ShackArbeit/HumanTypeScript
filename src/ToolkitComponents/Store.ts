import { configureStore } from '@reduxjs/toolkit'
import aboutJeromeReducer from './AboutFetchData/AboutJeromeSlice'


const store=configureStore({
      reducer:{
            aboutJerome:aboutJeromeReducer,
      }
})

export default store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch