import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { HiDocumentText } from 'react-icons/hi';
import resumePdf from '../assets/pdf/Lujain wahid CV.pdf';

export default function Resume() {
  return (
    <section id="resume" className="py-12 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[70%] mx-auto overflow-hidden rounded-[2rem] relative shadow-2xl"
        >
          {/* Gradient Background - matching Hero colors, flowing top to bottom */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#a855f7,#ec4899)]" />
          
          {/* Content Overaly */}
          <div className="relative z-10 py-12 px-6 md:py-16 md:px-10 text-center text-white">
            {/* Icon Circle */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <HiDocumentText className="text-3xl text-white" />
            </motion.div>

            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-4xl font-semibold mb-4"
            >
              Download My Resume
            </motion.h2>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-white/80 max-w-xl mx-auto mb-8 leading-relaxed"
            >
              Get a detailed overview of my skills, experience, education, and projects. Available in PDF format for easy viewing.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a 
              target="_blank"
              rel="noopener noreferrer"
                href={resumePdf} 
                className="inline-flex items-center gap-3 bg-white text-[#4f46e5] px-6 py-3 rounded-lg font-semibold text-base hover:bg-slate-50 hover:scale-105 transition-all shadow-lg"
              >
                <FiDownload className="text-xl" />
                Download Resume (PDF)
              </a>
            </motion.div>
          </div>

          {/* Decorative subtle patterns/glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </motion.div>
      </div>
    </section>
  );
}
