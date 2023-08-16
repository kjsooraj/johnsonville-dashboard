/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { supabase } from "@/lib/supabase";
import { setSession, setUser } from "@/redux/features/authSlice";

export default function Auth() {
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    dispatch(setUser(null));
    dispatch(setSession(null));
  };

  useEffect(() => {
    const subscribe = supabase.auth.onAuthStateChange(async (_e, session) => {
      dispatch(setSession(session));
      dispatch(setUser(session?.user ?? null));
    });

    return () => subscribe.data.subscription.unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <div className="space-x-4">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
