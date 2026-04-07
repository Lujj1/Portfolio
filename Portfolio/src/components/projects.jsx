import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ssa from '../assets/images/ssa.png';
import ecommerce from '../assets/images/ecommerce.png';
import florista from '../assets/images/florista.png';

export default function Projects() {
  const [activeAlert, setActiveAlert] = useState(null);

  const handleLinkClick = (e, link, index, type) => {
    if (link === '#') {
      e.preventDefault();
      setActiveAlert({ index, type });
      setTimeout(() => setActiveAlert(null), 2000);
    }
  };

  const projects = [
    {
      title: "Florisa – Flower Shop Landing Page",
      description: "Florisa was my first frontend project — a flower shop landing page built using HTML and CSS only. It helped me understand layout structure, semantic HTML, and core styling fundamentals.",
      tech: ["HTML", "CSS"],
      image: florista ,
      links: {
        demo: "#",
        code: "https://github.com/Lujj1/Flower-Shop.git"
      }
    },
    {
      title: "Smart Student Advisor - Dashboards",
      description: "A web application that helps students organize and plan their academic courses based on university credit systems. This project strengthened my skills in building structured logic and user-focused interfaces.",
      tech: ["React", "Tailwind CSS", "JavaScript" ,"Git"],
      image: ssa,
      links: {
        demo: "https://ssa-uniadvisor.vercel.app/login",
        code: "https://github.com/mohammeddamr/UniAdvisor/tree/main/Frontend"
      }
    },
    {
      title: "E-Commerce Website",
      description: "A team-based project where we worked together to build an e-commerce platform. I was responsible for developing several pages and implementing responsive layouts with clean UI structure.",
      tech: ["React", "Tailwind CSS", "JavaScript" ,"Git"],
      image: ecommerce,
      links: {
        demo: "#",
        code: "https://github.com/hussiensalem/ecommerce-storefront.git"
      }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills in frontend development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden group h-52">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <a 
                      href={project.links.demo} 
                      target="_blank"
                      rel="noopener noreferrer" 
                      onClick={(e) => handleLinkClick(e, project.links.demo, index, 'demo-icon')}
                      className="relative p-3 bg-white rounded-full text-slate-800 hover:text-purple-600 transition-colors shadow-lg hover:scale-110"
                    >
                      <FiExternalLink size={20} />
                      {activeAlert?.index === index && activeAlert?.type === 'demo-icon' && (
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-slate-800 text-white px-2 py-1 rounded whitespace-nowrap z-20">
                          No demo link
                        </span>
                      )}
                    </a>
                    <a 
                      href={project.links.code}  
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleLinkClick(e, project.links.code, index, 'code-icon')}
                      className="relative p-3 bg-white rounded-full text-slate-800 hover:text-purple-600 transition-colors shadow-lg hover:scale-110"
                    >
                      <FiGithub size={20} />
                      {activeAlert?.index === index && activeAlert?.type === 'code-icon' && (
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-slate-800 text-white px-2 py-1 rounded whitespace-nowrap z-20">
                          No code link
                        </span>
                      )}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-4 text-base leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <a 
                      href={project.links.demo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleLinkClick(e, project.links.demo, index, 'demo')}
                      className="flex w-full items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg text-sm"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                    {activeAlert?.index === index && activeAlert?.type === 'demo' && (
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-3 py-1 bg-slate-800 text-white text-xs rounded-md shadow-lg z-20 animate-fadeIn">
                        No demo link available
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 relative">
                    <a 
                      href={project.links.code} 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleLinkClick(e, project.links.code, index, 'code')}
                      className="flex w-full items-center justify-center gap-2 px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-lg font-medium hover:border-purple-600 hover:text-purple-600 transition-colors hover:shadow-md text-sm"
                    >
                      <FiGithub /> Code
                    </a>
                    {activeAlert?.index === index && activeAlert?.type === 'code' && (
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-3 py-1 bg-slate-800 text-white text-xs rounded-md shadow-lg z-20 animate-fadeIn">
                        No code link available
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
