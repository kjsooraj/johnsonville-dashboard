import { Route, Routes } from "react-router-dom";
import { routes } from "@/constants/routes";
import About from "@/pages/About";
import Blogs from "@/pages/Blogs";
import Coaching from "@/pages/Coaching";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import Gallery from "@/pages/Gallery";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Testimonials from "@/pages/Testimonials";
import Training from "@/pages/Training";
import Layout from "@/components/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.services} element={<Services />} />
        <Route path={routes.training} element={<Training />} />
        <Route path={routes.coaching} element={<Coaching />} />
        <Route path={routes.gallery} element={<Gallery />} />
        <Route path={routes.testimonials} element={<Testimonials />} />
        <Route path={routes.blogs} element={<Blogs />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}
