import HeroCarousel from "../Home/components/HeroCarousel";
import ShowcaseTiles from "./components/ShowcaseTiles";
import PartnersSection from "./components/PartnersSection";
import ServicesGrid from "../Services/components/ServicesGrid";
import BlogSummarySection from "../Home/components/BlogSummarySection"
import ServicesSummarySection from "../Home/components/ServicesSummarySection"
import ContactSection from "../Home/components/ContactSection"
import TeamSection from "./components/TeamSection";
import DatakleSloganSeparator from "@/components/common/DatakleSloganSeparator";
import FontTest from "./components/Test";

export default function HomePage() {
  return (
    <main className="pt-16"> {/* espace sous la navbar fixe */}
      <HeroCarousel />
    
        <ShowcaseTiles />
        <ServicesSummarySection/>
         {/* Services */}
      <PartnersSection />  {/* Partenaires */}
      <BlogSummarySection/>
      <ContactSection/>
       <DatakleSloganSeparator />
      <TeamSection/>
      {/* Enchaîne avec tes sections */}
      {/* <ServicesPreview /> */}
    </main>
  );
}
