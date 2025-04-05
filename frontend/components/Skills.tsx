import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaServer, FaCloud, FaTools, FaChartBar } from 'react-icons/fa';

interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
}

interface SkillsProps {
  skillsByCategory: {
    [category: string]: Skill[];
  };
}

const categoryIcons: { [key: string]: JSX.Element } = {
  'Backend': <FaServer className="text-2xl" />,
  'Frontend': <FaCode className="text-2xl" />,
  'Databases': <FaDatabase className="text-2xl" />,
  'DevOps': <FaTools className="text-2xl" />,
  'Cloud': <FaCloud className="text-2xl" />,
  'Data Science': <FaChartBar className="text-2xl" />,
  'Data Engineering': <FaDatabase className="text-2xl" />,
  'Languages': <FaCode className="text-2xl" />,
  'Architecture': <FaServer className="text-2xl" />,
};

const Skills: React.FC<SkillsProps> = ({ skillsByCategory }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const getIcon = (category: string) => {
    return categoryIcons[category] || <FaCode className="text-2xl" />;
  };

  return (
    <section id="skills" className="py-20 bg-background relative">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 filter blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 filter blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical <span className="text-primary">Skills</span></h2>
          <p className="max-w-2xl mx-auto text-textColor/70">
            With over 4 years of experience in backend development, I've mastered a variety of technologies
            and continuously expand my skill set.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-cardBg rounded-xl p-6 border border-borderColor hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-background rounded-lg text-primary">
                  {getIcon(category)}
                </div>
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>

              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.id} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 