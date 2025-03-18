import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code, Mail } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Главная', href: '#home' },
  { icon: User, label: 'Обо мне', href: '#about' },
  { icon: Code, label: 'Навыки', href: '#skills' },
  { icon: Mail, label: 'Контакты', href: '#contact' }
];

export default function Navigation() {
  return (
    <motion.nav 
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-4 backdrop-blur-lg bg-black/20 p-3 rounded-full">
        {navItems.map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
          >
            <div className="p-3 rounded-full bg-slate-800/50 text-white hover:bg-primary/80 transition-colors">
              <item.icon size={20} />
              <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-slate-800/90 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
