import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton"
import ScrollToTopButton from "../components/common/ScrollToTopButton"


export default function SiteLayout() {
  return (
    <>
      <Navbar />
      <main>
       {<Outlet />}
      <WhatsAppButton/>
      <ScrollToTopButton />
      </main>
      <Footer />
    </>
  );
}
