import { motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TechMarquee } from "./components/TechMarquee";
import { Philosophy } from "./components/Philosophy";
import { LiveMetrics } from "./components/LiveMetrics";
import { Experience } from "./components/Experience";
import { Deployments } from "./components/Deployments";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="grain-overlay" />
      
      <div className="min-h-screen font-sans text-ink dark:text-slate-100 bg-white dark:bg-[#0a0f1e] transition-colors duration-300">

        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -50, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-50/60 dark:bg-indigo-900/20 blur-[150px] rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], x: [0, -30, 0], y: [0, 30, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-teal-50/50 dark:bg-teal-900/15 blur-[150px] rounded-full"
          />
        </div>

        <Navbar />

        <motion.main
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <section id="hero"><Hero /></section>
          <TechMarquee />
          <Philosophy />
          <div className="section-divider" />
          <LiveMetrics />
          <div className="section-divider" />
          <section id="experience"><Experience /></section>
          <div className="section-divider" />
          <section id="deployments"><Deployments /></section>
          <div className="section-divider" />
          <section id="contact"><Contact /></section>
          <Footer />
        </motion.main>
      </div>
    </>
  );
}

export default App;