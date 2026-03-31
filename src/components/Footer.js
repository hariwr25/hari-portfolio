import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          {/* Branding */}
          <div className="flex items-center gap-2 mb-4">
            <FaBriefcase className="text-cyan-400" />
            <h2 className="text-2xl font-bold gradient-text">
              Hari Wahyu Ramadhan
            </h2>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mb-6">
            
            {/* GitHub */}
            <a 
              href="https://github.com/hariwr25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <FaGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/hari-wahyu-ramadhan-54707b314/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <FaLinkedin size={20} />
            </a>

            {/* Email */}
            <a 
              href="mailto:hariwr25@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <FaEnvelope size={20} />
            </a>

          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-xs mt-2 text-center">
            © {currentYear} Hari Wahyu Ramadhan. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;