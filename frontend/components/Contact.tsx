import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';

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

interface ContactProps {
  personalInfo: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setStatus('loading');
      
      // In a real app, we would post to a backend endpoint
      // For demo purposes, we'll simulate a successful submission
      setTimeout(() => {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 1500);
      
    } catch (error) {
      setStatus('error');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-primary/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-accent/10 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto text-textColor/70">
            Feel free to reach out if you're looking for a backend developer, have a question, or just want to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-cardBg rounded-xl p-8 border border-borderColor"
          >
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FaEnvelope />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-textColor/70">Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FaPhone />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-textColor/70">Phone</p>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FaMapMarkerAlt />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-textColor/70">Location</p>
                  <p className="text-lg">{personalInfo.location}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-borderColor">
                <p className="text-textColor/70 mb-4">Follow me on:</p>
                <div className="flex space-x-4">
                  <a 
                    href={`https://${personalInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-cardBg border border-borderColor flex items-center justify-center text-textColor hover:text-primary hover:border-primary transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href={`https://${personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-cardBg border border-borderColor flex items-center justify-center text-textColor hover:text-primary hover:border-primary transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-cardBg rounded-xl p-8 border border-borderColor"
          >
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-borderColor rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-borderColor rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-borderColor rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-borderColor rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center"
              >
                {status === 'loading' ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                ) : null}
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-500/20 border border-green-500 text-green-500 rounded-lg text-center"
                >
                  Your message has been sent successfully!
                </motion.div>
              )}
              
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-500/20 border border-red-500 text-red-500 rounded-lg text-center"
                >
                  Something went wrong. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 