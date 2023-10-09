import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JeromeData {
  id: number;
  title: string;
  content: string;
}

const aboutJerome = createSlice({
  name: 'aboutJerome',
  initialState: [] as JeromeData[],
  reducers: {
    setData: (_, action: PayloadAction<JeromeData[]>) => {
      return action.payload;
    },
  },
});

export const { setData } = aboutJerome.actions;
export default aboutJerome.reducer;
