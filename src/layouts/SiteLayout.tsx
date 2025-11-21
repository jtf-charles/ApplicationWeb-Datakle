import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton"

export default function SiteLayout() {
  return (
    <>
      <Navbar />
      <main>
       {<Outlet />}
      <WhatsAppButton/>
      </main>
      <Footer />
    </>
  );
}
