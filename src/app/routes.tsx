import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage";
import ServicesPage from "../pages/Services/ServicesPage";
import ProjectsPage from "../pages/Projects/ProjectsPage";
import BlogPage from "../pages/Blog/BlogPage";
import BlogDetailPage from "../pages/Blog/BlogDetailPage";
import ContactPage from "../pages/Contact/ContactPage";
import DefaultPage from "../pages/Default/DefaultPage";
import TestApi from "../pages/TestApi";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/test-api" element={<TestApi />} />
    </Routes>
  );
}
