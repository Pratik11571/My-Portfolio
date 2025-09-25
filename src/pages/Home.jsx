import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { OrbBackground } from "../components/OrbBackground";

// Assuming fadeInUp is defined in another file or here
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export const Home = () => {
  return (
    // FIX: Removed the `bg-background` class from this line
    <div className="min-h-screen text-foreground overflow-x-hidden">
      
      {/* Background Effects */}
      <OrbBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      {/* This part is correct, with zIndex: 1 to ensure it's on top of the background */}
      <main className="space-y-20" style={{ position: 'relative', zIndex: 1, color: 'white' }}>
        
        <HeroSection />

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AboutSection />
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SkillsSection />
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProjectsSection />
        </motion.section>
        
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ContactSection />
        </motion.section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};