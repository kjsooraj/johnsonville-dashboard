import { Route, Routes } from "react-router-dom";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Auth from "./components/Auth";

export default function App() {
  return (
    <>
      <Auth />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
