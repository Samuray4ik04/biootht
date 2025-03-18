import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar className="w-32 h-32 mb-8">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
      >
        John Doe
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-muted-foreground max-w-2xl"
      >
        Software Engineer & Creative Developer
      </motion.p>
    </section>
  );
}
