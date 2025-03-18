import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
              
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              
              <Button variant="outline" size="lg">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              
              <Button variant="outline" size="lg">
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
