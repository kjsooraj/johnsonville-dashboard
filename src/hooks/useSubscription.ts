import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAppDispatch } from "@/redux/store";
import { setUser } from "@/redux/features/authSlice";

export default function useSubscription() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const subscribe = supabase.auth.onAuthStateChange(async (_e, session) => {
      dispatch(setUser(session?.user ?? null));
    });

    return () => {
      subscribe.data.subscription.unsubscribe();
    };
  }, [dispatch]);
}
