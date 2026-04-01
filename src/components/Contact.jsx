import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative" style={{ background: 'linear-gradient(135deg, #f0f4f8 0%, #e8f4fd 100%)' }}>
      <div className="container mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-800">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Contact Info & Resume */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <div className="glass-card p-8 rounded-2xl flex-grow flex flex-col justify-center">
              <h3 className="text-2xl text-slate-800 font-bold mb-6">Contact Information</h3>

              <div className="space-y-6 mb-8">
                <a href="mailto:itsharshit@gmail.com" className="flex items-center gap-4 text-slate-600 hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg">itsharshit@gmail.com</span>
                </a>

                <a href="tel:+919548125472" className="flex items-center gap-4 text-slate-600 hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-teal-100 text-secondary rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.92z"></path></svg>
                  </div>
                  <span className="text-lg">+91 9548125472</span>
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                    <Linkedin size={20} />
                  </div>
                  <span className="text-lg">LinkedIn Profile</span>
                </a>

                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center">
                    <Github size={20} />
                  </div>
                  <span className="text-lg">GitHub Profile</span>
                </a>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-200">
                <a
                  href="/Latest_harshitGen_Cv.pdf"
                  download="Latest_harshitGen_Cv.pdf"
                  className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-200"
                >
                  <Download className="group-hover:-translate-y-1 transition-transform" size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Hello Harshit..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 group mt-2 shadow-lg shadow-blue-200"
              >
                Send Message
                <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
