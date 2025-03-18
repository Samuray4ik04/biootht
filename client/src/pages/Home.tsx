import { motion } from "framer-motion";
import Header from "@/components/sections/Header";
import Bio from "@/components/sections/Bio";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/layout/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-8 space-y-24"
      >
        <Header />
        <Bio />
        <Skills />
        <Contact />
      </motion.div>
    </div>
  );
}
