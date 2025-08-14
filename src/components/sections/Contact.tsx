import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Instagram, Phone, Send } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { useContactForm } from '../../hooks/useContactForm';
import { portfolioData } from '../../data/portfolio.data';

const ContactForm: React.FC = () => {
  const { status, isSubmitting, handleSubmit } = useContactForm();

  return (
    <motion.div 
      className="bg-gray-50 dark:bg-slate-900/50 p-8 rounded-lg shadow-inner border border-gray-200 dark:border-slate-700"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <label htmlFor="name" className="block text-gray-700 dark:text-slate-300 font-medium mb-2">
            Your Name
          </label>
          <motion.input 
            type="text" 
            id="name" 
            name="name" 
            className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300" 
            required 
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <label htmlFor="email" className="block text-gray-700 dark:text-slate-300 font-medium mb-2">
            Your Email
          </label>
          <motion.input 
            type="email" 
            id="email" 
            name="email" 
            className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300" 
            required 
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <label htmlFor="subject" className="block text-gray-700 dark:text-slate-300 font-medium mb-2">
            Subject
          </label>
          <motion.input 
            type="text" 
            id="subject" 
            name="subject" 
            className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300" 
            required 
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <label htmlFor="message" className="block text-gray-700 dark:text-slate-300 font-medium mb-2">
            Message
          </label>
          <motion.textarea 
            id="message" 
            name="message" 
            rows={4} 
            className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 resize-none" 
            required
            whileFocus={{ scale: 1.02 }}
          ></textarea>
        </motion.div>
        <motion.button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:bg-indigo-400 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10 flex items-center gap-2">
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                />
                Sending...
              </>
            ) : (
              <>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Send size={18} />
                </motion.div>
                Send Message
              </>
            )}
          </span>
        </motion.button>
        {status && (
          <motion.p 
            className={`mt-4 text-center font-semibold ${status.includes('successfully') ? 'text-green-600' : 'text-red-500'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {status}
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  );
};

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { name: 'Email', href: `mailto:${portfolioData.contact.email}`, icon: Mail },
    { name: 'LinkedIn', href: portfolioData.contact.linkedin, icon: Linkedin },
    { name: 'GitHub', href: portfolioData.contact.github, icon: Github },
    { name: 'Twitter', href: portfolioData.contact.twitter, icon: Twitter },
    { name: 'Instagram', href: portfolioData.contact.instagram, icon: Instagram },
    { name: 'Phone', href: `tel:${portfolioData.contact.phone}`, icon: Phone },
  ];

  return (
    <motion.div 
      className="flex flex-wrap justify-center md:justify-start gap-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {socialLinks.map(link => (
        <motion.a 
          key={link.name} 
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 p-2 rounded-full hover:bg-indigo-50 dark:hover:bg-slate-800"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: socialLinks.indexOf(link) * 0.1 }}
          whileHover={{ 
            scale: 1.2, 
            rotate: 10,
            transition: { type: "spring", stiffness: 400 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          <link.icon size={32} />
        </motion.a>
      ))}
    </motion.div>
  );
};

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-white dark:bg-slate-800">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-lg text-gray-600 dark:text-slate-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>
          <motion.p 
            className="text-lg text-gray-600 dark:text-slate-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            I'm always open to connecting. Feel free to reach out through the form or find me on these platforms:
          </motion.p>
          <SocialLinks />
        </motion.div>
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;