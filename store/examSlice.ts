import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axiosClient";

export const fetchExamData = createAsyncThunk(
  "exam/fetchExamData",
  async () => {
    const res = await api("/api/question/list");
    console.log(res.data);
    
    return res.data;
  }
);

interface ExamState {
  loading: boolean;
  data: any;
  error: string | null;
}

const initialState: ExamState = {
  loading: false,
  data: null,
  error: null,
};

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    clearExam: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExamData.pending, (state) => {
        console.log("🟡 Fetching exam data...");
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExamData.fulfilled, (state, action) => {
        console.log("✅ Exam data fetched:", action.payload);
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchExamData.rejected, (state, action) => {
        console.error("❌ Failed to fetch exam data:", action.error);
        state.loading = false;
        state.error = action.error.message || "Failed to fetch exam data";
      });
  },
});

export const { clearExam } = examSlice.actions;
export default examSlice.reducer;
