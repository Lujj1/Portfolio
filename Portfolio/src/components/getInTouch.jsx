import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaGithub } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

export default function GetInTouch() {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-white text-xl" />,
      label: "Email",
      value: "Lujainwahid.div@gmail.com",
      color: "bg-purple-500"
    },
    {
      icon: <FaPhoneAlt className="text-white text-xl" />,
      label: "Phone",
      value: "+201022172253",
      color: "bg-teal-500"
    },
    {
      icon: <FaGithub className="text-white text-xl" />,
      label: "GitHub",
      value: "github.com/Lujj1",
      color: "bg-slate-800"
    }
  ];

  return (
    <section id="contact" className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column - Contact Details */}
          <div className="w-full lg:w-[35%] space-y-6">
            <h3 className="text-lg font-medium text-slate-700 mb-4">Contact Information</h3>
            
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-5 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{item.label}</p>
                    <p className="text-slate-800 font-semibold break-all">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-brand-purple/5 via-brand-pink/5 to-brand-blue/5 border border-brand-purple/10"
            >
              <h4 className="text-slate-800 font-bold mb-3 flex items-center gap-2">
                Available for Opportunities
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                I'm currently open to frontend developer roles, freelance projects, and collaboration opportunities. Let's build something amazing together!
              </p>
            </motion.div>
          </div>

          {/* Right Column - Message Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[65%] bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-50 flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-5 py-2.5 bg-gray-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all text-base"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-5 py-2.5 bg-gray-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all text-base"
                />
              </div>
              <div>
                <textarea 
                  rows="3" 
                  placeholder="Your Message" 
                  className="w-full px-5 py-2.5 bg-gray-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all resize-none text-base"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2.5 bg-[linear-gradient(65deg,_#a855f7,_#ec4899)] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group text-base"
              >
                <FiSend className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
