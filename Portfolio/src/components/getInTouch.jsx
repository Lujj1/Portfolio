import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaCheckCircle } from 'react-icons/fa';
import { FiSend, FiLoader } from 'react-icons/fi';

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name.toLowerCase()]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Prepare data for Web3Forms
    const formToSubmit = new FormData();
    formToSubmit.append('access_key', '5298b1ea-f134-49b3-9c91-25c940912097'); // Replace with your real key
    formToSubmit.append('name', formData.name);
    formToSubmit.append('email', formData.email);
    formToSubmit.append('message', formData.message);
    formToSubmit.append('subject', `New Portfolio Message from ${formData.name}`);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formToSubmit
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

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
            
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <FaCheckCircle className="text-3xl" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Message Sent!</h4>
                <p className="text-slate-600">Thank you for reaching out. I'll get back to you soon.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-purple-600 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input 
                    required
                    name="Name"
                    type="text" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-5 py-2.5 bg-gray-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all text-base disabled:opacity-50"
                  />
                </div>
                <div>
                  <input 
                    required
                    name="Email"
                    type="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-5 py-2.5 bg-gray-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all text-base disabled:opacity-50"
                  />
                </div>
                <div>
                  <textarea 
                    required
                    name="Message"
                    rows="3" 
                    placeholder="Your Message" 
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-5 py-2.5 bg-gray-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all resize-none text-base disabled:opacity-50"
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  disabled={status === 'loading'}
                  className="w-full py-2.5 bg-[linear-gradient(65deg,_#a855f7,_#ec4899)] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <FiLoader className="animate-spin text-xl" />
                  ) : (
                    <FiSend className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  )}
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </motion.button>
                
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
