import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaMobileAlt } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      category: "Frontend",
      icon: <FaHtml5 className="w-8 h-8 text-white" />,
      color: "bg-orange-500",
      delay: 0
    },
    {
      name: "CSS",
      category: "Styling",
      icon: <FaCss3Alt className="w-8 h-8 text-white" />,
      color: "bg-blue-500",
      delay: 0.1
    },
    {
      name: "JavaScript",
      category: "Programming",
      icon: <FaJs className="w-8 h-8 text-white" />,
      color: "bg-yellow-500",
      delay: 0.2
    },
    {
      name: "React",
      category: "Framework",
      icon: <FaReact className="w-8 h-8 text-white" />,
      color: "bg-cyan-500",
      delay: 0.3
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      icon: <SiTailwindcss className="w-8 h-8 text-white" />,
      color: "bg-teal-500",
      delay: 0.4
    },
    {
      name: "Git",
      category: "Version Control",
      icon: <FaGitAlt className="w-8 h-8 text-white" />,
      color: "bg-red-500",
      delay: 0.5
    },
    {
      name: "GitHub",
      category: "Platform",
      icon: <FaGithub className="w-8 h-8 text-white" />,
      color: "bg-slate-800",
      delay: 0.6
    },
    {
      name: "Responsive Design",
      category: "Concept",
      icon: <FaMobileAlt className="w-8 h-8 text-white" />,
      color: "bg-purple-500",
      delay: 0.7
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: skill.delay }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
            >
              <div className={`w-14 h-14 rounded-xl ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-1">{skill.name}</h3>
              <p className="text-slate-500 text-sm font-medium">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
