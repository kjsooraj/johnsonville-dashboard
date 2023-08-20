/* eslint-disable no-console */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Provider } from "@supabase/supabase-js";
import { User } from "@/types/auth";
import { supabase } from "@/lib/supabase";
import { AppThunk } from "@/redux/store";

export interface UserState {
  user: null | User;
}

const initialState: UserState = {
  user: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export const loginWithOAuth =
  (provider: Provider): AppThunk<Promise<void>> =>
  async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
    });
    if (error) {
      console.error("error signing in:", error);
    }
  };

export const logout = (): AppThunk => async (dispatch) => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("error signing out:", error);
  } else {
    dispatch(setUser(null));
  }
};

export default authSlice.reducer;