import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';
import { Section } from '../ui/Section';
import { portfolioData } from '../../data/portfolio.data';
import profileImage from '../../assets/images/ProfileImage.jpg';

const FloatingElements: React.FC = () => (
  <>
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-indigo-400/20 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </>
);

const ProfileImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <motion.div
    className="md:w-1/3"
    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
    whileHover={{ scale: 1.05, rotate: 2 }}
  >
    <motion.div
      className="relative"
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <img
        src={src}
        alt={alt}
        className="rounded-full shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover mx-auto ring-4 ring-indigo-500/50 ring-offset-4 ring-offset-gray-50 dark:ring-offset-slate-900 transition-all duration-300"
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20"
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  </motion.div>
);

const DynamicRoles: React.FC<{ roles: string[] }> = ({ roles }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div className="text-2xl md:text-3xl font-semibold mt-4 h-10 flex items-center justify-center md:justify-start">
      <AnimatePresence mode="wait">
        <motion.span
          key={roleIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-gray-700 dark:text-slate-200"
        >
          {roles[roleIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const SocialLinks: React.FC<{ contacts: typeof portfolioData.contact }> = ({ contacts }) => (
  <motion.div 
    className="mt-8 flex justify-center md:justify-start space-x-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.8 }}
  >
    {[
      { href: contacts.github, icon: Github, delay: 0 },
      { href: contacts.linkedin, icon: Linkedin, delay: 0.1 },
      { href: `mailto:${contacts.email}`, icon: Mail, delay: 0.2 }
    ].map(({ href, icon: Icon, delay }, index) => (
      <motion.a
        key={index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.9 + delay }}
        whileHover={{ 
          scale: 1.2, 
          rotate: 10,
          transition: { type: "spring", stiffness: 400 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon size={28} />
      </motion.a>
    ))}
  </motion.div>
);

const ActionButtons: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => (
  <motion.div 
    className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.2 }}
  >
    <motion.button
      onClick={onContactClick}
      className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">
      Contact Me
      </span>
    </motion.button>
    <motion.a
      href="/src/assets/Resume.pdf"
      download="Resume-Asmit-Swain.pdf"
      className="bg-white dark:bg-slate-700 text-gray-800 dark:text-slate-200 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300 inline-flex items-center justify-center border-2 border-transparent hover:border-indigo-600"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 1.4 }}
    >
      Download Resume 
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Download className="ml-2" size={20} />
      </motion.div>
    </motion.a>
  </motion.div>
);

const Hero: React.FC = () => {
  const { handleNavLinkClick } = useNavigation();

  return (
    <Section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <FloatingElements />
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-12 z-10">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-slate-100 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <motion.span 
              className="text-indigo-600 dark:text-indigo-400 whitespace-nowrap"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              style={{
                background: "linear-gradient(45deg, #4f46e5, #ec4899, #4f46e5)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {portfolioData.name}
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-slate-300 mt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {portfolioData.title}
          </motion.p>

          <DynamicRoles roles={portfolioData.dynamicRoles} />

          <SocialLinks contacts={portfolioData.contact} />

          <ActionButtons onContactClick={() => handleNavLinkClick('contact')} />
        </motion.div>

        <ProfileImage
          src={profileImage}
          alt={portfolioData.name}
        />
      </div>
    </Section>
  );
};

export default Hero;