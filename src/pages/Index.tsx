import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Qualifications from "@/components/Qualifications";
import SocialMedia from "@/components/SocialMedia";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="min-h-screen">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section>
          <Achievements />
        </section>
        <section id="qualifications">
          <Qualifications />
        </section>
        <section id="contact">
          <SocialMedia />
        </section>
      </main>
      <ScrollToTop />
    </>
  );
};

export default Index;