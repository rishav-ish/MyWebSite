import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  linkedin: string;
  github: string;
}

interface HeroProps {
  personalInfo: PersonalInfo;
  summary: string;
}

const Hero: React.FC<HeroProps> = ({ personalInfo, summary }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="hero" className="pt-32 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-primary/10 opacity-70" />
        <div className="absolute top-20 right-20 w-60 h-60 bg-primary/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
          >
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-60 h-60">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse-slow" />
                <div className="absolute inset-1 rounded-full bg-background overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-cardBg to-background flex items-center justify-center text-4xl font-bold text-accent">
                    {personalInfo.name.charAt(0)}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 text-center md:text-left">
              <motion.h1 
                variants={itemVariants} 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                {personalInfo.name}
              </motion.h1>
              
              <motion.h2 
                variants={itemVariants} 
                className="text-xl sm:text-2xl mb-6 text-textColor/80"
              >
                {personalInfo.title}
              </motion.h2>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
                <span className="px-3 py-1 rounded-full bg-cardBg text-sm flex items-center gap-1">
                  <FaMapMarkerAlt className="text-primary" />
                  {personalInfo.location}
                </span>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="px-3 py-1 rounded-full bg-cardBg text-sm flex items-center gap-1 hover:bg-primary/20 transition-colors"
                >
                  <FaEnvelope className="text-primary" />
                  {personalInfo.email}
                </a>
                <a 
                  href={`https://${personalInfo.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-1 rounded-full bg-cardBg text-sm flex items-center gap-1 hover:bg-primary/20 transition-colors"
                >
                  <FaGithub className="text-primary" />
                  GitHub
                </a>
                <a 
                  href={`https://${personalInfo.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-1 rounded-full bg-cardBg text-sm flex items-center gap-1 hover:bg-primary/20 transition-colors"
                >
                  <FaLinkedin className="text-primary" />
                  LinkedIn
                </a>
              </motion.div>

              <motion.p variants={itemVariants} className="text-lg text-textColor/90 mb-8">
                {summary}
              </motion.p>

              <motion.div 
                variants={itemVariants} 
                className="flex gap-4 justify-center md:justify-start"
              >
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-medium hover:opacity-90 transition-opacity transform hover:-translate-y-1 duration-300"
                >
                  Get in Touch
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-cardBg border border-borderColor rounded-lg font-medium hover:bg-cardBg/70 transition-colors transform hover:-translate-y-1 duration-300"
                >
                  View Projects
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-textColor/50 text-sm mb-2">Scroll Down</span>
          <div className="w-5 h-10 border-2 border-textColor/30 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2 h-2 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 