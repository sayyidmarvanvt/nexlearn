import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  mobile: string;
  name: string;
  email: string;
  qualification: string;
  profile_image: string;
}

interface AuthState {
  mobile: string;
  access_token: string | null;
  refresh_token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  mobile: "",
  access_token: null,
  refresh_token: null,
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMobile(state, action: PayloadAction<string>) {
      state.mobile = action.payload;
    },

    setAuthData(
      state,
      action: PayloadAction<{
        access_token: string;
        refresh_token: string;
        user: User;
      }>
    ) {
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      state.user = action.payload.user;
      state.mobile = action.payload.user.mobile;
      state.isAuthenticated = true;
    },

    logout(state) {
      state.access_token = null;
      state.refresh_token = null;
      state.user = null;
      state.mobile = "";
      state.isAuthenticated = false;
    },
  },
});

export const { setMobile, setAuthData, logout } = authSlice.actions;
export default authSlice.reducer;
