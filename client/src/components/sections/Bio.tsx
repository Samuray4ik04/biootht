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
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          Обо мне
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full backdrop-blur-lg bg-slate-900/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Опыт работы</h3>
                <p className="text-slate-300 leading-relaxed">
                  Более 5 лет опыта в разработке современных веб-приложений.
                  Специализируюсь на создании интуитивно понятных интерфейсов и
                  решении сложных задач через элегантные решения.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full backdrop-blur-lg bg-slate-900/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Интересы</h3>
                <p className="text-slate-300 leading-relaxed">
                  Увлекаюсь изучением новых технологий, участвую в open-source проектах
                  и делюсь знаниями через технические статьи и менторство.
                  В свободное время изучаю AI и машинное обучение.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}