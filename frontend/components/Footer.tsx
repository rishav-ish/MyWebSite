import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cardBg border-t border-borderColor py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center space-x-6 mb-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textColor hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textColor hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="text-textColor hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-textColor/70 mb-2">
              &copy; {currentYear} Backend Developer Portfolio
            </p>
            <p className="text-textColor/50 text-sm flex items-center justify-center">
              Built with <FaHeart className="text-red-500 mx-1" /> using Next.js & NestJS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 