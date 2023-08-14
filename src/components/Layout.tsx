import { Outlet } from "react-router-dom";
import { Separator } from "@/components/core/Separator";
import Footer from "@/components/Footer";
import Guide from "@/components/Guide";
import Header from "@/components/Header";

export default function Layout() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <Header />
      <Separator />
      <div className="flex-1">
        <div className="container">
          <div className="flex h-full w-full">
            <Guide />
            <Outlet />
          </div>
        </div>
      </div>
      <Separator />
      <Footer />
    </div>
  );
}
