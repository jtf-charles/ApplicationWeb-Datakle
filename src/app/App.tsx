import { Routes, Route } from "react-router-dom";
import SiteLayout from "@/layouts/SiteLayout";
import HomePage from "@/pages/Home/HomePage"
import AboutPage from "@/pages/About/AboutPage"
import BlogPage from "@/pages/Blog/BlogPage"
import DefaultPage from "../pages/Default/DefaultPage";
import ScrollToTop from "../app/ScrollToTop";
import TestApi from "@/pages/TestApi";
import BlogDetailPage from "../pages/Blog/BlogDetailPage";
export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/test-api" element={<TestApi />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/default" element={<DefaultPage />} />
        {/* autres routes */}
      </Route>
    </Routes>
    </>
  );
}
