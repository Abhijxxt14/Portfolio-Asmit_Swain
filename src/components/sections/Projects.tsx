import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { portfolioData } from '../../data/portfolio.data';

const ProjectCard: React.FC<{ 
  project: typeof portfolioData.projects[0]; 
  index: number 
}> = ({ project, index }) => (
  <motion.div 
    className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800"
    initial={{ opacity: 0, y: 50, rotateX: 10 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.2,
      type: "spring",
      stiffness: 100
    }}
    whileHover={{ 
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: { type: "spring", stiffness: 400 }
    }}
  >
    <motion.div 
      className="p-6 flex-grow"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
    >
      <motion.h3 
        className="text-2xl font-bold mb-2 text-gray-800 dark:text-slate-100"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
      >
        {project.title}
      </motion.h3>
      <motion.p 
        className="text-gray-600 dark:text-slate-300 mb-4 flex-grow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
      >
        {project.description}
      </motion.p>
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
      >
        <p className="font-semibold mb-2 text-gray-700 dark:text-slate-200">Key Features:</p>
        <ul className="list-disc list-inside text-gray-600 dark:text-slate-300 space-y-1">
          {project.keyFeatures.map((feature, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 + 0.6 + i * 0.1 }}
            >
              {feature}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
    <motion.div 
      className="px-6 pt-4 pb-2 border-t border-gray-200 dark:border-slate-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 + 0.7 }}
    >
      <p className="font-semibold mb-3 text-gray-700 dark:text-slate-200">Technologies Used:</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <motion.span 
            key={i} 
            className="bg-indigo-100 dark:bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 text-sm font-medium px-2.5 py-1 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 + 0.8 + i * 0.05 }}
            whileHover={{ scale: 1.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
    <motion.div 
      className="px-6 py-4 bg-gray-50 dark:bg-slate-900/50 flex justify-end gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 + 0.9 }}
    >
      {project.livePreview && (
        <motion.a 
          href={project.livePreview} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ExternalLink size={18} />
          </motion.div>
          Live Preview
        </motion.a>
      )}
      {project.github && (
        <motion.a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-gray-600 dark:text-slate-300 font-semibold hover:text-gray-800 dark:hover:text-white transition-colors"
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Github size={18} />
          </motion.div>
          GitHub
        </motion.a>
      )}
    </motion.div>
  </motion.div>
);

const Projects: React.FC = () => (
  <Section id="projects" className="bg-white dark:bg-slate-800">
    <SectionTitle>Projects</SectionTitle>
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {portfolioData.projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  </Section>
);

export default Projects;