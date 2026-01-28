import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Achievements from "@/components/Achievements";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <AnimatedBackground />
            <Navigation />
            <main className="flex-grow pt-24">
                <Achievements isFullPage={true} />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Projects;
