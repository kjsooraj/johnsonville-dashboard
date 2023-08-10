import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-auto w-full">
      <div className="container px-4">
        <div className="h-14 w-full flex items-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center select-none cursor-pointer"
          >
            Logo
          </Link>
        </div>
      </div>
    </header>
  );
}
