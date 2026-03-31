import React from 'react';
import { FaCertificate, FaAward, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { SiCisco, SiJavascript } from 'react-icons/si';

const Certifications = () => {
    const certifications = [
        {
          id: 1,
          title: "JavaScript Certification",
          issuer: "International Certification",
          icon: <SiJavascript className="text-yellow-400" size={32} />,
          date: "August 2025",
          credential: "2Kp5-XMzU",
          description: "Certification demonstrating proficiency in JavaScript programming including core concepts, modern syntax, and best practices.",
          skills: ["JavaScript", "ES6+", "Programming Logic", "Web Development"],
          link: "/certificates/javascript.pdf",
          featured: true
        },
        {
          id: 2,
          title: "CCNAv7: Introduction to Networks",
          issuer: "Cisco Networking Academy",
          icon: <SiCisco className="text-blue-400" size={32} />,
          date: "February 2023",
          credential: "Cisco Certificate",
          description: "Certification covering networking fundamentals including network architecture, IP addressing, and basic troubleshooting.",
          skills: ["Networking", "IP Addressing", "Network Fundamentals", "Troubleshooting"],
          link: "/certificates/ccna.pdf",
          featured: true
        }
      ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaCertificate className="text-cyan-400 text-3xl" />
            <h2 className="text-3xl md:text-4xl font-bold">
              My <span className="gradient-text">Certifications</span>
            </h2>
          </div>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Sertifikasi profesional yang membuktikan kompetensi dan keahlian saya di bidang 
            pengembangan web dan jaringan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className="glass-effect rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-white/10 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                      <p className="text-cyan-400 text-sm">{cert.issuer}</p>
                    </div>
                    {cert.featured && (
                      <span className="px-2 py-1 rounded-full gradient-bg text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt size={12} />
                      <span>{cert.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaAward size={12} />
                      <span>{cert.credential}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={cert.link}
                    className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    View Certificate 
                    <FaExternalLinkAlt size={12} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="glass-effect rounded-xl p-4 text-center">
            <div className="text-3xl font-bold gradient-text mb-1">2</div>
            <div className="text-gray-400 text-sm">Certifications</div>
          </div>
          <div className="glass-effect rounded-xl p-4 text-center">
            <div className="text-3xl font-bold gradient-text mb-1">2</div>
            <div className="text-gray-400 text-sm">International Certs</div>
          </div>
          <div className="glass-effect rounded-xl p-4 text-center">
            <div className="text-3xl font-bold gradient-text mb-1">1</div>
            <div className="text-gray-400 text-sm">Cisco Certifications</div>
          </div>
          <div className="glass-effect rounded-xl p-4 text-center">
            <div className="text-3xl font-bold gradient-text mb-1">100%</div>
            <div className="text-gray-400 text-sm">Passing Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;