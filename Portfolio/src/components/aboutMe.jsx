import { motion } from 'framer-motion';
import profile from "../assets/profile.jpg"

export default function AboutMe() {
  const stats = [
    { label: "Location", value: "Egypt" },
    { label: "Experience", value: "Intern" },
    { label: "Training", value: "DEPI" },
    { label: "Focus", value: "Frontend Development" },
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };


  return (
    <section id="about" className="bg-white py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-center text-slate-800 mb-16"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Column - ID Card Image Effect */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-72 h-80 md:w-80 md:h-96 group perspective-1000">
              {/* Animated Background Cards */}
              <div className="absolute inset-0 bg-blue-400 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500 ease-out opacity-40 translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-purple-500 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 ease-out opacity-40 -translate-x-2 -translate-y-2" />
              
              {/* Main Image Container */}
              <div className="absolute inset-0 bg-gray-200 rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-105 z-10">
                <img 
                  src={profile} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="w-full md:w-1/2 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
          <motion.div variants={variants} className="prose prose-lg text-slate-600">
  <p>
    I'm a <span className="text-purple-600 font-semibold">Communication and Computer Engineer</span> with a strong passion for computers, programming, and frontend development. I enjoy turning ideas into real, interactive web experiences and building clean, user-friendly interfaces.
  </p>

  <p>
    I started my frontend journey by taking a course at 
    <span className="text-purple-600 font-semibold"> Sef Academy</span>, where I built a solid foundation in HTML, CSS, and JavaScript. Wanting to deepen my knowledge and earn an accredited certificate, I applied for the 
    <span className="text-purple-600 font-semibold"> DEPI program</span>, where my official professional journey truly began.
  </p>

  <p>
    Throughout the DEPI course, my passion for frontend and web development grew even stronger. I gained hands-on experience with modern tools and technologies, improved my problem-solving skills, and learned how to build structured, scalable applications using React and Tailwind.
  </p>

  <p>
    Today, I’m still learning, still building, and constantly striving to improve. I’m driven by curiosity, growth, and the goal of creating web applications that not only look great but also deliver excellent user experiences.
  </p>
</motion.div>


            {/* Stats Grid */}
            <motion.div variants={variants} className="grid grid-cols-2 gap-y-8 gap-x-12 pt-4">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h4 className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-2">{stat.label}</h4>
                  <p className="text-lg font-semibold text-slate-800">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
