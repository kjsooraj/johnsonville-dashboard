import { useAppDispatch } from "@/redux/store";
import { loginWithOAuth, logout } from "@/redux/features/authSlice";

export default function Auth() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(loginWithOAuth("github"))}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
