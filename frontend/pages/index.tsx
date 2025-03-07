import { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaDatabase, FaServer } from 'react-icons/fa';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Define types for our data
interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    linkedin: string;
    github: string;
  };
  summary: string;
}

interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
}

interface SkillsByCategory {
  [category: string]: Skill[];
}

interface Testimonial {
  id: number;
  name: string;
  title: string;
  relationship: string;
  image: string;
  text: string;
  date: string;
  linkedin: string;
}

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [skills, setSkills] = useState<SkillsByCategory | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resumeRes, skillsRes, testimonialsRes] = await Promise.all([
          axios.get('http://localhost:3001/resume'),
          axios.get('http://localhost:3001/skills/categories'),
          axios.get('http://localhost:3001/testimonials'),
        ]);

        setResumeData(resumeRes.data);
        setSkills(skillsRes.data);
        setTestimonials(testimonialsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !resumeData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>{resumeData.personalInfo.name} | {resumeData.personalInfo.title}</title>
        <meta name="description" content={`Portfolio and resume of ${resumeData.personalInfo.name}, ${resumeData.personalInfo.title}`} />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      
      <main>
        <Hero personalInfo={resumeData.personalInfo} summary={resumeData.summary} />
        {skills && <Skills skillsByCategory={skills} />}
        <Experience />
        <Projects />
        <Testimonials testimonials={testimonials} />
        <Contact personalInfo={resumeData.personalInfo} />
      </main>

      <Footer />
    </div>
  );
}
