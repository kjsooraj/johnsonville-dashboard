import { Route, Routes } from "react-router-dom";
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
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="training" element={<Training />} />
        <Route path="coaching" element={<Coaching />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}
