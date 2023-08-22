import { Route, Routes } from "react-router-dom";
import useSubscription from "@/hooks/useSubscription";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Layout from "@/components/Layout";

export default function App() {
  const _subscription = useSubscription();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}
