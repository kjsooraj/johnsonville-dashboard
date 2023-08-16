import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SupabaseSession {}

interface SupabaseUser {}

export interface UserState {
  session: null | SupabaseSession;
  user: null | SupabaseUser;
}

const initialState: UserState = {
  user: null,
  session: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<SupabaseSession | null>) => {
      state.session = action.payload;
    },
    setUser: (state, action: PayloadAction<SupabaseUser | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setSession, setUser } = authSlice.actions;

export default authSlice.reducer;
