import { Routes, Route } from "react-router-dom";
import SiteLayout from "@/layouts/SiteLayout";
import HomePage from "@/pages/Home/HomePage"
import AboutPage from "@/pages/About/AboutPage"
import DefaultPage from "../pages/Default/DefaultPage";
import ScrollToTop from "../app/ScrollToTop";
export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/default" element={<DefaultPage />} />
        {/* autres routes */}
      </Route>
    </Routes>
    </>
  );
}
