import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
