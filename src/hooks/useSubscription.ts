/* eslint-disable no-console */
import { useEffect } from "react";
import { SupaUser } from "@/types/auth";
import { supabase } from "@/lib/supabase";
import { useAppDispatch } from "@/redux/store";
import { setSession, setUser } from "@/redux/features/authSlice";

export default function useSubscription() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const subscribe = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        dispatch(setSession(session));
        dispatch(setUser((session?.user as SupaUser) ?? null));
      }
    );

    return () => {
      if (subscribe.data && subscribe.data.subscription) {
        subscribe.data.subscription.unsubscribe();
      }
    };
  }, [dispatch]);
}
