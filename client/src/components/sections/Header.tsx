import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Floating elements background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            animate={{
              x: [Math.random() * 100, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * 100],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <motion.div
          className="inline-block mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Code2 className="w-16 h-16 text-primary" />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Разработчик
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-2 text-xl text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Sparkles className="w-5 h-5 text-primary" />
          <span>Создаю современные веб-приложения</span>
          <Sparkles className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </div>
  );
}