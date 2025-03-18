import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = {
  "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  "Backend": ["Node.js", "Express", "PostgreSQL", "Redis"],
  "DevOps": ["Docker", "AWS", "CI/CD", "Kubernetes"],
  "Инструменты": ["Git", "VS Code", "Figma", "Postman"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          Навыки
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full backdrop-blur-lg bg-slate-900/50 border-slate-700 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.1 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-slate-800 hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}