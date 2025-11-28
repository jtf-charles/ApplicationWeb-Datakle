import About from "./About";
import TeamSection from "../Home/components/TeamSection";
import SectionTeam from "../About/SectionTeam";

export default function AboutPage() {
  return (
    <main> {/* espace sous la navbar fixe */}
      <About/>
      <SectionTeam />
    </main>
  );
}
