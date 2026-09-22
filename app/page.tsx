import SiteHeader from "./components/site-header";
import Hero from "./components/hero";
import About from "./components/about";
import FocusAreas from "./components/focus-areas";
import Experience from "./components/experience";
import Volunteering from "./components/volunteering";
import Skills from "./components/skills";
import Education from "./components/education";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <FocusAreas />
        <Experience />
        <Skills />
        <Education />
        <Volunteering />
        <Contact />
      </main>
    </>
  );
}
