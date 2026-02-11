import { motion } from 'framer-motion';
import { FaBook, FaRocket, FaGraduationCap } from 'react-icons/fa';

export default function Journey() {
  const events = [
    {
      year: "2024",
      title: "The Beginning",
      description: "Started my frontend journey by taking a Frontend Development course at Seef Academy. In the same year, I completed a Flutter mobile app course with WE Telecom Egypt and practiced HTML, CSS, and React through small projects.",
      icon: <FaBook />,
      gradient: "from-purple-600 to-indigo-600",
      shadow: "shadow-purple-200"
    },
    {
      year: "2025",
      title: "Advanced Growth & Team Experience",
      description: "Joined the DEPI Frontend Program, where I worked on real-world projects and strengthened my React skills. I collaborated within a team to build a full website and also worked on a graduation project, gaining hands-on experience in teamwork and project development.",
      icon: <FaRocket />,
      gradient: "from-teal-500 to-emerald-500",
      shadow: "shadow-teal-100"
    },
    {
      year: "2026",
      title: "Graduation & Professional Focus",
      description: "Graduating in Communication and Computer Engineering while continuing to improve my frontend expertise. Focused on building scalable applications, refining problem-solving skills, and preparing for professional opportunities in web development.",
      icon: <FaGraduationCap />,
      gradient: "from-indigo-600 to-blue-600",
      shadow: "shadow-indigo-200"
    }
  ];

  return (
    <section id="journey" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-4">
            Growth Journey
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
             My evolution as a frontend developer over the years
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-200 via-purple-400 to-indigo-200 rounded-full hidden md:block" />
          
          <div className="space-y-10 md:space-y-20">
            {events.map((event, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12 md:mb-0`}>
                
                {/* Empty Side (Desktop) */}
                <div className="hidden md:block w-[46%]" />

                {/* Central Icon container for stable centering */}
                <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center py-4 md:py-0">
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      rotate: { duration: 0.8, ease: "easeInOut" },
                      scale: { duration: 0.2 }
                    }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.gradient} flex items-center justify-center text-white text-2xl shadow-lg cursor-pointer`}
                  >
                    {event.icon}
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3,
                    scale: { duration: 0.3 }
                  }}
                  className={`w-full md:w-[46%] bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-2xl transition-all duration-300 relative ${event.shadow} flex flex-col ${index % 2 !== 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}
                >
                  <span className={`inline-block px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-4 bg-gradient-to-r ${event.gradient}`}>
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {event.description}
                  </p>
                  

                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
