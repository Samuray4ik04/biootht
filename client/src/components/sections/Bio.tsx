import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Bio() {
  return (
    <section id="bio" className="py-16">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <Card>
          <CardContent className="p-6 space-y-4">
            <p className="text-lg leading-relaxed">
              Hello! I'm a passionate software engineer with over 5 years of experience in building web applications. 
              I specialize in creating user-friendly interfaces and solving complex problems through elegant solutions.
            </p>
            
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge through technical writing and mentoring.
            </p>
            
            <p className="text-lg leading-relaxed">
              I believe in the power of technology to make a positive impact on people's lives, 
              and I'm always excited to take on new challenges and learn from different perspectives.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
