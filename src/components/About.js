import React from 'react';
import { 
  FiCode, FiDatabase, FiLayout, FiTrendingUp, FiSmartphone, 
  FiZap, FiServer, FiGitBranch, FiCloud, FiBriefcase, 
  FiCalendar 
} from 'react-icons/fi';
import { FaCertificate } from 'react-icons/fa';
import { SiJavascript, SiCisco } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: "PHP", icon: <FiCode />, level: 88, color: "from-purple-500 to-pink-500" },
    { name: "Laravel", icon: <FiServer />, level: 85, color: "from-red-500 to-orange-500" },
    { name: "JavaScript", icon: <FiCode />, level: 90, color: "from-yellow-500 to-orange-500" },
    { name: "Vue.js", icon: <FiLayout />, level: 87, color: "from-green-500 to-emerald-500" },
    { name: "Node.js", icon: <FiTrendingUp />, level: 85, color: "from-green-500 to-teal-500" },
    { name: "React.js", icon: <FiCode />, level: 88, color: "from-cyan-500 to-blue-500" },
    { name: "Express.js", icon: <FiTrendingUp />, level: 85, color: "from-green-500 to-teal-500" },
    { name: "Tailwind CSS", icon: <FiZap />, level: 92, color: "from-teal-500 to-cyan-500" },
    { name: "Bootstrap", icon: <FiSmartphone />, level: 90, color: "from-purple-500 to-indigo-500" },
    { name: "MySQL", icon: <FiDatabase />, level: 85, color: "from-blue-500 to-cyan-500" },
    { name: "Git", icon: <FiGitBranch />, level: 88, color: "from-orange-500 to-red-500" },
  ];

  const experiences = [
    {
      year: "2024 - 2025",
      title: "Web Developer Intern",
      company: "TVRI Yogyakarta",
      description: "Bertanggung jawab dalam pengembangan dan pemeliharaan sistem internal TVRI Yogyakarta. Berkolaborasi dengan tim untuk membangun aplikasi web yang efisien dan user-friendly.",
      achievements: [
        "Mengembangkan sistem manajemen konten berita menggunakan Laravel dan MySQL",
        "Membangun RESTful API dengan Node.js untuk integrasi data antar platform",
        "Mengimplementasikan fitur real-time notification menggunakan WebSocket",
        "Meningkatkan performa website dengan optimalisasi database query",
        "Berkolaborasi dengan tim menggunakan Git untuk version control"
      ]
    },
    {
      year: "2021 - 2026",
      title: "S1 Teknologi Informasi",
      company: "Universitas Muhammadiyah Yogyakarta",
      description: "Mendalami pengembangan web, database, dan algoritma pemrograman dengan fokus pada teknologi modern.",
      achievements: [
        "Menyelesaikan proyek akhir tentang sistem informasi akademik berbasis web",
        "Mengikuti berbagai workshop dan seminar pengembangan teknologi"
      ]
    }
  ];

  const tools = [
    { name: "Git/GitHub", icon: <FiGitBranch />, desc: "Version Control" },
    { name: "Postman", icon: <FiCloud />, desc: "API Testing & Documentation" },
    { name: "MySQL", icon: <FiDatabase />, desc: "Database Management" },
    { name: "VS Code", icon: <FiCode />, desc: "Code Editor" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Freshgraduate Teknologi Informasi dengan pengalaman internship di TVRI Yogyakarta, 
            memiliki passion dalam pengembangan web dan selalu haus akan teknologi baru.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Bio & Experience */}
          <div className="space-y-6 animate-slide-left">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Perjalanan Saya</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Halo! Saya <span className="text-cyan-400 font-semibold">Hari Wahyu Ramadhan</span>, 
                seorang Freshgraduate S1 Teknologi Informasi yang memiliki ketertarikan mendalam 
                di dunia pengembangan web. Perjalanan saya di dunia programming dimulai sejak 
                masa kuliah dan semakin berkembang saat menjalani internship di 
                <span className="text-cyan-400"> TVRI Yogyakarta</span>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Selama internship, saya mendapatkan pengalaman berharga dalam mengembangkan 
                aplikasi web skala enterprise, berkolaborasi dengan tim profesional, dan 
                menerapkan teknologi modern seperti Laravel, Node.js, dan Vue.js. Pengalaman 
                ini membentuk saya menjadi developer yang lebih baik dan siap menghadapi 
                tantangan industri.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Saya juga telah mendapatkan beberapa sertifikasi profesional, termasuk 
                <span className="text-cyan-400"> JavaScript International Certification</span> 
                dan <span className="text-cyan-400"> Cisco Certified Network Associate (CCNA)</span>. 
                Sertifikasi ini memperkuat kompetensi saya dalam pengembangan web dan pemahaman 
                tentang infrastruktur jaringan.
              </p>
            </div>
            
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text flex items-center gap-2">
                <FiBriefcase className="text-cyan-400" /> Pengalaman & Pendidikan
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-cyan-500/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full gradient-bg"></div>
                    <div className="flex items-center gap-2 text-sm text-cyan-400 mb-2">
                      <FiCalendar size={14} />
                      <span>{exp.year}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                    <div className="text-cyan-400 text-sm mb-3">{exp.company}</div>
                    <p className="text-gray-300 text-sm mb-3">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["Problem Solving", "Team Collaboration", "Communication", "Critical Thinking", "Time Management", "Adaptability", "Creativity", "Attention to Detail", "Fast Learner", "Documentation"].map((skill, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-cyan-500 hover:text-cyan-400 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Skills & Tools */}
          <div className="space-y-6 animate-slide-right">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 group-hover:opacity-80`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text flex items-center gap-2">
                <FiServer className="text-cyan-400" /> Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500 transition-all group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-cyan-400 text-xl group-hover:scale-110 transition-transform">
                        {tool.icon}
                      </div>
                      <span className="text-white font-medium">{tool.name}</span>
                    </div>
                    <p className="text-gray-500 text-xs">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-8">
  <h3 className="text-2xl font-bold mb-6 gradient-text flex items-center gap-2">
    <FaCertificate className="text-cyan-400" /> Certifications Highlight
  </h3>

  <div className="space-y-4">
    
    {/* JavaScript */}
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500 transition-all group">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-yellow-400 text-xl group-hover:scale-110 transition-transform">
          <SiJavascript size={24} />
        </div>
        <span className="text-white font-medium">
          JavaScript Certification
        </span>
      </div>
      <p className="text-gray-400 text-sm">
        Certified JavaScript Developer - August 2025
      </p>
      <p className="text-gray-500 text-xs mt-2">
        Kompetensi: JavaScript, ES6+, Programming Logic, Web Development
      </p>
    </div>

    {/* Cisco */}
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500 transition-all group">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-blue-400 text-xl group-hover:scale-110 transition-transform">
          <SiCisco size={24} />
        </div>
        <span className="text-white font-medium">
          CCNAv7: Introduction to Networks
        </span>
      </div>
      <p className="text-gray-400 text-sm">
        Cisco Networking Academy - February 2023
      </p>
      <p className="text-gray-500 text-xs mt-2">
        Kompetensi: Network Fundamentals, IP Addressing, Basic Troubleshooting
      </p>
    </div>

  </div>
</div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;