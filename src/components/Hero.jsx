import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #eff6ff 0%, #f0f9ff 50%, #f5f3ff 100%)',
      }}
    >
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-6 inline-block"
            >
              <span className="bg-blue-100 text-primary border border-blue-200 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight tracking-tight"
            >
              Hi, I'm <span className="text-gradient">Harshit</span>
              <br />
              Java Developer &amp; ML Enthusiast
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl"
            >
              I'm a 3rd-year Computer Science student passionate about building scalable Java applications and training intelligent Machine Learning models. Let's build something amazing together.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="projects" smooth={true} duration={500}>
                <button className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-200">
                  View Projects
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <button className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-sm">
                  Contact Me
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative">
              {/* Animated glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 60%, #2563eb 80%, transparent 100%)',
                  padding: '3px',
                  borderRadius: '9999px',
                }}
              />
              {/* Soft glow backdrop */}
              <div
                className="absolute inset-[-16px] rounded-full blur-2xl opacity-30 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #2563eb 0%, #0891b2 50%, transparent 75%)' }}
              />
              {/* Photo frame */}
              <div
                className="relative rounded-full overflow-hidden border-4 border-blue-300 shadow-2xl shadow-blue-200"
                style={{ width: '320px', height: '380px' }}
              >
                <img
                  src={profileImg}
                  alt="Harshit - Profile Photo"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-sm font-medium tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-[40px] bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
