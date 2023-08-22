/* eslint-disable no-console */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Session } from "@supabase/supabase-js";
import { SupaUser } from "@/types/auth";
import { supabase } from "@/lib/supabase";
import { AppThunk } from "@/redux/store";

export interface UserState {
  user: SupaUser | null;
  session: Session | null;
}

const initialState: UserState = {
  user: null,
  session: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SupaUser | null>) => {
      state.user = action.payload;
    },
    setSession: (state, action: PayloadAction<Session | null>) => {
      state.session = action.payload;
    },
  },
});

export const { setUser, setSession } = authSlice.actions;

export const login = (): AppThunk<Promise<void>> => async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) {
    console.error("error signing in:", error);
  }
};

export const logout = (): AppThunk => async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("error signing out:", error);
  }
};

export default authSlice.reducer;
