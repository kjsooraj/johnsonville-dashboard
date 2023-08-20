import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { loginWithOAuth } from "@/redux/features/authSlice";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/core/Avatar";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/core/Icon";

export default function Header() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <header className="h-auto w-full bg-color-primary">
      <div className="container px-4">
        <div className="relative flex h-14 w-full items-center">
          <div className="flex flex-1 items-center justify-start">
            <Link to="/" className="cursor-pointer select-none">
              <Icon icon="unnamed" label="unnamed.co" className="h-6 w-24" />
            </Link>
          </div>
          <div className="hidden flex-1 items-center justify-center md:flex"></div>
          <div className="flex flex-1 items-center justify-end">
            {user ? (
              <Avatar>
                <AvatarImage
                  src={user.user_metadata.avatar_url}
                  alt={user.user_metadata.email}
                />
                <AvatarFallback>
                  {user.user_metadata.name.slice(0, 1)}
                </AvatarFallback>
              </Avatar>
            ) : (
              <Button onClick={() => dispatch(loginWithOAuth("google"))}>
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
