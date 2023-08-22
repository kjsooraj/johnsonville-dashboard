import { Link } from "react-router-dom";
import { Icon } from "@/components/core/Icon";
import UserAction from "@/components/UserAction";

export default function Header() {
  return (
    <header className="h-auto w-full bg-color-primary">
      <div className="container px-4">
        <div className="relative flex h-14 w-full items-center">
          <div className="flex flex-1 items-center justify-start">
            <Link to="/" className="cursor-pointer select-none">
              <Icon icon="unnamed" label="unnamed.co" className="h-9 w-9" />
            </Link>
          </div>
          <div className="hidden flex-1 items-center justify-center md:flex"></div>
          <div className="flex flex-1 items-center justify-end">
            <UserAction />
          </div>
        </div>
      </div>
    </header>
  );
}
