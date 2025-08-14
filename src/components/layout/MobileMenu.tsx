import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { navigationLinks } from '../../data/portfolio.data';

interface MobileMenuProps {
  isOpen: boolean;
  onLinkClick: (id: string) => void;
  theme: string;
  onThemeToggle: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onLinkClick, 
  theme, 
  onThemeToggle 
}) => {

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white dark:bg-slate-900/95 pb-4 overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {navigationLinks.map((link, index) => (
            <motion.a 
              key={link.id} 
              href={link.href} 
              onClick={(e) => {
                e.preventDefault();
                onLinkClick(link.id);
              }} 
              className="block py-2 px-6 text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.div 
            className="px-6 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: navigationLinks.length * 0.1 }}
          >
            <motion.button 
              onClick={onThemeToggle} 
              className="w-full p-2 rounded-lg text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
              <span>Switch Theme</span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};