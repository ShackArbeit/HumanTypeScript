import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FeedbackData {
  id: number;
  title: string;
  content: string;
}

const FeedBack = createSlice({
  name: 'FeedBack',
  initialState: [] as FeedbackData[],
  reducers: {
    setFeedbackData: (_, action: PayloadAction<FeedbackData[]>) => {
      return action.payload;
    },
  },
});

export const { setFeedbackData } = FeedBack.actions;
export default FeedBack.reducer;
