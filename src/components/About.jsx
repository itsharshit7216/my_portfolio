import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BookOpen, GraduationCap, Github } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-white">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-800">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-slate-600 text-lg leading-relaxed"
          >
            <p>
              Hello! I'm <span className="text-slate-800 font-semibold">Harshit</span>, a passionate 3rd-year Computer Science student specializing in building scalable systems and intelligent models.
            </p>
            <p>
              My journey in tech revolves around <span className="text-primary font-medium">Java Development</span> and <span className="text-secondary font-medium">Machine Learning</span>, bridging the gap between robust backend software and data-driven intelligence.
            </p>
            <p>
              I thrive on solving complex computational problems, designing efficient architectures, and exploring the expansive world of algorithms and web technologies.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Education Card */}
            <div className="glass-card p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="p-3 bg-blue-100 text-primary rounded-lg">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-slate-800 font-bold text-lg mb-1">Education</h3>
                <p className="text-slate-500 text-sm">3rd Year CS Student</p>
                <p className="text-slate-500 text-sm font-medium">Lovely Professional University</p>
              </div>
            </div>

            {/* Core Focus Card */}
            <div className="glass-card p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-secondary/50 hover:shadow-lg transition-all">
              <div className="p-3 bg-teal-100 text-secondary rounded-lg">
                <Code2 size={24} />
              </div>
              <div>
                <h3 className="text-slate-800 font-bold text-lg mb-1">Core Focus</h3>
                <p className="text-slate-500 text-sm">Java &amp; Machine Learning</p>
                <p className="text-slate-500 text-sm mt-1">Algorithm Optimization</p>
              </div>
            </div>

            {/* DSA Card */}
            <div className="glass-card p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-blue-400/50 hover:shadow-lg transition-all">
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-slate-800 font-bold text-lg mb-1">Problem Solving</h3>
                <p className="text-slate-500 text-sm">Data Structures</p>
                <p className="text-slate-500 text-sm mt-1">&amp; Advanced Algorithms</p>
              </div>
            </div>

            {/* Developer Card */}
            <div className="glass-card p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-purple-400/50 hover:shadow-lg transition-all">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                <Github size={24} />
              </div>
              <div>
                <h3 className="text-slate-800 font-bold text-lg mb-1">Open Source</h3>
                <p className="text-slate-500 text-sm">GitHub &amp; Git</p>
                <p className="text-slate-500 text-sm mt-1">Community Projects</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
