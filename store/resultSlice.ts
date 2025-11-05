// store/resultSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResultDetail {
  question_id: number;
  selected_option_id: number | null;
  correct_option_id: number;
  is_correct: boolean;
  status: "correct" | "wrong" | "not_attended";
}

interface ResultState {
  success: boolean | null;
  exam_history_id: number | null;
  score: number;
  correct: number;
  wrong: number;
  not_attended: number;
  submitted_at: string | null;
  details: ResultDetail[];
  total_questions: number;
  total_marks: number;
}

const initialState: ResultState = {
  success: null,
  exam_history_id: null,
  score: 0,
  correct: 0,
  wrong: 0,
  not_attended: 0,
  submitted_at: null,
  details: [],
  total_questions: 0,
  total_marks: 0,
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<any>) => {
      state.success = action.payload.success;
      state.exam_history_id = action.payload.exam_history_id;
      state.score = action.payload.score;
      state.correct = action.payload.correct;
      state.wrong = action.payload.wrong;
      state.not_attended = action.payload.not_attended;
      state.submitted_at = action.payload.submitted_at;
      state.details = action.payload.details;
    },
    setTotalQuestions: (
      state,
      action: PayloadAction<{ total_questions: number; total_marks: number }>
    ) => {
      state.total_questions = action.payload.total_questions;
      state.total_marks = action.payload.total_marks;
    },
    clearResult: (state) => {
      return initialState;
    },
  },
});

export const { setResult, setTotalQuestions, clearResult } =
  resultSlice.actions;
export default resultSlice.reducer;
