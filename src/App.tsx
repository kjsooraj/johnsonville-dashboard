import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Layout from "@/components/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
