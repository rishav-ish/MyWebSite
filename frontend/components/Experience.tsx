import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience: React.FC = () => {
  // Mock data - in a real app, this would come from the API
  const experiences = [
    {
      id: 1,
      title: 'Senior Backend Developer',
      company: 'Tech Innovations Inc.',
      location: 'New York, NY (Remote)',
      period: 'Jan 2022 - Present',
      description: 'Lead backend developer responsible for designing and implementing scalable microservices using NestJS and TypeScript. Managed a team of 3 developers and improved API response times by 40%.',
      technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      achievements: [
        'Redesigned authentication system improving security and reducing login times by 30%',
        'Implemented CI/CD pipeline reducing deployment time from hours to minutes',
        'Created comprehensive API documentation increasing developer onboarding efficiency'
      ]
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'DataFlow Systems',
      location: 'Chicago, IL (Hybrid)',
      period: 'Mar 2020 - Dec 2021',
      description: 'Developed and maintained RESTful APIs for data processing applications using Node.js and Express. Worked closely with frontend team to ensure seamless integration.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'GraphQL', 'Docker'],
      achievements: [
        'Developed a real-time data processing system handling over 10,000 requests per minute',
        'Reduced database query times by 50% through optimization and indexing',
        'Implemented GraphQL API reducing frontend-backend data transfer by 60%'
      ]
    },
    {
      id: 3,
      title: 'Junior Software Developer',
      company: 'WebSolution Partners',
      location: 'Boston, MA (On-site)',
      period: 'Jun 2019 - Feb 2020',
      description: 'Full-stack developer with focus on backend systems. Worked on a team developing web applications for enterprise clients.',
      technologies: ['JavaScript', 'Node.js', 'MySQL', 'React', 'Git'],
      achievements: [
        'Contributed to the development of an internal tool that increased team productivity by 25%',
        'Implemented automated testing increasing code coverage from 40% to 85%',
        'Assisted in migrating legacy systems to modern architecture'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-cardBg relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-20 bg-background" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }} />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="max-w-2xl mx-auto text-textColor/70">
            My professional journey as a backend developer, showcasing roles and responsibilities
            across different organizations.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-borderColor"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`mb-12 relative md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-10 md:ml-auto' : 'md:pl-10'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 top-5 w-5 h-5 rounded-full bg-primary transform md:translate-x-1/2 z-10"></div>
              
              {/* Timeline dot for mobile */}
              <div className="md:hidden absolute left-0 top-5 w-5 h-5 rounded-full bg-primary z-10"></div>

              {/* Experience card */}
              <div className={`relative bg-background p-6 rounded-xl border border-borderColor shadow-md hover:border-primary/50 transition-colors ${
                index % 2 === 0 ? 'md:text-right' : ''
              }`}>
                <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded inline-block mb-3">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                
                <div className={`flex items-center text-sm text-textColor/70 mb-4 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  <FaBriefcase className="mr-1 flex-shrink-0" />
                  <span>{exp.company}</span>
                  <span className="mx-2">•</span>
                  <FaMapMarkerAlt className="mr-1 flex-shrink-0" />
                  <span>{exp.location}</span>
                </div>
                
                <p className="mb-4">{exp.description}</p>
                
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}>Key Achievements:</h4>
                  <ul className={`space-y-1 text-sm ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-textColor/80">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 