import { Routes, Route } from "react-router-dom";
import SiteLayout from "@/layouts/SiteLayout";
import HomePage from "@/pages/Home/HomePage"
import DefaultPage from "../pages/Default/DefaultPage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/default" element={<DefaultPage />} />
        {/* autres routes */}
      </Route>
    </Routes>
  );
}
