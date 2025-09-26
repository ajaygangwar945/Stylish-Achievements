import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Qualifications from "@/components/Qualifications";
import SocialMedia from "@/components/SocialMedia";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Achievements />
        <Qualifications />
        <SocialMedia />
      </main>
    </>
  );
};

export default Index;