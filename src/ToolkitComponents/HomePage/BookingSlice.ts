import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingData {
  id: number;
  title: string;
  content: string;
  url:string
}

const Booking = createSlice({
  name: 'Booking',
  initialState: [] as BookingData[],
  reducers: {
      setBookingData: (_, action: PayloadAction< BookingData[]>) => {
      return action.payload;
    },
  },
});

export const {setBookingData}  = Booking.actions;
export default Booking.reducer;
