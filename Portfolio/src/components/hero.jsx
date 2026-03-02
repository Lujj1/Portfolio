import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi';
import cv from '../assets/pdf/CV.pdf';

export default function Hero() {
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
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl font-medium text-[#a855f7] mb-4"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-[linear-gradient(65deg,_#a855f7,_#ec4899)]">
              Lujain Wahid El-Shafey
            </span>
          </motion.h1>

          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl text-slate-700  mb-8"
          >
            Frontend Developer | Web Developer
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-slate-600 text-gray-500 text-md md:text-lg leading-relaxed max-w-2xl mx-auto mb-12"
          >
            I build clean, responsive, and user-friendly web applications using React and modern web technologies.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#projects"
              className="group relative px-8 py-3.5 rounded-xl bg-[linear-gradient(to_right,#a855f7,#ec4899)] text-black font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto flex items-center justify-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <HiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            <a 
              href={cv} 
              download="cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3.5 rounded-xl bg-white text-slate-700 font-medium border border-slate-400 hover:border-primary-600 hover:text-primary-600 transition-all w-full sm:w-auto flex items-center justify-center gap-2 hover:shadow-md"
            >
              <FiDownload className="group-hover:animate-bounce" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
