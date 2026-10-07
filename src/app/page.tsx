import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";
import { getSortedProjectsData } from "@/lib/projects";

export default function Home() {
  const projectsData = getSortedProjectsData();

  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="relative">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Projects projectsData={projectsData} />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
