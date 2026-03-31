import React, { useEffect, useState } from 'react';
import { FiCode } from 'react-icons/fi';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center">
      {/* Simple Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]"></div>
      
      <div className="relative z-10 text-center px-4">
        {/* Logo */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 border border-white/10 rounded-full"></div>
          <div className="absolute inset-2 border border-white/20 rounded-full"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <FiCode className="text-white/50 text-2xl" />
          </div>
        </div>

        {/* Name */}
        <div className="mb-2">
          <h2 className="text-xl md:text-2xl font-light text-white/90 tracking-wide">
            Hari Wahyu Ramadhan
          </h2>
        </div>
        
        {/* Divider */}
        <div className="w-12 h-px bg-white/20 mx-auto my-4"></div>
        

        {/* Progress */}
        <div className="w-48 mx-auto">
          <div className="h-px bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-white/40 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-600 text-xs mt-2 font-mono">
            {Math.round(progress)}%
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Loader;