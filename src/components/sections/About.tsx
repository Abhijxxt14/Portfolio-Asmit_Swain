import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Users } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';

const AboutCard: React.FC<{ 
  title: string; 
  icon: React.ElementType; 
  children: React.ReactNode;
  index: number;
}> = ({ title, icon: Icon, children, index }) => (
  <motion.div 
    className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800"
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.2,
      type: "spring",
      stiffness: 100
    }}
    whileHover={{ 
      y: -10,
      scale: 1.02,
      transition: { type: "spring", stiffness: 400 }
    }}
  >
    <motion.div 
      className="flex items-center mb-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
    >
      <motion.div
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="text-indigo-600 dark:text-indigo-400 mr-3" size={24} />
      </motion.div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100">{title}</h3>
    </motion.div>
    <motion.div 
      className="text-gray-600 dark:text-slate-300 space-y-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const About: React.FC = () => {
  const cardData = [
    {
      title: "Core Competencies",
      icon: Briefcase,
      content: (
        <ul className="list-disc list-inside">
          <li>Architecting responsive UIs using HTML5, CSS3, and JavaScript (ES6+).</li>
          <li>Creating clean, intuitive, and user-friendly designs.</li>
        </ul>
      )
    },
    {
      title: "Currently Learning",
      icon: BookOpen,
      content: (
        <ul className="list-disc list-inside">
          <li><strong>Full-Stack:</strong> Node.js and Express.</li>
          <li><strong>Databases:</strong> MongoDB and MySQL.</li>
          <li><strong>OOP:</strong> Java and Python.</li>
          <li><strong>Game Dev:</strong> C# in Unity Engine.</li>
        </ul>
      )
    },
    {
      title: "Professional Attributes",
      icon: Users,
      content: (
        <ul className="list-disc list-inside">
          <li><strong>Collaborative Spirit:</strong> A dedicated team player.</li>
          <li><strong>Problem-Solving:</strong> An analytical thinker.</li>
          <li><strong>Continuous Improvement:</strong> Passionately staying current.</li>
        </ul>
      )
    }
  ];

  return (
    <Section id="about" className="bg-gray-50 dark:bg-slate-900">
      <SectionTitle>About Me</SectionTitle>
      <div className="max-w-5xl mx-auto">
        <motion.p 
          className="text-center text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          I am a multifaceted and ambitious developer, passionate about architecting robust digital solutions from concept to deployment. I combine a strong foundation in front-end development with a strategic expansion into full-stack, enterprise, and game development technologies. My approach is defined by a meticulous work ethic, a commitment to teamwork, and a drive for creative excellence.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <AboutCard 
              key={card.title}
              title={card.title} 
              icon={card.icon} 
              index={index}
            >
              {card.content}
            </AboutCard>
          ))}
        </div>
        <motion.p 
          className="text-center text-lg text-gray-600 dark:text-slate-300 leading-relaxed mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          I am actively seeking a challenging opportunity where I can deploy this full spectrum of skills to contribute to a company's success and further my journey toward becoming an expert developer.
        </motion.p>
      </div>
    </Section>
  );
};

export default About;