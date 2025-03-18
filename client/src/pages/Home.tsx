import { motion } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Header from "@/components/sections/Header";
import Bio from "@/components/sections/Bio";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/layout/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 relative overflow-hidden">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}
      />

      {/* Content */}
      <ScrollProgress />
      <Navigation />

      <motion.div
        className="relative container mx-auto px-4 py-8"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-32"
        >
          <section id="home">
            <Header />
          </section>

          <section id="about">
            <Bio />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </motion.div>
      </motion.div>
    </div>
  );
}