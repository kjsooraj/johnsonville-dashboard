import { Route, Routes } from "react-router-dom";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Layout from "@/components/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}
