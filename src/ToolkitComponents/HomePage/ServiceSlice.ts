import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ServiceData {
  id: number;
  title: string;
  content: string;
}

const Service = createSlice({
  name: 'Service',
  initialState: [] as ServiceData[],
  reducers: {
      setServiceData: (_, action: PayloadAction< ServiceData[]>) => {
      return action.payload;
    },
  },
});

export const {setServiceData}  = Service.actions;
export default Service.reducer;
