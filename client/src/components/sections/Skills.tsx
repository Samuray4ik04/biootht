import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript", "TypeScript", "React", "Node.js", 
  "Python", "Docker", "AWS", "GraphQL",
  "PostgreSQL", "MongoDB", "Redis", "Git"
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Badge variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
