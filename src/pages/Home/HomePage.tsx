import HeroCarousel from "../Home/components/HeroCarousel";
import ShowcaseTiles from "./components/ShowcaseTiles";
import ServicesSection from "./components/ServicesSection";
import PartnersSection from "./components/PartnersSection";
import ServicesGrid from "../Services/components/ServicesGrid";

export default function HomePage() {
  return (
    <main className="pt-16"> {/* espace sous la navbar fixe */}
      <HeroCarousel />
        <ShowcaseTiles />
        <ServicesGrid/>
         {/* Services */}
      <PartnersSection />  {/* Partenaires */}
      {/* Enchaîne avec tes sections */}
      {/* <ServicesPreview /> */}
    </main>
  );
}
