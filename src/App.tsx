import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useAppDispatch } from "@/redux/store";
import { setUser } from "@/redux/features/authSlice";
import Error from "@/pages/Error";
import Home from "@/pages/Home";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const subscribe = supabase.auth.onAuthStateChange(async (_e, session) => {
      dispatch(setUser(session?.user ?? null));
    });

    return () => {
      subscribe.data.subscription.unsubscribe();
    };
  }, [dispatch]);

  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
