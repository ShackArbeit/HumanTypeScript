import { configureStore } from '@reduxjs/toolkit'
import aboutJeromeReducer from './AboutJerome/AboutJeromeSlice'
import FeedBackReducer from './FeedBack/FeedbackSlice'
import ServiceReducer from './HomePage/ServiceSlice'
import BookingRducer from './HomePage/BookingSlice'

const store=configureStore({
      reducer:{
            aboutJerome:aboutJeromeReducer,
            FeedBack:FeedBackReducer,
            Service: ServiceReducer,
            Booking:BookingRducer,
      }
})

export default store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch