import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigation } from '../../contexts/NavigationContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { portfolioData } from '../../data/portfolio.data';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { activeLink, handleNavLinkClick } = useNavigation();
  const { isScrolled } = useScrollDirection();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (id: string) => {
    handleNavLinkClick(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen 
        ? 'bg-white/95 dark:bg-slate-900/80 shadow-lg backdrop-blur-sm' 
        : 'bg-transparent'
    }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <motion.nav 
        className="container mx-auto px-8 py-4 flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <motion.a
          href="#home"
          onClick={() => handleLinkClick('home')}
          className="text-3xl gradient-text-light dark:gradient-text-dark"
          style={{ fontFamily: "'Lora', serif", fontWeight: 700 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {portfolioData.name}
        </motion.a>
        
        <Navigation
          activeLink={activeLink}
          onLinkClick={handleLinkClick}
          theme={theme}
          onThemeToggle={toggleTheme}
        />
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <motion.button
            onClick={handleMobileMenuToggle}
            className="text-gray-800 dark:text-slate-200 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>
      
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onLinkClick={handleLinkClick}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
    </motion.header>
  );
};