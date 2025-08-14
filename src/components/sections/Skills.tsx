import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { portfolioData } from '../../data/portfolio.data';
import { Skill } from '../../types/portfolio.types';

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ 
        width: `${skill.level}%`, 
        transition: { duration: 1.5, ease: "easeOut" } 
      });
    }
  }, [controls, inView, skill.level]);

  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex justify-between items-center mb-1"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <span className="font-medium text-gray-700 dark:text-slate-200">{skill.name}</span>
        <motion.span 
          className="text-sm font-medium text-indigo-600 dark:text-indigo-400"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {skill.level}%
        </motion.span>
      </motion.div>
      <div ref={ref} className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 h-2.5 rounded-full relative"
          initial={{ width: "0%" }}
          animate={controls}
        >
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillCategory: React.FC<{ 
  category: string; 
  skills: Skill[];
  index: number;
}> = ({ category, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
  >
    <motion.h3 
      className="text-2xl font-semibold text-gray-800 dark:text-slate-100 mb-4 border-b-2 border-gray-200 dark:border-slate-700 pb-2"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
    >
      {category}
    </motion.h3>
    <div>
      {skills.map(skill => (
        <SkillBar key={skill.name} skill={skill} />
      ))}
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  const categories = Array.from(new Set(portfolioData.skills.map(s => s.category)));

  return (
    <Section id="skills" className="bg-gray-50 dark:bg-slate-900">
      <SectionTitle>My Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
        {categories.map(category => (
          <SkillCategory 
            key={category} 
            category={category}
            index={categories.indexOf(category)}
            skills={portfolioData.skills.filter(skill => skill.category === category)}
          />
        ))}
      </div>
    </Section>
  );
};

export default Skills;